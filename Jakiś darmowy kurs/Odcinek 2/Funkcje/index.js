// function sayHello(name, surname) {
//     const text = `Hello ${name} ${surname}` 
//     console.log(text);
// }

// // sayHello('Mateusz','Pawłowski')


// let wallet = 10000

// const sum = (currentWallet, cash) => {
//     let result = currentWallet + odliczeniePodatku(cash)
//     return result
// }

// const odliczeniePodatku = (cash) => {
//     const podatek = 0.6
//     return cash - (cash * podatek )
// }

// wallet = sum(wallet, 10000)
// console.log(wallet);
// console.log(sum(wallet, 10000));


// const functionWithReturnInIf = (a) => {
//     if(a < 0){
//         return 'a must be a positive number';
//     }
//     if(a == 0){
//         return 'a cannot be a 0';
//     }
//     return a * 10;
// };
// const result = functionWithReturnInIf(1120);
// console.log(result);


const calculateDeclaration = function(firstNumber, secondNumber){
    firstNumber = +firstNumber
    secondNumber = +secondNumber

    console.log(firstNumber + secondNumber);
    console.log(firstNumber - secondNumber);
    console.log(firstNumber / secondNumber);
    console.log(firstNumber * secondNumber);
}

const calculateArrowFunction = (firstNumber, secondNumber) => {
    firstNumber = +firstNumber
    secondNumber = +secondNumber

    console.log(firstNumber + secondNumber);
    console.log(firstNumber - secondNumber);
    console.log(firstNumber / secondNumber);
    console.log(firstNumber * secondNumber);
}


// const firstNumber = prompt('First Number')
// const secondNumber = prompt('First Second')

// calculateDeclaration(firstNumber,secondNumber)

console.log('-----------');

// calculateArrowFunction(firstNumber,secondNumber)

const checkNumbers = (number) => {
    if(isOdd(number)){
        return number * 2
    }
    return number
}

const isOdd = (number) => {
    if(number % 2 != 0){
        return true
    }
    return false
}

console.log(checkNumbers(7));







const checkNumbers2 = function(num){
    if(isOdd2(num)){
        return num * 2
    }
    return num
}
const isOdd2 = function(num){
    if(num % 2 !== 0){
        return true
    }
    return false
}

console.log(checkNumbers2(4));