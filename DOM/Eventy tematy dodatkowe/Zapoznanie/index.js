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

const paragraphs = document.querySelector('.paragraphs')

const getTime = (date) => {
    let currentTime = date
    return `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
}

const created = new CustomEvent('created')
const deleted = new CustomEvent('deleted', {detail: getTime(new Date())})

window.addEventListener('DOMContentLoaded', () => {
    createP(paragraphs, 'witaj')
    createP(paragraphs, 'swiecie')
})

paragraphs.addEventListener('click', e => {
    deleteElement(e.target)
})

const createP = (parent, value) => {
    const p = document.createElement('p')
    p.textContent = value
    parent.append(p)
    p.addEventListener('created', wasBorn)
    p.addEventListener('deleted', hasDied)
    p.dispatchEvent(created)
}

const deleteElement = (element) => {
    element.dispatchEvent(deleted)
    element.remove()
}

const wasBorn = (e) => {
    console.log(e.type, e.target);
}

const hasDied = (e) => {
    console.log(e.type, e.target, e.detail);
}