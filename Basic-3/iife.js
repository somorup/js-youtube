/*Immediately Invoked Function Expressions (IIFE)-Function that runs as soon as it is defined
why is iife required?
>To avoid polluting global execution context- we do not want to limit some other developer from using variable names just 
because we have used them or variables to clutter global namespace or 
to ensure that any existing (or new) code doesn’t accidentally interfere with other variables or override functions and methods.
If we have some initiation code that we don't need to use again, we could use the IIFE pattern
>sometimes functions/variables/executions of global scope interfares with local functions
Syntax:
function chai(){
    console.log("chai");
}
chai()
//so the last line chai() will be changed to ()and move up to end of } and wrap rest of the part inside ()
//Named iife
(function coke(){
    console.log("coke");
})();
//arrow fucnction can also be written in iife
( () => {
    console.log("pepsi");
})()*/
//TWO IIFE FUNCTION CANNOT RUN ONE AFTER ANOTHER AS THE FIRST IIFE FUNCTION FORGETS TO STOP CODE EXECUTION. So explicitly 
//we have to include ; at the end of First function

//passing parameter for iife 
(
    (name)=>{
        console.log(`my name is ${name}`);
    }
)("pepsico")

