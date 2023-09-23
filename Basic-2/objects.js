/*2 ways to declare an object
1.Singleton - Singleton is a function or class which can have only one instance 
and that instance can be accessed globally.Happens when declared by constructor
object.create()

2.object literal*/
const mySym= Symbol("myKey")//declaring symbol
const JSuser={
    name:"sinchan",
    "full name":"Sinchan Nohara",
    age:5,
    isLoggedIn:false,
    lastSeen:["Sunday", "Monday"],
    [mySym]:"Key1"
} 
//to access we have 2 ways
//console.log(JSuser.name)
//console.log(JSuser["name"]);
//console.log(JSuser[mySym]); //printing symbol

//to change any value
//JSuser.age=10

//to freeze changing values of the object, If tried to change, error will not come but values won't change
//Object.freeze(JSuser)

//declaring a function
JSuser.greeting = function() {
    console.log("Hey Bro");
}

JSuser.greeting2 = function() {
    console.log(`My name is ${this.name}`); //this -> refers to current object
}

console.log(JSuser.greeting); //function will not execute, only function reference is returned
console.log(JSuser.greeting())
console.log(JSuser.greeting2());
