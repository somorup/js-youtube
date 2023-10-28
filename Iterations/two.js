/*
// for of loop -- array specific loop
Syntax:
for (const iterator of object) { //used to iterate array,string. Forof loop don't work for objects.iterator word can be replaced by i.
    
}
//iterating over array
const arr = [1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}
//iterating over string
const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`printing ${greet} of greetings`);
}

//Map: unique key-value pairs,remembers the order of insertion unlike object
const map = new Map()
map.set('IN','INDIA')
map.set('USA','AMERICA')
map.set('PAK','PAKISTAN')
//console.log(map);

for (const iterator of map) {
    console.log(iterator); //prints in array format
}

//without printing in array format
for (const [key,value] of map) {
    console.log(key,',',value);
}*/


