import React, { useState, useReducer, useEffect } from 'react'
import Puzzle from './Puzzle'
// import Hangman from '../hangman'

const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')
const statusElement = document.querySelector('#status')

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

const guessReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_GUESS':
      if (state.includes(action.guess)) {
        return state
      } else {
        return [ ...state, action.guess ]
      }
    case 'RESET':
      return []
  }
}

const HangmanApp = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const [ puzzle, setPuzzle ] = useState('')
  const [ game, setGame ] = useState('')
  const [ guesses, setGuesses ] = useReducer(guessReducer, [])

  // Get a New Puzzle
  const getPuzzle = async (wordCount = '2') => {
    const url = `https://puzzle.mead.io/puzzle?wordCount=${ wordCount }`
    
    const response = await fetch(url)
    const json = await response.json()
    setPuzzle(json.puzzle)
  }

  if (state.count > 0) {
    window.addEventListener('keypress', e => {
      e.stopImmediatePropagation()
      const guess = String.fromCharCode(event.charCode)
      setGuesses({ type: 'ADD_GUESS', guess })
      dispatch({ type: 'DECREMENT' })
    })
  }

  // Initialize Game
  const initializeGame = () => {
    dispatch({ type: 'RESET' })
    setGuesses({ type: 'RESET' })
    getPuzzle()
  }

  // Initialize Game on Reset Button Click
  const handleReset = () => initializeGame()

  // Initialize Game on Page Load
  useEffect(() => initializeGame(), [])

  return (
    <div>
      <Puzzle
        puzzle={ puzzle }
        guesses={ guesses }
      />
        {
          state.count > 0 ?
            <p>Remaining Guesses: { state.count }</p> :
            <p>Game Over</p>
        }
      <button
        id="reset"
        className="button"
        onClick={ handleReset }
      >Reset</button>
    </div>
  )
}

export default HangmanApp
