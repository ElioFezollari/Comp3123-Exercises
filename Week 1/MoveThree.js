// **** Exercise 4 ****
const right= (word)=>{
    return word.substring(word.length-3,word.length) + word.substring(0,word.length-3) 
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));