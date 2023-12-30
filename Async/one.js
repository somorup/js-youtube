/*
1.JS is a SYNCHRONOUS, SINGLE THREADED language
2. SINGLE THREADED language -- executes one line of code at a time and each opeartion waits for the last
    operation to complete before executing 
3. SYNCHRONOUS vs ASYNCHRONOUS
   -Blocking Code(SYNCHRONOUS) vs Non Blocking Code(ASYNCHRONOUS)
   -Blocking Code -- till one of the code executes, the next operation will be blocked
    --example: to read a file, a program cannot read a file directly.It sends the control to kernel which reads and sends
        the data to the program. (p.s. browser js engine do not have power to read file, node js engine is required)
        --For Blocking Code the whole program waits for the kernel to complete the operation while For Non Blocking Code the
            program execution do not hault for the kernel, it runs in its flow and the kernel notifies after completing the task
4. JS ENGINE -- Consists of 2 things:
    1.Memory Heap - to allocate Memory
    2.Call Stack - LIFO structure created to execute a program.It has Global Execution Context at bottom and 
    functions to be executed adds on top of it and eventually gets removed after execution.
5. The above JS ENGINE is not used in real life. JS Engine which found in Browser or Environment(eg: Node) has WEB API
    --WEB API contains APIs and Task Queue
    --DOM API is not found in Node, it is only available in Browser
    --ASYNCHRONOUS Code Scenario - Suppose we have made a Set timeout Api Call from WEB API, that kindly execute the API after
        2secs or on any Event(eg: mouse click). This Request is stored inside "Register Call Back" which queues the Requests in
        Task Queue and adds it to the Call Stack at the time of execution. This whole cycle is called Event Loop.  
    --Fetch API - relatively newly added API to the WEB API, it creates a Promise Queue instead of using Task Queue which is
        considered higher priority.
*/