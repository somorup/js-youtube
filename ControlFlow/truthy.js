/*
//const userEmail="h@ht.com" //returns true value
//const userEmail="" //returns false
//const userEmail=[] //returns true
if (userEmail) {
    console.log("email is there");
}else {
    console.log("email not present");
}

//falsy values
false, null, undefined, 0, -0, BigInt 0n, NaN, ""
//truthy values
"0","false"," ",[],{},function () {}

//to check if array is empty
const myArray=[]
if (myArray.length===0) {
    console.log("array is empty");
}

//to check if object is empty
-first turn the Object into an array
const myObj = {}
const mArray= Object.keys(myObj)
if (mArray.length===0) { //if(Object.keys(myObj).length === 0)
    console.log("object is empty");
}

//Nullish Coalescing Operator (??)
-Is a logical operator that returns its right-hand side operand 
when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
val1 = null ?? 10
console.log(val1);

val2= undefined ?? 10 ?? 100 //takes the immediate right operand not the extreme right operand
console.log(val2);

//Ternary Operator- ?
-condition ? expifTrue:expifFalse*/






