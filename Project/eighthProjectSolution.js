const insert = document.querySelector('.project')
window.addEventListener("keydown",(e)=>{
  insert.innerHTML=`
  <div class="magic">
  <table>
  <tr>
    <th>Key</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===" "?"space":e.key}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `
})