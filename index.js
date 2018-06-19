const ocurrence = text => {
  const counter = new Map();
  if (typeof text !== "string") return counter;
  // Split by space and point to keep only words
  // This regex is even more efficient because it only keep word greater than 1 char: /[^. ]{2,}/gm
  const tokens = text.match(/[^,;:!?./"'() ]+/gm)
  tokens.forEach(token => {
    if (token.length < 2) return;
    const word = token.toLowerCase()
    const wordCount = counter.get(word) || 0;
    counter.set(word, wordCount + 1);
  });
  return counter;
};

module.exports = ocurrence;
