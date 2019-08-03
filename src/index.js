import Hangman from './hangman'
import getPuzzle from './requests'
import './styles/styles.css'

const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')
const statusElement = document.querySelector('#status')
let game

window.addEventListener('keypress', event => {
  const guess = String.fromCharCode(event.charCode)
  game.makeGuess(guess)
  render()
})

const render = () => {
  puzzleElement.innerHTML = ''
  statusElement.textContent = game.statusMessage

  for (const char of game.puzzle) {
    const span = document.createElement('span')
    const spanText = document.createTextNode(char)
    span.appendChild(spanText)
    puzzleElement.appendChild(span)
  }
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
