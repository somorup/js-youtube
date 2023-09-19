/* Two types of datatypes are found in JS based on the way how it is stored in memory and accessed from the memory. 
Primitive and Non Primitive
1.Primitive datatype- This datatype uses Call by value parameter passing, i.e., value of actual parameters is copied into formal
parameters and so the value of actual parameters can never get modified by formal parameters.
 7types: String, number, boolean, null, undefined, symbol, bigint
2.Non Primitive datatype- This datatype uses Call by Reference parameter passing, i.e., the address of the variable is passed 
into the function call as the actual parameter so actual parameters gets modified by formal parameters as memory allocation is same for both
 3types: array, objects, functions

JS is dynamically typed language, i.e., data types of variables are determined by the value they hold at runtime 

Symbol datatype is for uniqueness, i.e., even if two variables have same symbol still they are different*/
const id=Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId); //output- false




