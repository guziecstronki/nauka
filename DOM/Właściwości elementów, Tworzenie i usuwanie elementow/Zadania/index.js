const generateButton = document.querySelector('.generate-button')
let numbers = []

generateButton.addEventListener('click', () => {
    const amount = +document.querySelector('#amount-of-numbers').value
    const first = +document.querySelector('#first-number').value
    const second = +document.querySelector('#second-number').value
    const sequenceOfNumbers = document.querySelector('.sequence-of-numbers') 
    const goldenProportion = document.querySelector('.golden-proportion') 

    const fi = (amount, first, second) => {
        const numbers = [first, second]
        const goldenProportion = [null , (first / second)]
        function arrayOfFiNumbers(){
            const last = numbers[numbers.length - 1]
            const preLast = numbers[numbers.length - 2]
            if(amount == 1){
                return [numbers, goldenProportion]
            }
            numbers.push(last + preLast)
            goldenProportion.push(last / preLast)
            amount--
            return arrayOfFiNumbers()
        }
        return arrayOfFiNumbers
    }
    arrayOfFiNumbers = fi(amount, first, second)

    if(isNaN(amount) || isNaN(first) || isNaN(second) || amount < 2){
        sequenceOfNumbers.innerHTML = `<p>Podaj poprawne liczby</p>` 
    }else{
            const [sequenceOfNumbersArr, goldenProportionArr] = arrayOfFiNumbers()
            numbers = [sequenceOfNumbersArr, goldenProportionArr]
            sequenceOfNumbersArr.forEach((number, index) => {
                const div = document.createElement('div')
                div.setAttribute('class','number')
                const p = document.createElement('p')
                p.innerHTML= `${index + 1 < 10 ? '0' + (index + 1) : index + 1} -> <span>${number}</span>`
                sequenceOfNumbers.appendChild(div)
                div.appendChild(p)
            });
            goldenProportionArr.forEach((number, index) => {
                const div = document.createElement('div')
                div.setAttribute('class','proportion')
                const p = document.createElement('p')
                p.innerHTML= `${index + 1 < 10 ? '0' + (index + 1) : index + 1} -> <span>${number}</span>`
                goldenProportion.appendChild(div)
                div.appendChild(p)
            });
        console.log(numbers);
    }
})

const oddElements = document.querySelectorAll('.odd button')
const evenElements = document.querySelectorAll('.even button')
const fiElements = document.querySelectorAll('.fi button')
const allElements = document.querySelectorAll('.all button')

const allButtons = [...oddElements, ...evenElements, ...fiElements, ...allElements]


console.log(allButtons);

allButtons.forEach(button => {
    button.addEventListener('click', function() {
        allButtons.forEach(button => {
            if(button != this){
                button.removeAttribute('class')
            }
        })
        this.classList.toggle('clicked')
    })
})



const isEven = (number) => {
    if (number % 2 == 0){
        return true
    }
    return false
}

const isOdd = (number) => {
    if (number % 2 == 1){
        return true
    }
    return false
}

const checkNumbers = (which) => {
    const numbersInHTML = document.querySelectorAll('.sequence-of-numbers .number p span')   
    numbersInHTML.forEach(function(number) {
        if(which(number.textContent)){
            if(which == isOdd){
                number.setAttribute('class', 'odd')
            }else if(which == isEven){
                number.setAttribute('class', 'even')
            }
        }
    })
}

const colorAll = () => {
    const numbersInHTML = document.querySelectorAll('.sequence-of-numbers .number p span') 
    numbersInHTML.forEach(function(number) {
        number.setAttribute('class', 'all')
    })  
}

const buttonsClick = (buttons) => {
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if(buttons == oddElements){
                checkNumbers(isOdd)
            }else if(buttons == evenElements){
                checkNumbers(isEven)
            }else if(buttons == allElements){
                colorAll()
            }
    })
})}

const addEventClick = (buttons) => {
    buttonsClick(oddElements)
    buttonsClick(evenElements)
    buttonsClick(fiElements)
    buttonsClick(allElements)
}

addEventClick(oddElements)