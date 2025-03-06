// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100;  //We never define the language in JavaScript.

const scoreValue= 100.3;
const isloggedIn= false;
const outsideTemp =null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);

const bigNumber = 999999999;
// Reference Type also called Non Primitive

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj={
    name: "shubham",
    age: 22,
}

// Functions creation

const myfunction=function(){
    console.log("Hello World");
    
}

console.log(typeof heros)

// ************************************************************************************8

//Stack(Primitive), Heap(Non-Primitive)