//"use strict" //used to tell that we are using newer version of JS, though now it is bydefault
//Datatypes
let a=1
var b=2 //no longer used since, the scope of var is not defined, so someone below might use var b and all the above b will lose its value
const c=3
d=4 //this is also a type of variable declaration, but not encouraged
//null and undefined is also a datatype. Null is a standalone value, undefined is when we do not assign any value to a variable.typeof null is object
//symbol-> is used for uniqueness

/*console.log([a,b,c,d])
console.table([a,b,c,d])
console.log(typeof d)

//alert(3+3) // alert popup can be checked in dev console in browser, js engine is present in browser. documentation is found in mdn

//To convert a string to number
let x="5"
console.log(typeof x);
let converted_number = Number(x)
console.log(typeof converted_number);

//but the conversion is not proper
let y="5abc"
let new_number = Number(y)
console.log(typeof new_number)
console.log(new_number) //output is NaN

//To convert to boolean, 0= false, 1=true; "" = false, "text" =true
let status = "testing"
let name = ""
let bool_status = Boolean(status)
let bool_name = Boolean(name)
console.log(bool_status)
console.log(bool_name)*/

let num = 0
let num1 = 1
let new_num = Boolean(num)
let new_num1 = Boolean(num1)
console.log(new_num)
console.log(new_num1);

//Convert to string
let stringNumber = String(num)
console.log(stringNumber);
console.log(typeof stringNumber);