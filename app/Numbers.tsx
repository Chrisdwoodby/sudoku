import React from "react";

export default function Numbers(props:any) {
    const validate = function() {
        const nums = '123456789'
        var vertical = [];
        for (var i = 0; i < props.grid.length; i ++) {
          var tracker = {};
          for (var j = 0; j < props.grid[i].length; j ++) {
            if (!tracker[props.grid[i][j]] && nums.indexOf(props.grid[i][j]) !== -1 && props.grid[i][j] !== "") {
              tracker[props.grid[i][j]] = 1;
              vertical[i] = [j, props.grid[i][j]];
            } else if (tracker[props.grid[i][j]]) {
              alert('not valid');
              delete tracker[props.grid[i][j]];
            }
          }
        }
        var dup = [];
        vertical.forEach(function(item) {
          if (dup[item]) {
            alert('not valid');
          } else {
            dup[item] = true;
          }
        }) 
      }


  const placement = function(num, i:number, j:number) {
    if (!Number(num)) {
    //   alert('only numbers are allowed')
    }
    var board = props.grid
    board[i][j] = num;
    props.setGrid(board);
    validate();
  }

  return (
    <td id="input"><input id="box" type="text" placeholder={props.num} onChange={event => placement(event.target.value, props.i, props.j)}/></td>
  )
}