import React from "react";

export default function Numbers(props:any) {
    const validate = function(){
        var grid = [];
        // first horizonal rows
        for (var i = 0; i < props.grid.length; i++) {
          var tracker = {};
          for (var j = 0; j < props.grid[i].length; j++) {
            if (!tracker[props.grid[i][j]] && Number(props.grid[i][j])) {
              tracker[props.grid[i][j]] = true;
            } else if (tracker[props.grid[i][j]]){
              alert('Try again!');
            }
          }
        }
        // second columns
        for (var i = 0; i < 9; i++) {
          var inner = []
          for (var j = 0; j < props.grid.length; j++) {
            inner.push([props.grid[j][i]]);
          }
          grid.push(inner);
        }
        // check columns
          for (var i = 0; i < grid.length; i++) {
           var tracker = {};
          for (var j = 0; j < grid[i].length; j++) {
            if (!tracker[grid[i][j]] && Number(grid[i][j])) {
              tracker[grid[i][j]] = 1;
            } else if (tracker[grid[i][j]]) {
              alert('try again')
            }
          }
        }
        // last put each 3X3 cube into an array
        var bigstart = 0;
        var bigend = 6;
        var start = 0;
        var end = 6;
        var cubeContainer = [];
        var cube = [];
        var index = 0;
        while (index !== 9) {
          for (var i = bigstart; i < props.grid.length - bigend; i++) {  
            for (var j = start; j < props.grid[i].length - end; j++) {
              cube.push(props.grid[i][j]);
            }
          }
          cubeContainer.push(cube);
          index += 1
          if (start === 0 && end === 6) {
            start = 3;
            end = 3;
          } else if (start === 3 && end === 3) {
            start = 6;
            end = 0;
          } else if (bigend === 6 && bigstart === 0 && start === 6 && end === 0) {
            start = 0;
            end = 6;
            bigstart = 3;
            bigend = 3;
          } else if (bigend === 3 && bigstart === 3 && start === 6 && end === 0) {
            bigstart = 6;
            bigend = 0;
            start = 0;
            end = 6;
          }
          cube = [];
        }
        for (var i = 0; i < cubeContainer.length; i++) {
          var cubeTracker = {};
          for (var j = 0; j < cubeContainer[i].length; j++) {
            if (!cubeTracker[cubeContainer[i][j]] && Number(cubeContainer[i][j])) {
              cubeTracker[cubeContainer[i][j]] = true;
            } else if (cubeTracker[cubeContainer[i][j]]) {
              alert('try again')
            }
          }
        }
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