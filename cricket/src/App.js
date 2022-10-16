import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [data,setData] =useState({
    names:["Rohit","Rahul","Virat","SKY"],
    wicketNo:0,
    score:0,
    playerScores:[0,0,0,0],
    sixes:[0,0,0,0],
    fours:[0,0,0,0],
    ballsFaced:[0,0,0,0]
  })

  const AddDot = (e) =>
  {
    e.preventDefault();
    data.ballsFaced[data.wicketNo]+=1;
    setData({...data})
  }

  const AddSingle =(e) =>
  {
    e.preventDefault();
    data.ballsFaced[data.wicketNo]+=1;
    setData({...data,score:data.score+1});
  }

  const AddFour =(e) =>
  {
    e.preventDefault();
    data.fours[data.wicketNo]+=1;
    data.ballsFaced[data.wicketNo]+=1;
    setData({...data,score:data.score+4,});
  }

  const AddSix =(e) =>
  {
    e.preventDefault();
    data.sixes[data.wicketNo]+=1;
    data.ballsFaced[data.wicketNo]+=1;
    setData({...data,score:data.score+6});
  }

  const newBatsmen=(e)=>
  {
    e.preventDefault();
    data.playerScores[data.wicketNo]=data.score;
    data.ballsFaced[data.wicketNo]+=1;
    setData({...data,score:0,wicketNo:data.wicketNo+1})
  }

  var powerMeter="yellow";
  var sr = data.score/data.ballsFaced[data.wicketNo]*100;
  if(sr>=400)
  {
    powerMeter="green";
  }
  else if(sr<400 && sr>=200)
  {
    powerMeter="lightgreen";
  }
  else if(sr>=150 && sr<200)
  {
    powerMeter="skyblue";
  }
  else if(sr>100 && sr<=150)
  {
    powerMeter="orange";
  }
  else
  {
    powerMeter="red"
  }

  if(data.wicketNo>3)
  {
    var maxScore=0;
    var topScorer="";
    for(let i=0;i<4;i++)
    {
      if(data.playerScores[i]>maxScore)
      {
          maxScore=data.playerScores[i];
          topScorer=data.names[i];
      }
    }

    return (
      <div className='bg-info text-center'>
        <h1 className='bg-success'>Top Scorer : {topScorer}</h1>

        <div>Player Name   : {data.names[0]}</div>
        <div>Score         : {data.playerScores[0]}</div>
        <div>Balls Faced   : {data.ballsFaced[0]}</div>
        <div>Fours         : {data.fours[0]}</div>
        <div>Sixes         : {data.sixes[0]}</div>
        <div>Strike Rate   : {Math.round((data.playerScores[0]/data.ballsFaced[0]*100+ Number.EPSILON) * 100) / 100}</div>
        <br/>
        <div>Player Name   : {data.names[1]}</div>
        <div>Score         : {data.playerScores[1]}</div>
        <div>Balls Faced   : {data.ballsFaced[1]}</div>
        <div>Fours         : {data.fours[1]}</div>
        <div>Sixes         : {data.sixes[1]}</div>
        <div>Strike Rate   : {Math.round((data.playerScores[1]/data.ballsFaced[1]*100+ Number.EPSILON) * 100) / 100}</div>
        <br/>
        <div>Player Name   : {data.names[2]}</div>
        <div>Score         : {data.playerScores[2]}</div>
        <div>Balls Faced   : {data.ballsFaced[2]}</div>
        <div>Fours         : {data.fours[2]}</div>
        <div>Sixes         : {data.sixes[2]}</div>
        <div>Strike Rate   : {Math.round((data.playerScores[2]/data.ballsFaced[2]*100+ Number.EPSILON) * 100) / 100}</div>
        <br/>
        <div>Player Name   : {data.names[3]}</div>
        <div>Score         : {data.playerScores[3]}</div>
        <div>Balls Faced   : {data.ballsFaced[3]}</div>
        <div>Fours         : {data.fours[3]}</div>
        <div>Sixes         : {data.sixes[3]}</div>
        <div>Strike Rate   : {Math.round((data.playerScores[3]/data.ballsFaced[3]*100+ Number.EPSILON) * 100) / 100}</div>
      </div>
    );
  }


  return (
    <div className="bg-dark text-center text-light">
      <h4>Player {data.wicketNo + 1}</h4>
      <h1>{data.names[data.wicketNo]}</h1>
      <h2>{data.score}</h2>
      <h6>({data.ballsFaced[data.wicketNo]})</h6>

      <button onClick={AddDot} className="btn btn-warning mx-1">Dot</button>
      <button onClick={AddSingle} className="btn btn-info mx-1">Single</button>
      <button onClick={AddFour} className="btn btn-success mx-1">Four</button>
      <button onClick={AddSix} className="btn btn-primary mx-1">Six</button>
      <button onClick={newBatsmen} className="btn btn-danger mx-1">Out</button>
        
      <br/><br/>
      <div>
        <h4>Power Meter</h4>
        <center>
        <div style={{'backgroundColor':powerMeter,'height':'75px','width':'150px'}} className="rounded text-dark">
          Current form  {powerMeter}  {Math.round((sr + Number.EPSILON) * 100) / 100}
        </div>
        </center> 
      </div>  
    </div>
  );
}

export default App;
