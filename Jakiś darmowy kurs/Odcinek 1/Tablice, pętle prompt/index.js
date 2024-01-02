const myArray= [1, 2, 3, 2, 1];
console.log(myArray.length);
myArray[4] = 2
console.log(myArray);
console.log(myArray[myArray.length - 1]);
myArray[myArray.length] = 10
console.log(myArray);
myArray.push('Nowa osoba')
console.log(myArray);

let deletePerson = myArray.splice(myArray.length - 1)
console.log(deletePerson);
console.log(myArray);
myArray.length = 20
console.log(myArray);
myArray.sort()
console.log(myArray);

// Pętle

let i = 0

while(i < 10){
    console.log(i);
    i++
}

let si = 0

while(si < myArray.length){
    console.log(myArray[si]);
    si++
}


for(let i = 0; i < 100; i++) {
    console.log(i);
}

let ssi = 0

do{
    ssi++
    console.log(ssi);
}while(ssi < 100)
