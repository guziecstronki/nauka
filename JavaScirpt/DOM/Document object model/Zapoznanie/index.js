// https://monsterjs.com
// https://flukeout.github.io
// https://flexboxfroggy.com/#pl
// Skonczylem na zadaniu 11 robic teraz 12
// Temat przeczytany w połowie
// Anki zrobione 2 element by id i elementstag

const btnCounter = document.querySelector('.btn-counter')
const clicksDisplay = document.querySelector('.clicks-display')
const btnColorDisplay = document.querySelector('.color-btn-display')
btnCounter.addEventListener('click', () => {
    clicksDisplay.textContent = click()
    btnColorDisplay.textContent = changeColor()
})
const changeColorToGreen = (element) => {
    let saturation = 0 
    let lightness = 0
    let increaseProperty = 'saturation'
    let property = 'bigger'
    const maxSizeOfProperty = 100
    const step = 10
    return function() {
        if(saturation == maxSizeOfProperty || lightness == maxSizeOfProperty){
            property = 'lower'
        }
        if(saturation >= 0 && increaseProperty == 'saturation' && property == 'bigger'){
            saturation += step
        }else if(saturation <= maxSizeOfProperty && increaseProperty == 'saturation' && property == 'lower'){
            saturation -= step
            if(saturation == 0) property = 'bigger'
            if(saturation == 0) increaseProperty = 'lightness'
        }else if(lightness >= 0 && increaseProperty == 'lightness' && property == 'bigger'){
            lightness += step
        }else if(lightness <= maxSizeOfProperty && increaseProperty == 'lightness' && property == 'lower'){
            lightness -= step
            if(lightness == 0) property = 'bigger'
            if(lightness == 0) increaseProperty = 'saturation'
        }
        btnCounter.style.backgroundColor = `hwb(115 ${saturation}% ${lightness}%)`
        return `hwb(115 ${saturation}% ${lightness}%)`
    }
}
const changeColor = changeColorToGreen()

const clicker = () => {
    let clicks = 0
    return function(){
        clicks++
        return clicks
    }    
}
const click = clicker()

const myDiv = document.querySelector('div')
myDiv.style.backgroundColor = 'red'
myDiv.style.width = '100px'
myDiv.style.height = '100px'


const element = myDiv.querySelector('p')
const divOne = myDiv.querySelector('div')
const divTwo = myDiv.querySelector('div div')
console.log(element);
console.log(divOne);
console.log(divTwo);