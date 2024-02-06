// const person = {
//     name: 'Mateusz',
//     introduce(){
//         console.log(`${this.name} to spoko koleżka`);
//     }
// }

// person.introduce()



// const greet = function(age){
//     console.log(`${this.name} ma ${age} lat`);
// }
// greet.call(person, 16)


// const calculator = {
//     add(numbers){
//         console.log(numbers.reduce((acc, curr) => acc + curr, 0)); 
//     },
//     multiply(numbers){
//         console.log(numbers.reduce((acc, curr) => acc * curr, 1));  
//     },
// }
// const examplesMathOperations = {
//     first: [1,2,3],
//     second: [5,4,3],
//     third: [10,21,33],
// }
// const { first, second, third } = examplesMathOperations

// calculator.add.apply(calculator, [third]);
// calculator.multiply.apply(calculator, [second]);

// const book1 = {
//     title: 'Tytuł1',
//     printTitle(){
//         console.log(this.title);
//     }
// }
// const book2 = {
//     title: 'Tytuł2',
// }
// const book3 = {
//     title: 'Tytuł3',
// }

// const book4 = {
//     title: 'Tytuł4',
// }

// const book5 = {
//     title: 'Tytuł5',
// }

// const book6 = {
//     title: 'Tytuł6',
// }

// const logTitle = book1.printTitle.bind(book6)
// logTitle()


// const counter = {
//     count: 0,
//     increment(){
//         console.log(++this.count);
//     }
// }

// const logCount = counter.increment.bind(counter)

const person = {
    name: 'Mateusz',
    greet(){
        console.log(`Witaj ${this.name}`);
    },
}

const student = {
    name: 'Weronika',
}

person.greet.call(student)
person.greet.apply(student)

const calculate = function(a,b) {
    let result = 0
    if(this.mode == 'add'){
        result = a + b        
    }
    if(this.mode == 'multiply'){
        result = a * b    
    } 
    return result
}

const calculatorAdd = {
    mode: 'add',
}

const calculatorMultiply = {
    mode: 'multiply'
}

const multiply = calculate.bind(calculatorMultiply, 5, 1)
const add = calculate.bind(calculatorAdd, 1, 1)
console.log(add());
console.log(multiply());

const mathOperations = {
    result : 0,
    add(nums){
        this.result = nums.reduce((acc, curr) => acc + curr, 0);
    },
    multiply(nums){
        this.result = nums.reduce((acc, curr) => acc * curr, 1);
    },
}

const numbers = [1,2,34,5,6,12,123,234]

mathOperations.add.apply(mathOperations, [numbers])
console.log(mathOperations.result);

mathOperations.multiply.call(mathOperations, numbers)
console.log(mathOperations.result);

const counter = {
    value: 0,
    increase(){
        this.value++
        console.log(this.value);
    }
}

// setInterval(() => {
//     const incremment = counter.increase.bind(counter)
//     incremment()
// }, 100)

// const ticker = timer.tick()

const timer = {
    seconds: 0,
    tick(){
        ++this.seconds
        console.log(this.seconds);
        setTimeout(() => {
            ticker()
        },1000)
    }
}

const ticker = timer.tick.bind(timer)
ticker()
