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
}*/

