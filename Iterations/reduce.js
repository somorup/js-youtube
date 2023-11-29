//reduce() method executes a reducer function for array element and returns a single accumulated value
//arrayName.reduce(callback function)
//used mainly in shopping cart bills
/*
const myNums = [1,2,3,4,5]
let startValueofAccumulator=0 //we can directly write 0 instead of variable name
const total = myNums.reduce(function(accumulator,currentValue) {
    console.log(`accumulator=${accumulator} and currentValue=${currentValue}`);
    return accumulator+currentValue //this value is stored in accumulator for next loop
},startValueofAccumulator)
console.log(total);

//writting same in arrow function
const myNums = [1,2,3,4,5]
const newTotal= myNums.reduce((acc,cVal) => (acc+cVal),0)
console.log(newTotal);*/

const shoppingCart = [
    {
        courseName :"JS",
        price :2999
    },
    {
        courseName :"Java",
        price :3999
    },
    {
        courseName :"C++",
        price :999
    }
]
const total=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(total);

