import React, { useState, useEffect } from "react";
import BoardBuilder from "./BoardBuilder.tsx";

export default function Main(props:any) {
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

  return (
    <div>
      <BoardBuilder grid={grid} setGrid={setGrid}/>
    </div>
  )
}