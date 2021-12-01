async function delay(ms = 1000) {
  return await new Promise(resolve => setTimeout(resolve, ms))
}

async function typeWord(word = "", wordEachLoop) {
  let wordTyped = ""
  
  for (let charIndex = 0; charIndex < word.length; charIndex++) {
    wordTyped += word.charAt(charIndex)
    if (wordEachLoop) wordEachLoop(wordTyped)

    // Simulates typing
    await delay(charIndex < 5 ? 200 : 10)
    wordEachLoop(wordTyped)
  }
}

export default {
  delay,
  typeWord
}