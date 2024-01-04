const randomColour = function(){ 
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++)
    {
      color+= hex[Math.floor(Math.random()*16)]
    }
    return color
   };
   let interval
   const startChanging = function() {
     if(!interval)
     interval=setInterval(changeBG,1000)
     
     function changeBG (){
       document.body.style.backgroundColor = randomColour()}
   }
   const stopChanging = function() {
     clearInterval(interval)
     interval=null
   }
  
  document.querySelector('#start').addEventListener("click",startChanging)
  document.querySelector('#stop').addEventListener("click",stopChanging)