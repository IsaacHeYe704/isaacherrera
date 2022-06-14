
const $ = selector => document.querySelector(selector)

setTimeout(()=>
 {
    $('h2').style.display = 'block'
    $("h1").style.border = "none"
 }
 
 ,2500)
 //const nextLine = setTimeout()