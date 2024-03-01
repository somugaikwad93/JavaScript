class Dog{
    constructor(name, breed, gender){
        this.name = name;
        this.breed = breed;
        this.gender = gender;
    }
    eating(){
        console.log(`${this.name} is eating`)
    }
}

const c1 = new Dog("Charlie", "Lab", "Male");
console.log(c1.name + " " + c1.breed + " " + c1.gender)
c1.eating()

console.log("-------------------------------------------------------")

const c2 = new Dog("Dolly", "Golden Retriver", "Female");
console.log(c2.name + " " + c2.breed + " " + c2.gender)
c2.eating()