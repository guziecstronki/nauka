// // const people = [
// //     {
// //         name: 'Mateusz',
// //         surname: 'Pawłowski',
// //         age: 16,
// //         parents: {
// //             mother: {
// //                 name: 'aaaaaaa',
// //                 surname: 'bbbbbbbb',
// //             },
// //             father: {
// //                 name: 'cccccccc',
// //                 surname: 'ddddddd',
// //             },
// //         },
// //     },
// //     {
// //         name: 'Robert',
// //         surname: 'Karaś',
// //         age: 25,
// //         parents: {
// //             // mother: {
// //                 // name: 'eeeeeeeee',
// //                 // surname: 'fffffffff',
// //             // },
// //             father: {
// //                 name: 'ggggggggggg',
// //                 surname: 'hhhhhhhhh',
// //             },
// //         },
// //     }
// // ]

// // // imie mamy roberta

// // const [ ,{ parents: {mother: {name = 'Roberts Mother'} = 'mama'}, parents: { mother: { surname: nameM = 'a' } = 'cos' }, parents : { mother = { name: 'mama'} }  } ] = people
// // console.log(name);
// // console.log(nameM);
// // console.log(mother);

// const person = {
//     name: 'Mateusz',
//     surname: 'Pawłowski',
//     age: 16,
//     parents: {
//         mother: {
//             name: 'aaaaaaa',
//             surname: 'bbbbbbbb',
//         },
//         father: {
//             name: 'cccccccc',
//             surname: 'ddddddd',
//         },
//     },
// }

// const { parents : {mother: {name} } } = person
// console.log(name);

const person = {
    name: 'Mateusz',
    surname: 'Pawłowski',
    age: 16,
    parents: {
        mother: {
            surname: 'bbbbbbbb',
        },
        father: {
            name: 'cccccccc',
            surname: 'ddddddd',
        },
    },
    height: 178
}
// by wyswietlic mother name trzeba:
const { parents : { mother: { name: imieMamy = 'Mama' } }, ...all } = person
console.log(imieMamy);
console.log(all);