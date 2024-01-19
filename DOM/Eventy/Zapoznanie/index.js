// const buttons = document.querySelectorAll('button')
// const buttonSubmit = document.querySelector('#submit')

// const showThisButton = function() {
//     console.log(this);
//     this.removeEventListener('click', showThisButton)
//     this.removeEventListener('click', greeting)
// }

// const greeting = (e) => {
//     console.log('Witaj');
//     console.log(e);
// }

// const addDiv = (e) => {
//     const div = document.createElement('div')
//     document.body.append(div)
//     console.log(e);

// }
// buttons.forEach(button => {
//     button.addEventListener('click', greeting)
//     button.addEventListener('click', showThisButton)
// })

// buttonSubmit.addEventListener('click', addDiv)

// const p = document.querySelector('.paragraf')

// console.log(p)
// console.log(p.previousElementSibling);;
// console.log(p.previousSibling);;

// window.addEventListener('keydown', e => {
//     console.log(e);
// })
// window.addEventListener('mouseover', e => {
//     console.log(e);
// })
// window.addEventListener('pointerdown', e => {
//     console.log(e);
// })
const pierwszyDiv = document.querySelector('.pierwszy');
const divy = pierwszyDiv.querySelectorAll('*');

const wszystkieDivy = [pierwszyDiv, ...divy]

wszystkieDivy.forEach(div => {
    div.addEventListener('click', function(e) {
        console.log(this);
        e.stopImmediatePropagation()
        console.log(this.className);
    })
})
wszystkieDivy[wszystkieDivy.length - 1].addEventListener('click', () =>{
    console.log('siemandero');
})

const text = document.querySelector('#text')

text.addEventListener('keydown', e =>{ 
    e.preventDefault()
},{passive: true})

document.querySelector('.button-target').addEventListener('click', function(e) {
    console.log(e);
    console.log(this);
    console.log(e.target.classList.add('clicked'));
    console.log(e.currentTarget);
})

const buttonAdd = document.querySelector('.button-add')
const elements = document.querySelector('.elementy')

let counter = 0
const createElement = () => {
    counter++

    const element = document.createElement('div')
    if(counter == 1){
        element.classList.add('element1')
    }else{
        element.classList.add('element')
    }
    element.textContent = `To jest ${counter} element`
    
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('button-del')
    deleteButton.textContent = `Usuń`

    element.append(deleteButton)
    elements.append(element)
}

buttonAdd.addEventListener('click',createElement)
elements.addEventListener('click', e => {
    if(e.target.tagName == 'BUTTON'){
        e.target.closest('.element').remove()
    }
})