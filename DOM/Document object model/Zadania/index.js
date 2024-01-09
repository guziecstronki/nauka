const button = document.getElementById('button')
const result = document.getElementById('result')

const check = () => {
    const firstNumber = +document.getElementById('first-number').value
    const secondNumber = +document.getElementById('second-number').value
    let result = ''
    if(firstNumber <= secondNumber){
        for(let i = firstNumber; i <= secondNumber; i++){
            result += `${i} `
        }
    }
    return result
}
const displayResult = () => result.textContent = check()
button.addEventListener('click', displayResult)