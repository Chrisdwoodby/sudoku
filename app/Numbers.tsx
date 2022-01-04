import React from "react";

export default function Numbers(props) {
    const validate = function() {
        var nums = '123456789'
        for (var i = 0; i < props.grid.length; i ++) {
          var tracker = {};
          for (var j = 0; j < props.grid[i].length; j ++) {
          
            if (!tracker[props.grid[i][j]] && nums.indexOf(props.grid[i][j]) !== -1 && props.grid[i][j] !== "") {
              tracker[props.grid[i][j]] = 1
            } else if (tracker[props.grid[i][j]]) {
              console.log(false)
            }
          }
          console.log(tracker)
        }
      }
//   const validate = function() {
//     var nums = '123456789'
//     for (var i = 0; i < props.grid.length; i ++) {
// //       var row = grid[i];
// //       console.log(grid[i])
//       for (var j = 0; j < props.grid[i].length; j ++) {
//         if (props.grid[i].indexOf(props.grid[i][j]) !== props.grid[i].lastIndexOf(props.grid[i][j]) && nums.indexOf(props.grid[i][j])) {
// //           console.log(row[j]);
//           console.log('a')
//           alert('invalid placement');
//         }
//         // if (props.row.indexOf(row[j][i]) !== row.lastIndexOf(row[j][i]) && Number(row[j])) {
//         // //   alert('invalid placement');
//         // console.log('b')
//         // } 
//       }
//     }
//   }

  const placement = function(num, i, j) {
    if (!Number(num)) {
    //   alert('only numbers are allowed')
    }
    var board = props.grid
    board[i][j] = num;
    props.setGrid(board);
    validate();
  }

  return (
    <td><input type="text" placeholder={props.num} onChange={event => placement(event.target.value, props.i, props.j)}/></td>
  )
}