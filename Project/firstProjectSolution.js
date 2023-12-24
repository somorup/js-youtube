const buttons = document.querySelectorAll('.button') 
const body = document.querySelector('body') 
buttons.forEach(function (button) { button.addEventListener('click',function(e) { 
    console.log(e.target) //only if we print e we will not get any details
    if(e.target.id === 'grey') //on opening the e.target we got id as the colour of buttons
    body.style.backgroundColor = e.target.id 
}) })