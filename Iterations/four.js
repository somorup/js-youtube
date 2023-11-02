/*
for Each loop
const myArr = ["superman","batman","triple H"]
myArr.forEach(function (iteratior) { //function name is not required
    console.log(iteratior);
})

//using arrow function
const myArr = ["superman","batman","triple H"]
myArr.forEach((iteratior)=>{ //syntax of arrow function- fName = (parameter) => {}, but here no need to store
    console.log(iteratior);
})

//we can even pass the function name instead of declaring it
function myFunc(iterator) {
    console.log(iterator);
}
myArr.forEach(myFunc)
myArr.forEach((iterator,index,arr)=>{ //forEach parameter has access to the iterator, index and array
    console.log(iterator,index,arr);
})*/

//objects inside array
const explore = [
    {
        language: "javascript",
        languageFile: "js"
    },
    {
        language: "java",
        languageFile: "java"
    },
    {
        language: "python",
        languageFile: "py"
    }
]

explore.forEach((item)=>{
    console.log(item.language);
    console.log(item.languageFile);
})
