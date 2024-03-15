import React, { useState } from 'react';
import './TicTacToe.css';
import './TicTacToe.css';

const TicTacToe = () => {

  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
        return state[a];
      }

    }
    return false;


  }

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  }

  const handleReset = () => {
    setState(Array(9).fill(null));
  }


  return (
    <div className='container'>
      {
        isWinner ? (
          <>
            <h2>{isWinner} Won the Game {" "}</h2>
            <button className="reset" onClick={handleReset}>Play Again</button>
          </>
        ) : (
          <>
            <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
            <div className='board'>
              <div className="row1">
                <div className="boxes" onClick={() => handleClick(0)} ><h1>{state[0]}</h1></div>
                <div className="boxes" onClick={() => handleClick(1)} ><h1>{state[1]}</h1></div>
                <div className="boxes" onClick={() => handleClick(2)} ><h1>{state[2]}</h1></div>
              </div>

              <div className="row2">
                <div className="boxes" onClick={() => handleClick(3)} ><h1>{state[3]}</h1></div>
                <div className="boxes" onClick={() => handleClick(4)} ><h1>{state[4]}</h1></div>
                <div className="boxes" onClick={() => handleClick(5)} ><h1>{state[5]}</h1></div>
              </div>

              <div className="row3">
                <div className="boxes" onClick={() => handleClick(6)} ><h1>{state[6]}</h1></div>
                <div className="boxes" onClick={() => handleClick(7)} ><h1>{state[7]}</h1></div>
                <div className="boxes" onClick={() => handleClick(8)} ><h1>{state[8]}</h1> </div>
              </div>

            </div>
            <button className="reset" onClick={handleReset}>Play Again</button>


          </>
        )
      }
    </div>
  )
}

export default TicTacToe