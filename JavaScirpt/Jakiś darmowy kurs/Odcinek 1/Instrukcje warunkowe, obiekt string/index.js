const weather = 'sunny'


if(weather === 'sunny'){
    console.log('Take a hat');
}else if (weather === 'rainy'){
    console.log('Take an umbrella');
}else if(weather === 'windy'){
    console.log('Watch out for trees');
}else{
    console.log('It is ok');
}

console.log(typeof 10 > 3);
console.log(typeof (10 > 3));
console.log(typeof [1,2,3]);
console.log(typeof null);
const myFunction = () => {
    console.log('hello');
}
console.log(typeof myFunction);

console.log([...'hello world'].sort(() => Math.random() - 0.5));

const name = 'Mateusz'
const surname = 'Pawłowski'
const age = 16
if(age >= 18){
    console.log(`${name}, ${surname} ma wiecej niż 18 lat`);
}else {
    console.log(`${name}, ${surname} ma mniej niż 18 lat`);
}

const firstNumber = 4
const secondNumber = 4
const operator = '*'
let result
if(operator === '+'){
    result = firstNumber + secondNumber
}else if(operator === '-'){
    result = firstNumber - secondNumber
}else if(operator === '/'){
    result = firstNumber / secondNumber
}else if(operator === '*'){
    result = firstNumber * secondNumber
}
console.log(result);

const string = 'siemanko'
let newString = ''
for (let i = 0; i < string.length; i++) {
    if(i % 2 == 0){
        newString += string[i].toUpperCase()
    } else{
        newString += string[i]
    }
}
console.log(newString);

for(let i = 0; i <= 100; i++){
    if(i % 3 == 0){
        // console.log(i);
    }
}

console.log(string['length']);
console.log(string.length);