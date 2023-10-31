/*
for Each loop
const myArr = ["superman","batman","triple H"]
myArr.forEach(function (iteratior) { //function name is not required
    console.log(iteratior);
})*/

//using arrow function
const myArr = ["superman","batman","triple H"]
/*myArr.forEach((iteratior)=>{ //syntax of arrow function- fName = (parameter) => {}, but here no need to store
    console.log(iteratior);
})*/

//we can even pass the function name instead of declaring it
function myFunc(iterator) {
    console.log(iterator);
}
myArr.forEach(myFunc)