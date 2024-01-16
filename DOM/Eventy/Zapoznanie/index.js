const buttons = document.querySelectorAll('button')
const buttonSubmit = document.querySelector('#submit')

const showThisButton = function() {
    console.log(this);
    this.removeEventListener('click', showThisButton)
    this.removeEventListener('click', greeting)
}

const greeting = (e) => {
    console.log('Witaj');
    console.log(e);
}

const addDiv = (e) => {
    const div = document.createElement('div')
    document.body.append(div)
    console.log(e);

}
buttons.forEach(button => {
    button.addEventListener('click', greeting)
    button.addEventListener('click', showThisButton)
})

buttonSubmit.addEventListener('click', addDiv)

const p = document.querySelector('.paragraf')

console.log(p)
console.log(p.previousElementSibling);;
console.log(p.previousSibling);;

window.addEventListener('keydown', e => {
    console.log(e);
})
window.addEventListener('mouseover', e => {
    console.log(e);
})
window.addEventListener('pointerdown', e => {
    console.log(e);
})