// {
//     const a = 1
//     console.log(a);
// }
// const b = 2

// console.log(b);

// console.log(typeof {});

// const obj = {
//     name: 'Mateusz',
//     surname: 'Pawłowski',
//     sayHello(){
//         console.log('Hello');
//     },
// }

// obj.surname = 'pawl'
// obj.age = 16
// obj.sayHello()
// obj['Identyfikator Użytkownika'] = 1

// console.log(obj.surname);
// console.log(obj.age);
// console.log(obj['Identyfikator Użytkownika']);



// const myMath = {
//     pow: (a, b) => a ** b,
// };

// console.log(myMath.pow(2, 3));

// const person1 = {
//     name: 'Tester',
//     surname: '1',
//     sayHello(){
//         console.log(`Hello ${this.name} `);
//     },
// }
// const person2 = {
//     name: 'Tester2',
//     surname: '2',
//     sayHello: person1.sayHello
// }
// const helloPerson2 = person1.sayHello.bind(person2)
// helloPerson2()

// console.log(person2.sayHello());

const Person = function(name, surname, number){
    this.name = name;
    this.surname = surname;
    this.number = number;
    this.przywitanie = function() {
        console.log(`hello ${this.name}`);
    }
}

const schoolClass = []

// for(let i = 0; i < 3; i++){
//     const name = prompt('Podaj imie')
//     const surname = prompt('Podaj nazwisko')
//     const number = prompt('Podaj numerek w dzienniku')

//     const person = new Person(name, surname, +number)
//     schoolClass.push(person)
// }

// lub 

for(let i = 0; i < 3; i++){
    schoolClass.push(new Person(`Name ${i}`,'Nazwisko', i))
}

// console.log(schoolClass);
// const sortedSchoolClass = schoolClass.toSorted((a,b) => a.number - b.number)
// console.log(sortedSchoolClass);

schoolClass[0].przywitanie()