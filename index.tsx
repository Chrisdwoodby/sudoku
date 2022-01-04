import React from 'react';
import ReactDOM from 'react-dom';
import Main from './app/Main.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const GameBoard = function() {
  return (
    <div>
      <h1>gamebaord here</h1>
      <Main/>
    </div>
  )
}

ReactDOM.render(<GameBoard/>, document.getElementById('app'));