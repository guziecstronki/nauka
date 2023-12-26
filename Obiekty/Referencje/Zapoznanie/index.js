const ob1 = {
    name: 'obiekt1',
    secondName: 'Referencja 0x01',
}
const ob2 = {
    name: 'obiekt2',
    secondName: 'Referencja 0x02',
}

// const ob3 = ob2
// ob3.name = 'obiekt3'

// console.log(ob3.name);
// console.log(ob2.name);

const ob3 = {...ob2}
ob3.name = 'obiekt3'

console.log(ob2.name);
console.log(ob3.name);


const Bob1 = {
    type:{
        name:'big object1'
    }
}

const Bob2 = {
    type:{
        name:'big object2'
    }
}

// const Bob3 = {...Bob2}

// Bob3.type.name = 'big object 3'

// console.log(Bob2.type.name);
// console.log(Bob3.type.name);

const Bob3 = structuredClone(Bob2)

Bob3.type.name = 'big object3'

console.log(Bob2.type.name);
console.log(Bob3.type.name);