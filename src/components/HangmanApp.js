import React, { useState, useReducer } from 'react'
import Puzzle from './Puzzle'
// import Hangman from '../hangman'

const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')
const statusElement = document.querySelector('#status')
let game

console.log(puzzleElement)

// window.addEventListener('keypress', event => {
//   const guess = String.fromCharCode(event.charCode)
//   game.makeGuess(guess)
//   render()
// })

// const render = () => {
//   puzzleElement.innerHTML = ''
//   statusElement.textContent = game.statusMessage

//   for (const char of game.puzzle) {
//     const span = document.createElement('span')
//     const spanText = document.createTextNode(char)
//     span.appendChild(spanText)
//     puzzleElement.appendChild(span)
//   }
// }

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game = new Hangman(puzzle, 5)
  // render()
}

// document.querySelector('#reset').addEventListener('click', startGame)

// startGame()

const initialState = { count: 5 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'DECREMENT':
      return { count: state.count - 1 }
    case 'RESET':
      return { count: 5 }
  }
}

const HangmanApp = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  if (state.count > 0) {
    window.addEventListener('keypress', e => {
      dispatch({ type: 'DECREMENT' })
    })
  }

  return (
    <div>
      <Puzzle />
      
        {
          state.count > 0 ?
            <p>Remaining Guesses: { state.count }</p> :
            <p>Game Over</p>
        }
      
      <button
        id="reset"
        className="button"
        onClick={ () => dispatch({ type: 'RESET' }) }
      >Reset</button>
    </div>
  )
}
export default HangmanApp
