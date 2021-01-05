import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setNewColor, newBoard } from "./redux/actions"

import './App.css';

function App(props) {
  let { board, won } = props;
  let [turn, setTurn] = useState(0);

  useEffect(() => {
    if (turn === 21 || won === 324) {
      alert(`Game ended!!! You have ${won === 324 ? 'Won' : 'lost'}!!!`);
      const {dispatch} = props

      dispatch(newBoard())
      setTurn(0);
    }
  }, [won, turn])


  const onClick = (color) => {
    return () => {
      const {dispatch} = props

      dispatch(setNewColor({x: 0, y: 0, color, turn: turn + 1}))
      setTurn(turn + 1);
    }
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
                       onClick={onClick(element.color)} />
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
