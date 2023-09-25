//function declaration
/*function firstFunction() {
    //this part is called function defination
    console.log("say my name");
}

//to call the function
firstFunction() //firstFunction is the reference and () is added to execute the function

function addTwoNumbers(num1,num2) { //num1,num2 is called parameters
    console.log(num1+num2);
}

addTwoNumbers(1,2) //1,2 is called arguments
addTwoNumbers(1,"a") //1a is output
addTwoNumbers(1,null) //1 is output

//BUT here the function is not returning any value so if we try to:
const result= addTwoNumbers(1,2)
console.log(result); //it returns undefined instead of 3 since function is not returning any value

function addTwoNumbers(num1,num2) {
    let result=num1+num2
    return result
    //return num1+numb2
    console.log("sinchan") //this statement will never execute since in function after return keyword the controller shifts outside
}

const result=addTwoNumbers(1,2)
console.log(result);

//scenario-1
function loggedUser(username) {
    return `${username} is logged in`
}
loggedUser("banerjee")
//but this will not print anything, since returning value do not mean printing so console.log(loggedUser("banerjee"));
// if no username is passed then it will print "undefined is logged in"
//so we can use a filter inside the function for this scenario
function loggedUser(username) {
    if(username===undefined){ //as undefined is considered as false, so if(!username) condition can also be used
        console.log("please enter a username");
        return //to shift the controller out the function block
    }
    return `${username} is logged in`
}

//scenario-2
//we can pass default value inside the parameter so if no value is passed from argumnet then default value is used and
//if value is passed from argument then default value will be overwritten
function loggedUser(username="sam") {
    if(username===undefined){ 
        console.log("please enter a username");
        return 
    }
    return `${username} is logged in`
}*/









