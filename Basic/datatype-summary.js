/* Two types of datatypes are found in JS based on the way how it is stored in memory and accessed from the memory. 
Primitive and Non Primitive
1.Primitive datatype- This datatype uses Call by value parameter passing, i.e., value of actual parameters is copied into formal
parameters and so the value of actual parameters can never get modified by formal parameters.
 7types: String, number, boolean, null, undefined, symbol, bigint
2.Non Primitive datatype- This datatype uses Call by Reference parameter passing, i.e., the address of the variable is passed 
into the function call as the actual parameter so actual parameters gets modified by formal parameters as memory allocation is same for both
 3types: array, objects, functions -- datatype is object for all 3

JS is dynamically typed language, i.e., data types of variables are determined by the value they hold at runtime 

Symbol datatype is for uniqueness, i.e., even if two variables have same symbol still they are different
const id=Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId); //output- false

array:
const heros=["superman","spiderman"]

object:
let myObj {
    name = "sinchan",
    age = 5,
} //anything in between the {} is object, datatype inside can be anything

Function: 
by variable declaration method 
const myFunction = function() {
    console.log('Hello');
}

-----------------------------------------------------------------------------------
1.Heap Memory- Stores NonPrimitive datatype, Call by Reference so when any value is changed the original varible value gets changed*/
let userOne = {
    name:"sinchan",
    age:5,
}

let usertwo = userOne
usertwo.age = 10

console.log(userOne.age);//age value is changed to 10


2./*Stack Memory- Stores Primitive datatype, it returns a copy of the original value so original variable value is not altered,
it is Call by Value
let name = "google"
let anotherName = name
anotherName = "yahoo"

console.log(name)
console.log(anotherName)*/
  









