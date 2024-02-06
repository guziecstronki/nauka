const inputColor = document.querySelector('.input-color')
const inputRotate = document.querySelector('.input-rotate')
const rectangle = document.querySelector('.rectangle')
const container = document.querySelector('.container')
const startValueColor = getComputedStyle(rectangle).getPropertyValue('--percents').replace('%', '')
const startValueRotate = getComputedStyle(rectangle).getPropertyValue('--rotate').replace('deg', '')

inputColor.value = startValueColor
inputRotate.value = startValueRotate
console.log(startValueColor);

inputColor.addEventListener('input', () => {
    container.style.setProperty('--percents', `${inputColor.value}%`)
})

inputRotate.addEventListener('input', () => {
    container.style.setProperty('--rotate', `${inputRotate.value}deg`)
})