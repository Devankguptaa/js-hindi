// #Primitive

// 7 types : String,Number , Boolean , null , undefined, Symbol, BigInt

const score = 100;

const scoreValue = 100.3

const isLoggrnIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id=== anotherId)

const bigNumber = 3454565665454515155486n





// Reference (Non Primitive)

// Array , Objects , Functions

const heros = ["shaktimaan", "naagraj","doga"]
let myObj= {
    name:"hitesh",
    age: 22,
}

const myFunction=function() {
    console.log("hello world");
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof myFunction)



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 // Stack(Primitve) , Heap (Non-Primitive)

let myYoutube ="Hiteshchaudhary"

let anothername = myYoutube
anothername = "chaiaurcode"

console.log(anothername)
console.log(myYoutube)





