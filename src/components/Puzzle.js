import React, { useState, useEffect } from 'react'

const Puzzle = () => {
  const [ puzzle, setPuzzle ] = useState('puzzle')

  useEffect(() => {

    const getPuzzle = async (wordCount = '2') => {
      const url = `https://puzzle.mead.io/puzzle?wordCount=${ wordCount }`
      
      try {
        const response = await fetch(url)
        const json = await response.json()
        return response.ok ? json.puzzle : new Error('Unable to get new puzzle.')
      } catch (error) {
        return error
      }
    }

    const newPuzzle = async () => {
      setPuzzle(await getPuzzle())
    }
    newPuzzle()
  }, [])

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
