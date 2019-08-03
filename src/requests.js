const getPuzzle = async (wordCount = 5) => {
  const url = `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  try {
    const response = await fetch(url)
    const json = await response.json()
    return response.ok ? json.puzzle : new Error('Unable to get new puzzle.')
  } catch (error) {
    return error
  }
}

export { getPuzzle as default }
