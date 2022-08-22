import React, { useState, useEffect } from 'react'
import {connect, useDispatch} from 'react-redux'
import { setNewColor, newBoard, winBoard, loseBoard } from "./redux/actions"

import './App.css';

function App(props) {
  let { board, won, color, clickToStart } = props;
  let [turn, setTurn] = useState(0);
  let dispatch = useDispatch();

  useEffect(() => {
    if (turn === 21 || won === 324) {
      if (won === 324) {
        dispatch(winBoard());
      }
      else {
        dispatch(loseBoard())
      }
      setTurn(0);
    }
  }, [won, turn, props])


  const onClick = (newColor) => {
    return () => {
      if (color === newColor) return;
      dispatch(setNewColor({x: 0, y: 0, color: newColor, turn: turn + 1}))
      setTurn(turn + 1);
    }
  }
  const clickToRestart = () => {
    dispatch(newBoard())
    setTurn(0);
  }
  return (
    <div className="App">
      <div className={"bord-holder"}>
        {board.map(function(row, indexX) {
          return (
          <div key={`row${indexX}`} className={'single-row'}>
            {board[indexX].map(function(element, indexY) {
              return (
                  <div key={`col${indexY}`} className={'single-cube'}
                       style={{background:element.color}}
                       onClick={!clickToStart ? onClick(element.color) : clickToRestart} />
              )
            })}
          </div>);
        })}
        <div className={"text-holder"}>
          Turn: {turn}
          <br />
          Points: {won - turn}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App)
