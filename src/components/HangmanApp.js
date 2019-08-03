import React, { useState } from 'react'
import Puzzle from './Puzzle'
import Hangman from '../hangman'

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

const HangmanApp = () => {
  const [ guesses, setGuesses ] = useState(5)

  if (guesses > 0) {
    window.addEventListener('keypress', e => {
      setGuesses(guesses => guesses - 1)
    })
  }

  return (
    <div>
      <Puzzle />
      
        {
          guesses > 0 ?
            <p>Remaining Guesses: { guesses }</p> :
            <p>Game Over</p>
        }
      
      <button id="reset" className="button">Reset</button>
    </div>
  )
}
export default HangmanApp
