const mouseUp = document.querySelector('.mouseup')
const mouseDown = document.querySelector('.mousedown')
const click = document.querySelector('.click')

const mouseOver = document.querySelector('.mouseover')
const mouseOut = document.querySelector('.mouseout')
const mouseMove = document.querySelector('.mousemove')

const mouseEnter = document.querySelector('.mouseenter')
const mouseLeave = document.querySelector('.mouseleave')

const kafelek1 = document.querySelectorAll('.kafelek1')
const kafelek2 = document.querySelectorAll('.kafelek2')

const cursorArea = document.querySelector('.cursor')

const clientX = document.querySelector('.clientX')
const pageX = document.querySelector('.pageX')
const offsetX = document.querySelector('.offsetX')
const clientY = document.querySelector('.clientY')
const pageY = document.querySelector('.pageY')
const offsetY = document.querySelector('.offsetY')

const clientXDisplay = document.createTextNode('')
const pageXDisplay = document.createTextNode('')
const offsetXDisplay = document.createTextNode('')
const clientYDisplay = document.createTextNode('')
const pageYDisplay = document.createTextNode('')
const offsetYDisplay = document.createTextNode('')

const celownikPole = document.querySelector('.pole')
const celownik = document.querySelector('.celownik')

const menuClick = document.querySelector('.menu')
const menuTemplate = document.querySelector('.menu-template')

window.addEventListener('contextmenu', e => {
    e.preventDefault()
})
window.addEventListener('mousedown', e => {
    if(document.querySelector('.menu-prawy')){
        const menuPrawy = document.querySelector('.menu-prawy')
        menuPrawy.remove()
    }
    if(e.button == 2){
        const menu = menuTemplate.content.cloneNode(true)
        document.body.append(menu)
        const menuPrawy = document.querySelector('.menu-prawy')
        console.log(menu);
        menuPrawy.style.top = `${e.pageY}px`
        menuPrawy.style.left = `${e.pageX}px`
    }
})
celownikPole.addEventListener('mousemove', (e) => {
    celownik.style.top = `${e.offsetY}px`
    celownik.style.left = `${e.offsetX}px`
})
let isZoomed = false
celownikPole.addEventListener('mousedown', e => {
    e.preventDefault()
    console.log(e.button);
    if(e.button == 2 && !isZoomed){ 
        celownikPole.classList.add('zoom')
        isZoomed = true
    }else if(e.button == 2 && isZoomed){
        celownikPole.style.transition = 'transform 0.3s ease-in-out'
        setTimeout(()=> {
            celownikPole.style.transition = ''
        },300)
        celownikPole.classList.remove('zoom')
        isZoomed = false
    }
    if(e.button == 0){
        const kropka = document.createElement('div')
        kropka.classList.add('kropka')
        kropka.style.top = `${e.offsetY}px`
        kropka.style.left = `${e.offsetX}px`
        celownikPole.append(kropka)
    }
})

celownikPole.addEventListener("mouseover", () => {
    celownik.style.display = "";
});

celownikPole.addEventListener("mouseout", () => {
    celownik.style.display = "none";
});

const appendToInfo = () =>{
    clientX.append(clientXDisplay)
    pageX.append(pageXDisplay)
    offsetX.append(offsetXDisplay)
    clientY.append(clientYDisplay)
    pageY.append(pageYDisplay)
    offsetY.append(offsetYDisplay)
}
appendToInfo()
cursorArea.addEventListener('mousemove', e => {
    clientXDisplay.textContent = ` ${e.clientX}`
    pageXDisplay.textContent = ` ${e.pageX}`
    offsetXDisplay.textContent = ` ${e.offsetX}`
    clientYDisplay.textContent = ` ${e.clientY}`
    pageYDisplay.textContent = ` ${e.pageY}`
    offsetYDisplay.textContent = ` ${e.offsetY}`
})

const addEvent = (element, event) => {
    element.addEventListener(event, function(e) {
        console.log(this);
        console.log(e.target);
    })
}

// kafelek1.forEach(kafelek1 => {
//     addEvent(kafelek1, 'mouseover')
//     addEvent(kafelek1, 'click')
// })

// kafelek2.forEach(kafelek2 => {
//     addEvent(kafelek2, 'mouseover')
//     addEvent(kafelek2, 'click')
// })

addEvent(mouseUp, 'mouseup')
addEvent(mouseDown, 'mousedown')
addEvent(click, 'click')
addEvent(mouseOver, 'mouseover')
addEvent(mouseOver, 'click')
addEvent(mouseOut, 'mouseout')
// addEvent(mouseMove, 'mousemove')
addEvent(mouseEnter, 'mouseenter')
addEvent(mouseLeave, 'mouseleave')