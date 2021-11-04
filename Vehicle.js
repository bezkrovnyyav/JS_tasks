export default class Vehicle {

    constructor(fuelType, carYear, carColor, maxSpeed) {
        this.fuel = fuelType;
        this.year = carYear;
        this.color = carColor;
        this.speed = maxSpeed;
        this.engineIsStarted = false;
    }

    showInfo() {
        console.log(`The information about ${this.type}:
        Fuel: ${this.fuel}
        Year: ${this.year}
        Color: ${this.color}
        Max Speed: ${this.speed}
        Type: ${this.type}`);
    }

    venicleDrive() {
        if (this.engineIsStarted) {
            console.log('Now you can drive this venicle.');
        } else {
            console.log('You should start the engine of this venicle first.');
        }
    }

    static venicleRepair(venicle) {
        console.log(`The ${venicle.type} from ${venicle.year} is old and it should be repairing.`);
    }

    fuelType(venicle) {
        console.log(`The fuel type of ${venicle.type} is ${venicle.fuel}.`);
    }

}
