class Vehicle{
    constructor(carName, model, year){
        this.carName = carName;
        this.model = model
    }
    getInfo(){
        return `${this.carName} ${this.model}`
    }
}
class Car extends Vehicle{
    constructor(){
        super('TATA', 'Tiago')
    }
    carSpeed(){
        console.log("Car max speed is 240kmph")
    }
}
const c1 = new Car();
c1.carSpeed()
console.log(c1.getInfo())