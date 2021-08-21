let dark=document.getElementById('dark')
let body=document.getElementById('body')
let nav=document.getElementById('nav')
let btn=document.getElementById('btn')
let input=document.getElementById('input')
let audio=document.getElementById('audio')
let name=document.getElementById('name')
let output=document.getElementById('output')
nav.style.background="#f8f9fa"
nav.style.color="#212529"
btn.addEventListener("click",function(){
    let date=new Date(input.value)
    now=new Date()
    if(date<now){
        alert("Invalid")
    }
    let tta= date-now
    if(tta>=0){
        setTimeout(() => {
           audio.play()
           audio.play()
output.innerText=`Time up for ${name.value}`
        }, tta);
    }
})
dark.addEventListener("click",function(){
    body.style.backgroundColor="#212529"
    body.style.color="#f8f9fa"
    nav.style.backgroundColor="#1c1c1c"
})
dark.addEventListener("dblclick",function(){
    body.style.color="#212529"
    body.style.backgroundColor="#fff"
    nav.style.backgroundColor="#f8f9fa"
    nav.style.color="white"
})