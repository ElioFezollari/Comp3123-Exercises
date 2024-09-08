// **** Exercise 1 ****  
const capitalizeSentence = (word) => {
  const splitTestCase = word.split(" ");

  const capitalWords = splitTestCase.map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });

  const capitalSentence = capitalWords.join(" ");

  return capitalSentence
};


console.log(capitalizeSentence("the quick brown fox"))
console.log(capitalizeSentence("my name is elio fezollari"))