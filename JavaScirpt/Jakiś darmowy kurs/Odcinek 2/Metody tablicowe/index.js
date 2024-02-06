// const numbers = [1, 2, 3];
// numbers.push(4)
// console.log(numbers);

// numbers.forEach(el => console.log(el))

// const newNumbers = numbers.map(number => number + 2)
// console.log(newNumbers);

// const onlyEven = number => number % 2 == 0
// const multiplyBy2 = number => number * 2
// const show = number => console.log(number)

// const newNumbers = numbers
//     .filter(onlyEven)
//     .map(multiplyBy2)
//     .forEach(show)


const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6]


const largerThan3 = (grade) => grade >= 4; 
const show = (grade) => console.log(grade); 
const sumOfGrades = (acc, curr) => acc + curr

const averageOfGrades = grades.reduce(sumOfGrades) / grades.length


grades
    .filter(largerThan3)
    .forEach(show)

console.log(averageOfGrades);


const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Zielona-Góra', 'Jastrzębie-Zdrój', 'Rabka zdrój']

const evenLengthWords = (word) => word.length % 2 == 0
const convertToUpperCase = (word) => word.toUpperCase()

const newCities = cities
    .filter(evenLengthWords)
    .map(convertToUpperCase)

    console.log(newCities);

const numbers = [1, 2, 3];

numbers.forEach((el, i ,arr) => {
    arr[i] += 1
    console.log(arr[i]);
    console.log(el);
})
console.log(numbers);






