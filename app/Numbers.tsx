import React from "react";

export default function Numbers(props:any) {
    function validate(board){
        var grid = [];
        // first horizonal rows
        for (var i = 0; i < board.length; i++) {
          if (board[i].indexOf('0') !== -1) {
            return 'Try again!'
          }
          var unique = [...new Set(board[i])];
          if (board[i].length !== unique.length) {
            return 'Try again!';
          }
        }
        // second columns
        for (var i = 0; i < 9; i++) {
          var inner = []
          for (var j = 0; j < board.length; j++) {
            inner.push([board[j][i]]);
          }
          grid.push(inner);
        }
        // check columns
          for (var i = 0; i < grid.length; i++) {
          var unique = [...new Set(grid[i])];
          if (grid[i].length !== unique.length) {
            return 'Try again!';
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
          for (var i = bigstart; i < board.length - bigend; i++) {  
            for (var j = start; j < board[i].length - end; j++) {
              cube.push(board[i][j]);
            }
          }
          cubeContainer.push(cube)
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
        console.log(cubeContainer);
        return 'Finished';
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