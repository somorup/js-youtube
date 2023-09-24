/*2 ways to declare an object
1.Singleton - Singleton is a function or class which can have only one instance 
and that instance can be accessed globally.Happens when declared by constructor
const tinder = new Object()

2.object literal
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

//Object declaration
const tinderUser = {}//but this is not singleton declaration
//to add element inside the object
tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false

//Object inside object
const regularUser={
    email:"someone@google.com",
    fullname:{
        userfullname:{
            firstname:"sinchan",
            lastname:"nohara"
        }
    }
}
//to access the firstname
console.log(regularUser.fullname.userfullname.firstname)

//to merge two object
const user1 ={1:"a",2:"b"}
const user2={3:"c",4:"d"}

const user3={user1,user2}
console.log(user3);//but it makes object within object

const user4=Object.assign(user1,user2)
//or better practice, const user4=Object.assign({},user1,user2)--means 2 objs will be merged into an empty obj instead of obj 1
//or mostly used is spread syntax, const user3={...user1,...user2} 
console.log(user4)

//Database returns an array of objects
const users= [
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    }
]
console.log(users[0].email);*/

//to print keys and values seperatedly
const event = {
    id:"123abc",
    name:"Sam",
    isLoggedIn:false
}

console.log(Object.keys(event))//returns an array containing keys
console.log(Object.values(event))

//to check if any value is there inside object
console.log(event.hasOwnProperty("name"));
//to change object into an array
console.log(Object.entries(event));

//to check for more methods, inside console
/*const event = {
    id:"123abc",
    name:"Sam",
    isLoggedIn:false
}
event*/
