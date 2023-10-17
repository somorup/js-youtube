/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

const month =3 //const month = "Jan"
switch (month) { 
    case 1: //case "jan":
        console.log('Jan');
        break;
    case 2:
        console.log('Feb');
        break;//if break is not present, then the entire code is executed after this, apart from default case
    default:
        console.log('Not found');
        break;
}