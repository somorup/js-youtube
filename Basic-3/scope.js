/*{
    This is block scope. outside is global scope.
    so the variable declared here will not be available outside but outside variables are available here.
    var breaks this rule, if var a=5 is declared inside the block and a is printed outside the block, it will print 5
}

//function declaration
function addOne(num) {
    return num+1
} 
addOne(5)
//or hold the function in a variable, this technique is also called hosting
const addtwo = function name(num) {
    return num+2
}
addtwo(10)

//For hosting technique we cannot call the function before declartion
addtwo(10)
const addtwo = function name(num) {
    return num+2

//But for other function declartion technique, we can call the function before declaration
addThree(15)
function addThree(num1) {
    return num1+1
} */

/*
//nested function
function one (){
    const username="name"
    console.log("first");
    function two() {
        const program = "youtube"
        console.log(username);
    }
    console.log("second");
    //console.log(program); //throws error since function variable is not accesible outside the function block
    two() 
}
one() //first line of code executed*/



