const btn = document.querySelector('.button')
const btnGetInfo = document.querySelector('.getInfo')

const myDiv = document.querySelector('.myDiv')

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')

const displayFirst = document.querySelector('.displays .first')
const displaySecond = document.querySelector('.displays .second')
const displayThird = document.querySelector('.displays .third')

btn.addEventListener('click', function() {
    console.dir(this)
    // myDiv.innerText = '123'usunie nam całą zawartość i zmieni ją na 123
    // first.innerHTML = `<p>123123</p>` //to sie nie wykona ponieważ first został usunięty
    first.innerHTML = `
    <p>
    123123
    </p>`//Tworzy znacznik p w DOMie
    second.textContent = `
    <p>
    123123
    </p>`
    // nie zadziałają br
    third.innerText = `
    <p>
    123123
    </p>`
    // dodadzą się br
    console.log(first.getAttribute('class'));
})

btnGetInfo.addEventListener('click', () => {
    const infoInnerHTML = first.innerHTML
    const infoTextContent = second.textContent
    const infoInnerText = third.innerText
    displayFirst.innerHTML = infoInnerHTML
    displaySecond.textContent = infoTextContent
    displayThird.innerText = infoInnerText
})

console.log(displayFirst.tagName);

console.log(first.getAttribute('class'));
console.log(first);
first.setAttribute('class', 'first-p')
console.log(first.getAttribute('class'));
console.log(first);
console.log(first.hasAttribute('class'));
first.removeAttribute('class')
// console.log(first);
console.log(myDiv.dataset.mojeInfo);
const firstType = document.querySelector('p[data-position="left"]')
console.log(firstType);
firstType.addEventListener('mouseover', () => {
    console.log(firstType.dataset.position);
})

// Zrobić tutaj do dataset a anki do dataset juz zrobione