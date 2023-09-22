//String declaration
let name = "raju"
/*or,using object-constructor format. Using this the string is stored in key-value pairs. 0:r, 1:a,2:j so many methods
can be used of the String prototype*/
let name1 = new String('rajuu')
/*to access key-value pairs
console.log(name1[0])
//to see the object
console.log(name1.__proto__);
//to change to uppercase
console.log(name1.toUpperCase());
//to see the character present at 2nd position
console.log(name1.indexOf('u'))
//to see more about the string methods, check mdn documentary or in dev console tab, let name1 = new String('rajuu') console.log(name1)*/

let age =10
console.log(name+age+"value");

/*modern way of printing is using String Interpolation- process of inserting strings or values in an existing string.
The string literal should be wrapped in backticks (``) and ${expression} acts as placeholder*/
console.log(`Hi I am ${name} and my age is ${age}`)

/* more methods
const method1 = name1.substring(0,4) //this will go till 3, rajuu
console.log(method1);
const method2 = name1.slice(-4,-3) //starts from last element to 3, rajuu
console.log(method2);*/
//.trim() to clear off the front and back spaces, .replace('original', 'expected'), .includes()

//to convert string to array
const newname = "learning-Js-Youtube"
console.log(newname.split("-"));

//NUMBERS AND MATHS
//same as String, i.e., if declared through obiect method then Number prototype methods become available to User

/*const score = 100
console.log(score);
const newNumb = new Number(100)
console.log(newNumb) // prototype methods can be used
console.log(newNumb.toFixed(2)) //the decimal place is fixed to 2 places
console.log(newNumb.toString().length);
const Numb2 = 123.89
console.log(Numb2.toPrecision(3)) //rounds of the number considering the n+1 the digit
const currency = 1000000
console.log(currency.toLocaleString('en-In')) //coverts to indian currency format*/

//write console.log(Math) inside console to see all the arguments and functions available
//Math.abs(-5) -> negative to positive, Math.round(4.6), Math.ceil(4.2) -> converts to max value, Math.floor(4.9)
console.log(Math.random()); //prints value between 0 to 1
//to give value greater than 1
console.log(Math.random()*10)
//to get the lowest value
console.log(Math.floor(Math.log()*10))
//but if 0.1 comes then it will convert to 0 so
console.log((Math.floor(Math.log()*10))+1)
//to get random number between a range
const min =10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min);//+min is to ensure the number is greater than 10







