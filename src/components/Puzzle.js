import React, { useState } from 'react'

const Puzzle = ({ puzzle, guesses }) => {
  console.log(puzzle, guesses)
  return (
    <div id="puzzle" className="puzzle" >
      {
        puzzle.split('').map((char, i) => (
          <span key={ i }>
            {
              guesses.includes(char) ? char : '*'
            }
          </span>
        ))
      }
    </div>
  )
}

export default Puzzle
