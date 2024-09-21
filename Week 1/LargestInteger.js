// **** Exercise 2 **** 
const max = (...numberArray) =>{
    let currentLargest = numberArray[0]
    
    numberArray.forEach(element => {
        if(element > currentLargest){
            currentLargest = element
        }
    });
    return currentLargest
}

console.log(max(1,0,1));
console.log(max(0,-10,-20));
console.log(max(1000,510,440));
