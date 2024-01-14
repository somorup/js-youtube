/*Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
eg: cryptographic encryption, file reading, database kept in a different continent network
-Promise has 3 states: Pending, Fulfilled, Rejected
-Promise creation operation is minimal, mostly Promise is consumed
-eg of Promise consumption operation: fetch('https://something.com').then().catch().finally() 
    --if response comes it is stored in .then, error in .catch, .finally stores everything
    fetch api is now used instead of xmlhttprequest api

//creation of Promise. Promise is an object, so to take an instance of an object we are using new keyword
//syntax: const promiseOne = new Promise(function(resolve,reject){})
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task -- DB calls/cryptographic encryption or network calls
    setTimeout(function(){
        console.log("Async task is complete");
        resolve() // connects .then to resolve
    },1000)
})

//consumption of the promise
promiseOne.then(function(){ //.then is connected with resolve, and it has a function as a parameter which receives the value from async job
    console.log("job done");
    
}) 

//same implementation with different syntax 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function () {
    console.log("task 2 resolved");
})

//using promise to pass values if task is resolved
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 3");
        resolve({username:"chai",password:"code"})//anything can be passed, mostly we pass object
    },1000)
})

promiseThree.then(function(user){ //the entire object is passed down from resolve() 
    console.log(user);
})

//using promise to check if task is passed or failed
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error)
        {
            resolve({username:"chai",password:"code"})
        }else{
            reject({error:"something went wrong"})
        }
    },1000)
})

//promiseFour.then(function(user){}).catch(function(user1){})

promiseFour
.then((user)=>{ //using arrow function ()=>{}
    console.log(user);
    return user.username //if we try to hold this whole function into a variable and print still then 
    //the value of user.username is not coming. so we are using nested .then below which gets the value from this .then
})
.then((myusername)=>{
    console.log(myusername);
})
.catch(function(err){
    console.log(err);
})
.finally(()=> console.log("The promise is either resolved or rejected")) //finally is a default case which executes always irrespective of result


//promise using async wait and try-catch block
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error)
        {
            resolve({username:"chai",password:"code"})
        }else{
            reject({error:"something went wrong"})
        }
    },1000)
})

async function consumedFifthPromise(){
    //async cannot handle error directly so we need try-catch block
    try {
        const response= await promiseFive //to wait till the reject/resolve of the promise. 
        //Dont put promiseFive(),Promise is an object not method
        console.log(response);
    } catch (error) {
        console.log("Error Occured");
    }
}

consumedFifthPromise()

//getting data from an API
async function getallUsers(){
    try {
        //since fetching the data takes sometime so using await
        const response= await fetch('https://jsonplaceholder.typicode.com/users') 
        //checking the datatype, we need json data to do any operation
        console.log(typeof response);
        //converting to json data, since this takes some time as well so using await
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log("E:",error);
    }
}
getallUsers()
*/

//getting data from an API using .then .catch format
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
//using one more then to handle the return from 1st then
.then((data)=>console.log(data))
//catch handles the error part
.catch((error)=>console.log(error))

//here function calling is also not required unlike prev
//Note even if i write async function ahead of fetch in the code still fetch result will come ahead in log

/*Fetch contains two parts--
response = fetch('something')
-one part reserves space in the memory
    -it contains two array, onfulfilled[] and onRejection[]. onfulfilled[] works when resolve and onRejection[]
     works when reject.
-another part handles web browser/node, web browser/node gives the required resources to fire the network request.
    if network request has been send to the network and any response(Note: even if 404 error comes still it is considered as a response)
     comes then it is stored into onfulfilled[] and 
    if no respose comes/request coukd not be send to the network then it is stored into onRejection[]
        and the values are updated into our variable response
*/