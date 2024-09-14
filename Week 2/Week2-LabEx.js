// Exercise 1
const gretter = (myArray,counter) =>{
    const greetText = "Hello"
    myArray.forEach(element => {
        console.log(greetText + " " + element)
    });
}

gretter(["Randy Savage","Ric Flair","Hulk Hogan"],3)

// Exercise 2

const capitalize = (word) =>{
    const [charOne,...others] = word
    return charOne.toUpperCase() + others.join("").toLowerCase()
}

console.log(capitalize("fooBar"))
console.log(capitalize('nodeJs'))


// Exercise 3

const colors = ['red','green','blue']


const capitalizedColors = () =>{
    return colors.map((color)=>capitalize(color))
}

console.log(capitalizedColors())


// Exercise 4 -- The PDF file says that this function should filter out all the numbers below 20, however the output shows 1 and 5 as the output
// the commented part of the method will show the implemntation where 1,5 is the output and the non commented one the one where numbers 20 and above are the output
 
const values = [1,60,34,30,20,5]

const filterLessThan20=() =>{
    return values.filter((value)=>{
        if(value >= 20){
            return value
        }
        // if(value<20){
        //     return value
        // }
    })
}
console.log(filterLessThan20())

// Exercise 5
var numbers = [1,2,3,4]
const calculateSum = () =>{
    return numbers.reduce((accumulator,currVal)=>accumulator+ currVal
)
}
const calculateProduct = () =>{
    return numbers.reduce((accumulator,currVal)=>accumulator * currVal)
}
console.log(calculateSum())
console.log(calculateProduct())


// Exercise 6
class Car {    
    constructor(model,year) {
        this.model=model
        this.year=year     
    }
    details(){
        return `Model: ${this.model} ${this.year}`
    }
}
class Sedan extends Car{
    constructor(model,year,balance){
        super(model,year);
        this.balance = balance
    }
    info(){
        return `${this.model} has a balance of $${this.balance}`
    }
}

const car2 = new Car('Pontiac Firebird',1976)
console.log(car2.details())

const sedan = new Sedan('Volvo SD',2018,30000)
console.log(sedan.info())