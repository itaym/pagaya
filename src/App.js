import React, { useState, useEffect } from 'react'
import {connect, useDispatch} from 'react-redux'
import { setNewColor, newBoard, winBoard, loseBoard } from "./redux/actions"

import './App.css';

//const moves = []
let thisIsALost = 0,thisIsAWin = 0,games = 0, minTurn = Number.MAX_SAFE_INTEGER, move = 0, turn = 0, startTime = performance.now()
function getMoves() {
  let count = 0
  let array = []
  function makeCol(startRow, endRow, column) {
    let multiple = endRow > startRow ? 1 : -1
    for (let x = startRow; x !== endRow; x += multiple) {
      //console.log(x, column)
      array.push({ row: x, column: column })
      count++
    }
    //console.log(endRow, column)
    array.push({ row: endRow, column: column })
    count++
    //console.log(`makeCol(${startRow}, ${endRow}, ${column}) (${count})`)
  }

  function makeRow(row, startColumn, endColumn) {
    let multiple = endColumn > startColumn ? 1 : -1
    for (let x = startColumn; x !== endColumn; x += multiple) {
      //console.log(row, x)
      array.push({ row: row, column: x })
      count++
    }
    //console.log(row, endColumn)
    array.push({ row: row, column: endColumn })
    count++
    //console.log(`makeRow(${row}, ${startColumn}, ${endColumn}) (${count})`)
  }
  for (let x = 0; x < 9; x++) {
    let y = x
    makeCol(x, 17 - x, y)
    makeRow(17 - x, y + 1, 17- y)
    makeCol(17 - x - 1, x, 17 - y)
    makeRow(x, 17 - y - 1, y + 1)
  }
  array.shift()
  return array
}
function App(props) {
  let { board, won, color, clickToStart } = props;
  // let [turn, setTurn] = useState(0);
  let [moves] = useState(getMoves());
  let dispatch = useDispatch();

  useEffect(() => {
    if (turn === 21 || won === 324) {

      if (won === 324) {
        // dispatch(winBoard());
        setTimeout(() => dispatch(newBoard()), 500)
        thisIsAWin++;
        if (minTurn > turn) minTurn = turn
      }
      else {
        // dispatch(loseBoard())
        setTimeout(() => dispatch(newBoard()), 1)
        thisIsALost++;
      }
      move = 0
      turn = 0
      games++;
      // alert(`Game ended!!! You have ${won === 324 ? 'Won' : 'lost'}!!!`);
      //
      // dispatch(newBoard())

      console.log(games, thisIsAWin, thisIsALost, ((thisIsAWin + 0.001)/games * 100).toFixed(2), minTurn, (1000 / ((performance.now() - startTime) / games)).toFixed(2))
      return
    }
    let newColor
    do {
      newColor = document.getElementById(`${moves[move].row}-${moves[move].column}`).getAttribute('color');
      move++
    } while (!doColor(newColor))

    // console.log(moves[move], move)
  }, [won, props, moves])

  const doColor = (newColor) => {
    if (color === newColor) return false
    dispatch(setNewColor({x: 0, y: 0, color: newColor, turn: turn + 1}))
    turn++
    return true
  }

  const onClick = (newColor) => {
    return () => {
      if (color === newColor) return false
      dispatch(setNewColor({x: 0, y: 0, color: newColor, turn: turn + 1}))
      turn++
      return true
    }
  }
  const clickToRestart = () => {
    dispatch(newBoard())
    turn = 0
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
                       id={`${indexX}-${indexY}`}
                       color={`${element.color}`}
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
