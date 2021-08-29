let dark=document.getElementById('dark')
let body=document.getElementById('body')
let nav=document.getElementById('nav')
let btn=document.getElementById('btn')
let inpu=document.getElementById('input')
let audio=document.getElementById('audio')
let name=document.getElementById('name')
let output=document.getElementById('output')
nav.style.background="#f8f9fa"
nav.style.color="#212529"
btn.addEventListener("click",function(){
    output.innerText=`Setting the alarm...`
    setTimeout(() => {
        output.innerText=`The alarm has been set for ${name.value}`
    }, 2000);
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
//loader
let content=document.getElementById(`content`)
let loader=document.getElementById('loader')
let wid=0
content.style.visibility="hidden"
setInterval(() => {
    wid++
    loader.style.width=`${wid}%`
    if(wid==100){
    wid=-10*100000*10000*10000
    loader.style.display="none"
    content.style.visibility="visible"
   }
}, 10);
