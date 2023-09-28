/*this keyword inside an object
const user={
    name:"umesh",
    price:100,
    welcomeMessage:function(){
        console.log(`${this.name}, welcome `); //name directly will also take, but better practise is to use this.name to access the variable
        //this refers to current context
        //if we print this here, it would print the entire object
        //console.log(this);
    }
}

user.welcomeMessage()
user.name = "sam"
user.welcomeMessage()

//Here if we print this, it would return empty object but in browser if we print it would return window object

//this keyword inside a function
function chai() {
    let username="chakhor"
    console.log(this.username); //this keyowrd is not working inside functions like it was working inside object. prints undefined.
}
chai()

//one more way of declaring function
const event = function () {
    let eventname="lets play"
    console.log(this.eventname);
}
event()

//arrow function is same just remove the function keyword and put an arrow after ()
const event = () => {
    let eventname="lets play"
    console.log(this.eventname); //still this keyword will return undefined
    console.log(this); //this keyword will return empty object
}
event()
//Basic syntax of arrow function, () => {}
//we can hold the function value in a variable as shown above also
const aFunc= (parameter1, parameter2) => {
    return parameter1+parameter2
}
console.log(aFunc(1,2));

//implicit return using arrow function,i.e., one step code without return keyword and {}
//explicit return is what we do normally using return keyword
const iFunc= (num1, num2) => num1+num2
//we can also write like this, const iFunc= (num1, num2) => (num1+num2)
//to retunn object just wrap it inside (), const iFunc= () => ({username:"name"})
console.log(iFunc(1,2));

const mArray=[2,4,8,10]
//running loop inside array
//mArray.forEach(()=>{})*/


