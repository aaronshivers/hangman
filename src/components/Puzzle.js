import React, { useState } from 'react'

const Puzzle = ({ puzzle }) => {
  return (
    <div id="puzzle" className="puzzle" >
      {
        puzzle.split('').map((char, i) => (
          <span key={ i }>{ char }</span>
        ))
      }
    </div>
  )
}

export default Puzzle
