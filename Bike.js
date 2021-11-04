import Vehicle from "./Vehicle.js";

export default class Bike extends Vehicle {
    constructor(fuelType, carYear, carColor, maxSpeed) {
        super(fuelType, carYear, carColor, maxSpeed);
        this.type = 'bike';
    }

    startVenicle() {
        this.engineIsStarted = true;
        console.log(`The ${this.type} is started.`);
    }

    transportContainer() {
        console.log('I am starting to transport the container');
    }
}
