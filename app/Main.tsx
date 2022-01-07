import React, { useState, useEffect } from "react";
import BoardBuilder from "./BoardBuilder.tsx";

export default function Main(props:any) {
  const [timer, setTimer] = useState('Start Timer')
  const [grid, setGrid] = useState([  
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '']
  ]);
  var totalSeconds = 0;
  function countTimer() {
    totalSeconds ++
    var hour = Math.floor(totalSeconds / 3600);
    var minute = Math.floor((totalSeconds - hour * 3600) / 60);
    var seconds = totalSeconds - (hour * 3600 + minute * 60);
    if(hour < 10) {
      hour = "0" + hour;
    }
    if(minute < 10) {
      minute = "0" + minute;
    }
    if(seconds < 10) {
      seconds = "0" + seconds;
    }
    document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
  }
  const startTimer = () => {
    var timerVar = setInterval(countTimer, 1000);
    if (timer === 'Start Timer') {
      setTimer('Pause Timer');
    } else {
      var x = timerVar;
      totalSeconds = 0
      setTimer('Start Timer');
    }
  }
  return (
    <div>
      <button onClick={startTimer}>{timer}</button>
      <div id="timer"></div>
      <BoardBuilder grid={grid} setGrid={setGrid}/>
    </div>
  )
}