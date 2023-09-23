//an object. a single variable containing multiple datatype items
//resizeable, contains any datatypes
/*copy operation in array is always shallow copy not deep copy. shallow copy means the copy object shares the same reference point
as that of original object*/

/*array declaration
let arr = new Array(1,2,3)
console.log(arr)
let arry =[4,5,6]
console.log(arry)*/

/*in console, do this to see prototype and functions available
const num=[1,2,3,4,5]
num*/

/*Array methods
const num=[1,2,3,4,5]
num.push(7) //to add at last
num.unshift(8) //to add at first
console.log(num)
num.pop() //removes the last element from the array
num.shift() //remove 1st element from the array
console.log(num)
console.log(num.includes(2))
console.log(num.indexOf(2));

//convert array to string
console.log(num.join())*/

/*splice, slice
const arr = [8,7,9,2,0]
const newarr = arr.slice(1,3)
console.log("Original Array",arr);
console.log("Sliced",newarr);
const nnewarr = arr.splice(1,3)
console.log("Original Array",arr);
console.log("Spliced Array",nnewarr);//splice removes the spliced elements from the original array.
original array before operation = [1,2,3,4,5]
splice(0,2)
original array after operation = [4,5]

//merging arrays
const iHero = ["shaktiman", "chota bheem"]
const fHero = ["batman","superman"]

//iHero.push(fHero)
//console.log(iHero)//push- pushes the fHero array as an array inside iHero instead of simply merging the elements

console.log(iHero.concat(fHero));//concat gives a new array with all the elements merged

//for merging more than 2 arrays
const cartoon = ["sinchan", "doreamon"]
const allHeros = [...iHero,...fHero,...cartoon] //spread operator
console.log(allHeros);

//to change array inside array, into a simple array
const event=[1,2,3,[4,5],[6,7,[8,9]]]
const nEvent=event.flat(Infinity)
console.log(nEvent);

//to change string or object to array
const name = "Hitesh"
console.log(Array.isArray(name)); //asking if name variable contains an array
console.log(Array.from(name));
console.log(Array.from([1, 2, 3], (x) => x + x));

const ob = {player1: "kohli",player2: "rohit"}
const result = Object.keys(ob).map((key)=>[key,ob[key]])
console.log(result);

//to change to array from multiple variables
const v1 =1
const v2=2
const v3=3

console.log(Array.of(v1,v2,v3));*/





