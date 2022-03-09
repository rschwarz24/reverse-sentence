function reverse(sentence) {
  const wordsArray = sentence.split(" ");
  const reversedArray = wordsArray.reverse();
  const reversedSentence = reversedArray.join(" ");
  return reversedSentence;
}

function reverse2(sentence) {
  return sentence.split(" ").reverse().join(" ");
}
module.exports = { reverse, reverse2 };
