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

function addDiv() {
    console.log(dives);
    divWhereApennd = this
    console.log(divWhereApennd);
    // console.log(this.ad);
}

const addClickForDives = () => {
    dives = document.querySelectorAll('.added-div')
    console.log(dives);
    console.log(dives.length);
    dives[dives.length-1].addEventListener('click', addDiv)
}

divOutsideDiv.addEventListener('click', () => {
    const div = document.createElement('div')
    div.classList.add('added-div', `color${Math.ceil(Math.random() * 4)}`)
    rightContainer.append(div)
    divWhereApennd = div
    addClickForDives()
})

divInsideDiv.addEventListener('click', () => {
    console.log(1);
    if(divWhereApennd != undefined){
        console.log(2);
        const div = document.createElement('div')
        div.classList.add('added-div', `color${Math.ceil(Math.random() * 4)}`)
        console.log(divWhereApennd);
        divWhereApennd.appendChild(div)
        divWhereApennd = div
        addClickForDives()
    }
})







