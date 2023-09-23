//Date is an object
/*To get current date and time
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())//prints only date
console.log(myDate.toLocaleString())//prints date in / / format and UTC time in 12hrs format

//Date declaration
let createdDate = new Date(2023,0,23) //Month starts with 0
console.log(createdDate);
console.log(createdDate.toDateString())
let createDate = new Date(2023,1,9,5,3)
console.log(createDate.toString())
let formatDate = new Date("10-01-2023")// or yyyy-dd-mm
console.log(formatDate.toString())

//To get Timestamp
let myTimestamp = Date.now()
console.log(myTimestamp) //returns in ms
console.log(Math.floor(Date.now()/1000)) //returns in secs, floor is added to remove decimal*/

//we can get timestamp of prev created date too
let ddate = new Date()
console.log(ddate.getMonth()) //for extracting month, starts from 0
console.log(ddate.getDay()) //day starts from Monday

let newDate = new Date()
console.log(newDate.toLocaleDateString('default',{
    weekday: "short",
}))




