const container = document.querySelector('.container')

let dives = []

const rightContainer = document.querySelector('.right-side')

const buttons = document.querySelectorAll('.button')
// console.log(buttons);

const divInsideDiv = document.querySelector('.div-inside-div')
const pInsideDiv = document.querySelector('.p-inside-div')

const divOutsideDiv = document.querySelector('.div-outside-div')
const pOutsideDiv = document.querySelector('.p-outside-div')

let divWhereApennd

function addDiv(event) {
    event.stopPropagation();
    divWhereApennd = this
    console.log(divWhereApennd);
}

const addClickForDives = (div) => {
    div.removeEventListener('click', addDiv)
    div.addEventListener('click', addDiv)
}

divOutsideDiv.addEventListener('click', () => {
    const div = document.createElement('div')
    div.classList.add('added-div', `color${Math.ceil(Math.random() * 4)}`)
    rightContainer.append(div)
    divWhereApennd = div
    addClickForDives(div)
})

divInsideDiv.addEventListener('click', () => {
    console.log(1);
    if(divWhereApennd != undefined){
        console.log(2);
        const div = document.createElement('div')
        div.classList.add('added-div', `color${Math.ceil(Math.random() * 4)}`)
        console.log(divWhereApennd);
        divWhereApennd.append(div)
        divWhereApennd = div
        addClickForDives(div)
    }
})







