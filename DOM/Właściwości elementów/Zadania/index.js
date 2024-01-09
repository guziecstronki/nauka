const generateButton = document.querySelector('.generate-button')

generateButton.addEventListener('click', () => {
    const amount = +document.querySelector('#amount-of-numbers').value
    const first = +document.querySelector('#first-number').value
    const second = +document.querySelector('#second-number').value
    const sequenceOfNumbers = document.querySelector('.sequence-of-numbers') 
    const fiNumbers = document.querySelector('.fi-numbers') 

    const fi = (amount, first, second) => {
        const numbers = [first, second, ]

        function displayAllFiNumbers(){
            const last = numbers[numbers.length - 1]
            const preLast = numbers[numbers.length - 2]
            if(amount == 1){
                return numbers
            }
            numbers.push(last + preLast)
            amount--
            return displayAllFiNumbers()
        }
        return displayAllFiNumbers
    }
    displayAllFiNumbers = fi(amount, first, second)

    if(isNaN(amount) || isNaN(first) || isNaN(second) || amount < 2){
        sequenceOfNumbers.innerHTML = `<p>Podaj poprawne liczby</p>` 
    }else{
        console.log(displayAllFiNumbers());
    }
})