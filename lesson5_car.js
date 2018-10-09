let Vehicle = require ('./lesson5_vehicle');


class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

    transportPeople(){
        console.log("I'm starting transporting passengers");
    }

    optSpeed(){
        console.log(`${this.maxSpeed * 0.8} overriden`)
    }

    static staticMethod() {
        console.log("it's static method called for class");
    }
}

 exports.Car = Car;