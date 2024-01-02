// function countGross(net, vat = 23){
//     return net + net * vat / 100
// }

// console.log(countGross(100));
// console.log(countGross(56));
// console.log(countGross(87));
// console.log(countGross(7));

// const people = [
//     'Jan Kowalski',
//     'Anna Nowak',
//     'Jamnik psi',
// ]

// const person1 = people[0]
// const [person11] = people

// console.log(person1);
// console.log(person11);


// const objPerson = {
//     name: 'Mateusz',
//     surname: 'Pawłowski',
//     age: 16,
//     zwierzeta: {
//         psy: {
//             jamniki: {
//                 pierwszy: {
//                     name: 'misiu1'
//                 },
//                 drugi: {
//                     name: 'misiu2'
//                 },
//             },
//             owczarki:{
//                 pierwszy: {
//                     name: 'owczarek1'
//                 },
//                 drugi: {
//                     name: 'owczarek2'                    
//                 },
//             },
//         },
//     },
// }

// // const { name: NameZObiektu, surname, age } = objPerson

// // const { 
// //     name,
// //     surname, 
// //     age, 
// //     zwierzeta: { psy: { jamniki: { pierwszy: { name: imiePierwszegoJamnika}, drugi: { name: imieDrugiegoJamnika } } }} 
// // } = objPerson

// // console.log(imieDrugiegoJamnika);
// // console.log(imiePierwszegoJamnika);

// const array = [1, 2, 3]

// const array2 = [0, ...array, 4, 5]

// console.log(array2);

// const arr1 = [1,2,3]
// const arr2 = arr1
// const arr3 = arr2

// arr1.push(4)
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// console.log(...arr1);

// console.log(Math.max(...arr1));

// const obj1 = {
//     name: 'Mateusz',
// }

// const obj2 = {
//     ...obj1,
//     surname: 'Pawłowski' 
// }
// const { name } = obj2

// console.log(name);
// console.log(obj2);

// const gross = (vat, ...prices) => {
//     prices.unshift(vat)
//     console.log(prices);
// }

// gross(23, 1, 2, 3, 4, 5)

// console.log(`Hello I\'m Mateusz\\\n\n\\Pawłowski`);


// const dodawanie = (...args) => args.reduce((acc, curr) => acc + curr, 0)

// const dodawanie2 = (...args) => {
//     let result = 0
//     args.forEach((number, i, arr) => {
//         result += arr[i] + 1
//     })
//     return result
// }

// console.log(dodawanie(2,5,3));
// console.log(dodawanie2(2,5,3));

const obj = {
    id: 1,
    name: 'Tester Testowy',
    pwdHash: 'aslfbnaslkn1242124aslkn3423',
    isAdmin: true,
    hasAvatar: true,
}

const filter = ({ name, id, hasAvatar }) => ({name, id, hasAvatar})

console.log(filter(obj));


const name = 'Smbd Test'
const age = 35
const role = 'Admin'

const info = `${name} has a role of ${role} and is born in year ${new Date().getFullYear() - age}`
console.log(info);