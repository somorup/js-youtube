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

/* more methods*/
const method1 = name1.substring(0,4) //this will go till 3, rajuu
console.log(method1);
const method2 = name1.slice(-4,3) //starts from last element to 3, rajuu
console.log(method2);



