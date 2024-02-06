const timeOfKey = () => {
    let timeGoing = false
    let time = 0
    let seconds
    let ourKey
    window.addEventListener('keydown', e => {
        if(!timeGoing){
            timeGoing = true
            ourKey = e.key
            seconds = setInterval(() => {
                time += 0.01
            },10)
        }
    })
    
    window.addEventListener('keyup', e => {
        if(e.key == ourKey){
            clearInterval(seconds)
            seconds = null
            console.log(`${e.key} był trzymany ${time.toFixed(2)} sekund`);
            ourKey = null
            timeGoing = false
            time = 0
        }
    })
}

const input11 = document.querySelector('.input1-1')
const input12 = document.querySelector('.input1-2')
const input13 = document.querySelector('.input1-3')

const input11Value = document.querySelector('#key-up-value')
const input12Value = document.querySelector('#key-down-value')
const input13Value = document.querySelector('#input-value')

input11.addEventListener('keyup', () => {
    input11Value.textContent = input11.value
})

input12.addEventListener('keydown', () => {
    input12Value.textContent = input12.value
})

input13.addEventListener('input', () => {
    input13Value.textContent = input13.value
})