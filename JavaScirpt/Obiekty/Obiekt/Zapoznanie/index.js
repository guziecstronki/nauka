// const dog = {
//     name: "szama",
//     speed: 1000,
//     showText(){
//         return "Lubię walczyć ze złem";
//     }
// }

// const name = "Misiu";
// const speed = 10000;

// const dog2 = {
//     name,
//     speed,
//     showText() {
//         return "hau hau";
//     }
// };

// const tab = []

// console.log(dog2.name);
// tab.push({name,speed})
// console.log(tab[0]);

// const calendar = {
//     "2023-11-11" : "Narodowe Święto Niepodległości"
// }

// console.log(calendar["2023-11-11"]);

// const obj = {
//     name: "Marcin",
//     surname: "Kowalski",
//     age: 10
// }

// const {name, surname, age} = obj;

const dog = {
    name: "szama",
    speed: 1000,
    showText(){
        return 'siema'
    }
}

dog.type = "pies"
dog.legs = 4
eat = () => {
    return "jem dobre rzeczy"
}
dog.eat = eat

// console.log(dog.eat());

const nowaNazwa = 'wielkosc'

dog[nowaNazwa] = 'maly'

// console.log(dog.wielkosc);

// console.log(dog);
// delete dog[nowaNazwa]
// console.log(dog);

// for(const key in dog){
//     console.log(dog[key]);
// }
// for(const val of Object.values(dog)){
//     console.log(val);
// }

const catName = "mruczek"
const catSpeed = 1270
const catHP = 63

const cat = {
    catName,
    catSpeed,
    catHP,
    getDamage(){
        this.catHP -= 1
    }
}
cat.getDamage()
cat.getDamage()
cat.getDamage()
cat.getDamage()
cat.getDamage()
cat.getDamage()
cat.getDamage()
console.log(cat.catHP);