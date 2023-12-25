// const { showPagesOfBook: pages, test = () => console.log('Ta funckja nie istnieje!') } = require('./functionPages.js')

// const book = {
//     author: 'Mateusz Pawłowski',
//     personName: 'Andrzej muchojad',
//     title: 'Jak zostać programistą?',
//     pages: 250,
//     price: 35,
//     // chapters: {
//     //     // first: 'Podstawy JavaScript.',
//     //     second: 'Jak to wykorzystać w praktyce?',
//     //     third: 'Pierwszy projekt.',
//     // }
// }

// // const chapters = book.chapters
// // const firstChapter = chapters.first 

// // const author = book.author
// // const price = book.price
// // const chapters = book.chapters.first

// //ES5

// // author += '!'
// // price++
// // book.chapters.first='Podstawy C++'

// // console.log(author); 
// // console.log(price);
// // console.log(chapters);
// // console.log(book.author); 
// // console.log(book.price);
// // console.log(book.chapters);

// //ES6

// const {
//     author: personName,
//     personName: author,
//     price = 10, 
//     chapters = {},
//     chapters: { 
//         first = 'pierwszy rozdzial' 
//     } = {}
// } = book

// const { length = 10 } = personName

// // console.log(chapters);

// // const tab = [10,12319,3,4,5,6]

// // const [name1, name2, name3, , ,name6] = tab

// // console.log(name6);

// console.log(length); 
// // console.log(author);
// // console.log(chapters);
// // console.log(first);
// // console.log(book.price);




// pages(book)
// test()

const mateusz = {name: 'Mateusz', age: 16, city:'Toruń'}

const mateusz2 = ['Mateusz', 16, 'Toruń']

const getPersonInfo = ({ name, age, city = 'Warszawa' }) => `Imię: ${name} age: ${age} city: ${city}`

const getPersonInfo2 = ([ name, age, city = 'Warszawa' ]) => `Imię: ${name} age: ${age} city: ${city}`

console.log(getPersonInfo(mateusz));
console.log(getPersonInfo2(mateusz2));

const tab = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

const [first, ...inside] = tab
const [second] = inside
console.log(inside);
console.log(second);

const person = {
    name: {
        firstName: 'Mateusz',
        lastName: 'Pawłowski',
    },
    pesel: '10234320123',
    place: {
        city:{
            nameCity: 'Toruń',
            populationCity: 500_000,
            lifeLevel: {
                center: 'nice',
                outside: 'good',
            }
        },
        street: 'Łączna',
        numberOfStreet: '46',
    },
    phoneNumber: '123123123'
}

const { place: { city: { lifeLevel: {center: centrumMiasta, outside: naObrzezach} } }, place: {street} } = person

console.log(centrumMiasta);
console.log(naObrzezach);
console.log(street);

const personTab = [
    ['Mateusz', 16, 'Toruń'],
    ['Weronika', 10, 'Toruń']
]

const [
        [personOneName],
        [personSecondName, ...moreInfo]
    ] = personTab

console.log(personOneName);
console.log(personSecondName);
console.log(moreInfo);

const tabOfObjects = [
    {
        name: 'Mateusz',
        lastName: 'Pawłowski',
        age:16, city: 'Toruń'
    },
    {
        name: 'Adrian',
        lastName: 'Polak',
        age:10,
        city: 'Warszawa',
        hobbies: ['Books', 'Sport']
    },
    {
        name: 'Piotr',
        lastName: 'Szewc',
        age:22,
        city: 'Kraków'
    },
]

const [
    {name: firstPersonName, lastName: firstPersonLastName},
    {name: secondPersonName, hobbies: [firstHobby, secondHobby]},
    {name: thirdPersonName}
] = tabOfObjects

console.log(firstPersonName);
console.log(firstPersonLastName);
console.log(secondPersonName);
console.log(secondHobby);
console.log(thirdPersonName);