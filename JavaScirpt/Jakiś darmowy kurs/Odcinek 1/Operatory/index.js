console.log(10 >= 3 && 10 <= 99);
console.log(0 && 3);
console.log(2 && 3);
console.log(2 && 0);

console.log('---------');

console.log(10 >= 3 || 10 <= 99);
console.log(0 || 3);
console.log(2 || 3);
console.log(2 || 0);

console.log('---------');

console.log(!true);
console.log(!!true);
console.log(!false);
console.log(!'');
console.log(!!1);

console.log('---------');

console.log(1 + '1');
console.log(1 + 1);
console.log(1 + true);
console.log(1 + 'true');
console.log('1' + true);

console.log('---------');

myNumber = 777
myNumber++
console.log(myNumber);
myNumber = myNumber - 500
console.log(myNumber);

console.log('---------');

const constNumber = 500
// const constNumber = 300
// Error
// constNumber = constNumber - 200
// Error

let letNumber = 200
// let letNumber = 100
// Error
letNumber--
console.log(letNumber);