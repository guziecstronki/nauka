const pushSquare = document.querySelector('#add-square')
const squareTemp = document.querySelector('.squares-template')
const container = document.querySelector('.container')
const squareToCricle = document.querySelector('#square-to-circle')
const circleTemp = document.querySelector('.circles-template')
const removeButton = document.querySelector('#remove-elements')
const addWords = document.querySelector('#add-words')
const colorButton = document.querySelector('#color')


const beforeButton = document.querySelector('#before')
const afterButton = document.querySelector('#after')
const appendButton = document.querySelector('#append')
const prependButton = document.querySelector('#prepend')
const addButtonsContainer = document.querySelector('.add-buttons')
const addButtons = addButtonsContainer.querySelectorAll('.button')
let number = 0

const createSquare = () => {
    const square = squareTemp.content.cloneNode(true)
    const squareP = square.querySelector('p')
    squareP.textContent = ++number
    return square
}

pushSquare.addEventListener('click', () => {
    container.append(createSquare())
})

colorButton.addEventListener('click', () => {
    const allInContainer = container.querySelectorAll('*')
    console.log(allInContainer);
    allInContainer.forEach(element => {
        element.classList.toggle('color')
    })
})

function addSquare() {
    console.log(this);
    if(this.id == 'before') container.before(createSquare())
    if(this.id == 'after') container.after(createSquare())
    if(this.id == 'prepend') container.prepend(createSquare())
    if(this.id == 'append') container.append(createSquare())
}

addButtons.forEach(button => {
    button.addEventListener('click', addSquare);
});


squareToCricle.addEventListener('click', () => { 
    const squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        const circle = circleTemp.content.cloneNode(true)  
        const circleP = circle.querySelector('.circle-number')
        const squareP =  square.querySelector('.square-number')
        circleP.textContent = squareP.textContent
        square.replaceWith(circle)
    })
})

removeButton.addEventListener('click', () => {
    const childrenFromContainer = container.querySelectorAll('.element')
    childrenFromContainer.forEach(element => {
        const removed = container.removeChild(element)
        console.log(removed);
    })
})

addWords.addEventListener('click', () => {
    const childrenFromContainer = container.querySelectorAll('.element p')
    childrenFromContainer.forEach(p => {
        if(p.closest('.square')){
            const text = document.createTextNode('square')
            p.append(text)
        }else if(p.closest('.circle')){
            const text = document.createTextNode('circle')
            p.append(text)
        }
    })
})