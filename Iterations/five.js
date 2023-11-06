const newN = [1,2,3,4,5]
const newArray = newN.map((num) => {
    return num+10
})
console.log(newArray);

//chaining
const myArray= newN.map( (num) => num*10).map((num)=>num+1).filter( (num)=> num>20)
//num =1 -> num =10 -> num=11 
console.log(myArray);