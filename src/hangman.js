class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
  }

  get puzzle() {
    let puzzle = ''

    this.word.forEach(letter => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter
      } else {
        puzzle += '*'
      }
    })

    return puzzle
  }

  makeGuess(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (this.status !== 'playing') {
      return
    }

    if (isUnique) {
      this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
      this.remainingGuesses--
    }
  }

  getStatus() {
    if (this.remainingGuesses < 1) {
      return this.status = 'failed'
    } else if (!this.puzzle.includes('*')) {
      return this.status = 'finished'
    } else {
      return this.status
    }
  }

  get statusMessage() {
    if (this.status === 'playing') {
      return `Guesses Left: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
      return `Nice try the word was: ${this.word.join('')}`
    } else {
      return `Great Job. You Won!`
    }
  }
}

export { Hangman as default }
