/*
//forin loop -  can be used for objects*/
const myObj = {
    Hero1:'Superman',
    Hero2:'Batman'
}

for (const key in myObj) {
    //console.log(key);
    console.log(myObj[key]);
}
