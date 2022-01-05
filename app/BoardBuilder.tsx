import React from "react";
import Rows from "./Rows.tsx";

export default function BoardBuilder(props:any) {
  
  return (
    <table id="table">
      <tbody>
        {props.grid.map((row:object, i:number) => 
          <Rows key={i} grid={props.grid} setGrid={props.setGrid} row={row} i={i}/>
        )}
      </tbody>
    </table>
  )
}