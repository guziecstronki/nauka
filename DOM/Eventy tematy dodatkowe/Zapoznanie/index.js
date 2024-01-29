// const firstDiv = document.querySelector('.first')

// firstDiv.addEventListener('click', function(e) {
//     if(e.target == firstDiv){
//         firstDiv.dispatchEvent(myEvent)
//     }
//     console.log('clicked');

// })

// const myEvent = new Event('loadSquareData')

// firstDiv.click()

// firstDiv.addEventListener('loadSquareData', () => {
//     console.log({mateusz: 'ja'});
// })

// const paragraphs = document.querySelector('.paragraphs')

// const getTime = date => `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

// const created = new CustomEvent('created')
// const deleted = new CustomEvent('deleted', {detail: 'Time of delete element'})

// window.addEventListener('DOMContentLoaded', () => {
//     createP(paragraphs, 'witaj')
//     createP(paragraphs, 'swiecie')
// })

// paragraphs.addEventListener('click', e => deleteElement(e.target))

// const createP = (parent, value) => {
//     const p = document.createElement('p')
//     p.textContent = value
//     parent.append(p)
//     p.addEventListener('created', wasBorn)
//     p.addEventListener('deleted', hasDied)
//     p.dispatchEvent(created)
// }

// const deleteElement = element => element.dispatchEvent(deleted); element.remove()


// const wasBorn = e => console.log(e.type, e.target);

// const hasDied = e => console.log(e.type, e.target, getTime(new Date()),e.detail);

const myEvent = new CustomEvent('myEvent', {bubbles: false, cancelable:true})
const button = document.querySelector('.button')
const squares = document.querySelectorAll('.square')
const smallSquares = document.querySelectorAll('.small-sqaure')

button.addEventListener('myEvent', e => {
    console.log(e.currentTarget, e);
})

document.addEventListener('myEvent', e => {
    console.log(e.currentTarget, e.timeStamp);
})

setTimeout(() => button.dispatchEvent(myEvent), 1000)

button.dispatchEvent(myEvent)

const elements = [button, document]

// squares.forEach(square => {
//     square.addEventListener('myEvent', e => {
//         console.log(e.currentTarget);
//     })
// })

// smallSquares.forEach(smallSquare => {
//     smallSquare.addEventListener('myEvent', e => {
//         console.log(e.currentTarget);
//     })
// })

// smallSquares[2].dispatchEvent(myEvent)