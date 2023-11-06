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
})

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

//forEach do not return any value, so filter can be used
//filter also takes function as argument
const myNum = [1,2,3,4,5]
const numbers= myNum.filter((num) => num < 5) //arrow function can be () => {} or () => () or single line function, () => 
console.log(numbers);

const realNum = [10,11,12,13]
const rNum = realNum.filter((number)=> { //If {} braces are used instead of (), then to return use explit return keyword
    return number >4
})
console.log(rNum);

//same implementation can be done by forEach
const newNum = []
realNum.forEach((num)=> {
    if (num>4) {
        newNum.push(num)
    }
})
console.log(newNum);*/

const books = [
    {title: 'Book One',genre: 'Fiction',publish: 1981,edition: 2004 },
    {title: 'Book Two',genre: 'Non-Fiction',publish: 1992,edition: 2008 },
    {title: 'Book Three',genre: 'History',publish: 1999,edition: 2007 },
    {title: 'Book Four',genre: 'Non-Fiction',publish: 1989,edition: 2010 }
]
const userBooks = books.filter((bk) => bk.genre === 'History')
const pBook = books.filter((bk)=>{ //since {} braces so return keyword has to be used 
    return bk.publish >=1990 && bk.genre === 'History'
})
//console.log(userBooks);
console.log(pBook);

