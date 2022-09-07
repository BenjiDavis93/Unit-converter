function m2f(val){
    return (val*3.281).toFixed(3)
}
function f2m(val){
    return (val/3.281).toFixed(3)
}
function l2g(val){
    return (val*0.264).toFixed(3)
}
function g2l(val){
    return (val/0.264).toFixed(3)
}
function k2p(val){
    return (val*2.204).toFixed(3)
}
function p2k(val){
    return (val/2.204).toFixed(3)
}

const lengthParagraph = document.getElementById("length-text")
const volumeParagraph = document.getElementById("volume-text")
const massParagraph = document.getElementById("mass-text")
const convertBtn = document.getElementById("convert-btn")

const valueInput = document.getElementById("input-el")
let value = valueInput.value;

valueInput.addEventListener('input', function(){
    if(isNaN(valueInput.value)){
        value = 0
        return
    }
    value = valueInput.value;
})

valueInput.addEventListener('keypress', function(e){
    if(e.key === "Enter")
        convertBtn.click()
})

convertBtn.addEventListener('click', function(){
    let many=""
    if(value>1)
        many+='s'
    lengthParagraph.innerHTML= `${value} meter${many} = ${m2f(value)} feet | 
                                ${value} feet = ${f2m(value)} meter${many}`

    volumeParagraph.innerHTML= `${value} liter${many} = ${l2g(value)} gallon${many} | 
                                ${value} gallon${many} = ${g2l(value)} liter${many}`

    massParagraph.innerHTML=   `${value} kilo${many} = ${k2p(value)} pound${many} | 
                                ${value} pound${many} = ${p2k(value)} kilo${many}`
})