import React, { useState } from 'react'

const Puzzle = ({ puzzle, guesses }) => {
  console.log(puzzle, guesses)
  return (
    <div id="puzzle" className="puzzle" >
      {
        puzzle.toLowerCase().split('').map((char, i) => (
          <span key={ i }>
            {
              guesses.includes(char) || char === ' ' ? char : '*'
            }
          </span>
        ))
      }
    </div>
  )
}

export default Puzzle
