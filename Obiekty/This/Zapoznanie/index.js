// console.log(this); 

// function test() {
//     console.log(this); 
// }

// test();

//Zwraca obiekt Window

// const ob = {
//     name: 'pies',
//     wyswietlObiekt() {
//         console.log(this);
//     }
// }

// ob.wyswietlImiePsa()

// const pet = {
//     name: 'pies',

//     wyswietl() {
//         console.log(this);

//         function wyswietl(){
//             console.log(this);
//         }
//         wyswietl();

//         const obj = {
//             name: 'obj wewnetrzny',
//             wyswietl() {
//                 console.log(this)
//             }
//         }
//         obj.wyswietl()
//     }
// }
// pet.wyswietl()


// const person = {
//     name: 'Tom',
//     showName(){
//         console.log(this.name);
//     },
//     address: {
//         city: 'Warsaw',
//         street: 'Złota',
//         showAddres() {
//             console.log(`${this.city}, ${this.street}`);
//             const f2 = () => console.log(this);
//             f2()
//         },
//         showAddres2: () => {
//             console.log(`${this.city}, ${this.street}`);
//         },
//         log: this,
//     }
// }
// person.showName()
// person.address.showAddres()
// person.address.showAddres2()
// console.log(person.address.log)

const personA = {
    name: 'Mateusz'
}

const person = {
    name: 'Weronika',
    surName: {
        first: 'pawłowicz',
        second: 'peasfas'
    },
    showName(surname, age) {
        console.log(this.name, this.surname ? this.surname : surname, this.age ? this.age : age)
    }
}



const people = [
    {
        name: 'Mateusz',
        surname: 'Pawłowski'
    },
    {
        name: 'Weronika'
    },
]

// people.forEach(onePesron =>{
//     const startFunction = person.showName.bind(onePesron, 'Kowalski', 10) 
//     startFunction()
// })

