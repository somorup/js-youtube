//form is always submit type event not click type event
//form is always submitted as get or post type html method and the value goes to the server so here we need to stop that
//by using preventDefault() method

const form = document.querySelector('form')
form.addEventListener('submit', function(e) {
  e.preventDefault()
  const height = parseInt(querySelector("#height").value)
  const weight = parseInt(querySelector('#weight').value)
  const results = querySelector('#results')

  if(height===0||height<0||isNaN(height))
  {
    results.innerHTML = `${height} is not valid`
  }
})
