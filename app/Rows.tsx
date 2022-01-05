import React from "react";
import Row from 'react-bootstrap/Row';
import Numbers from "./Numbers.tsx";

export default function Rows(props:any) {

  return (
    <tr id="row">
      {props.row.map((num:string, j:number) => <Numbers key={j} grid={props.grid} setGrid={props.setGrid} num={num} i={props.i} j={j}/>)}
    </tr>
  )
}