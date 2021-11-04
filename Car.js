import Vehicle from "./Vehicle.js";

export default class Car extends Vehicle {
    constructor(fuelType, carYear, bodyType, carColor, maxSpeed) {
        super(fuelType, carYear, carColor, maxSpeed);
        this.bodyType = bodyType;
        this.type = 'car';
    }

    showInfo() {
        console.log(`The characteristic of the ${this.type}:
        Fuel: ${this.fuel}
        Year: ${this.year}
        Body type: ${this.bodyType}
        Color: ${this.color}
        Max Speed: ${this.speed}`);
    }

    startVenicle() {
        this.engineIsStarted = true;
        console.log(`The ${this.type} is started.`);
    }

    transportPeople() {
        if (this.engineIsStarted) {
            console.log(`I began transporting passengers on the ${this.type}`);
        } else {
            console.log('Start driving first.');
        }
    }
}
