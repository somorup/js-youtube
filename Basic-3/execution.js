//JavaScript Execution Context- How do code execute in JS?
//Call Stack- how do functions go inside memory, get executed and come out
//Execution is done in 2 phases
//1.Memory Creation Phase -- memory allocation happens in this phase
//2.Execution Phase -- all the operations are done in this phase
//Execution Flow:
/*
1.Global Execution Context is created and refered to 'this' variable (GEC is different for different environment 
    like different for browser env, dino env). value of 'this' for browser env is window object. All this is done in single thread
 *Function EC and Eval EC is also created
2.Memory Creation Phase -- memory is allocated for all variables and "undefined" value is stored inside them. Function name gets
    all the function defination but not executed. function calling variables get undefined stored inside them
3.Execution Phase -- variables get the values stored inside them. In this phase, when the program controller comes to function
calling line, everytime for a function call a new variable environment and execution thread is created called new execution context
and Memory Creation Phase, Execution Phase again takes place at function defination part. The function returns the result to
global execution context and new execution context gets deleted
