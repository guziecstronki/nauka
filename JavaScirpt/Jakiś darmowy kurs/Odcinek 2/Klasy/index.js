class Person {
    constructor(name){
       this.name = name
    }
    sayHello(){
        return `hello ${this.name}` 
    }
}

const mateusz = new Person('Mateusz')
console.log(mateusz.sayHello());


class Car {
    constructor(brand, yearOfProductiom, drive){
        this.brand = brand;
        this.yearOfProductiom = yearOfProductiom;
        this.drive = drive;
        this.speed = 0;
    }
    speedIncrease() {
        this.speed++
    }
}

const myCar = new Car('Kia', 2015, 'RWD')

console.log(myCar.speed);
for (let i = 0; i < 9; i++) {
    myCar.speedIncrease()
    console.log(myCar.speed);
}
console.log(myCar.speed);

class Country{
    constructor(name){
        this.name = name
        this.achievements = []
    }

    addAchievement(place, achievement){
        this.achievements.push({place, achievement})
    }
    
    isThereFirstPlace(){
        this.achievements.forEach((achievement) => {
            const { place, achievement: achive } = achievement
            if(place == 1){
                console.log(`${this.name} has first place in ${achive}`);
            }
        })
    }
}

const poland = new Country('poland')
poland.addAchievement(1, 'ski jumping')
poland.addAchievement(1, 'strongman')
poland.addAchievement(3, 'basketball')
poland.addAchievement(5, 'football')
poland.addAchievement(2, 'running')
console.log(poland.achievements);
poland.isThereFirstPlace()

console.log(mateusz);