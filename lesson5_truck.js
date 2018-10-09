let Vehicle = require ('./lesson5_vehicle');


class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
    }

    transportContainer(){
        console.log("I'm starting heavy containers");
    }
}

module.exports = Truck;

