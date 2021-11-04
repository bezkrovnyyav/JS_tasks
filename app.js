import Vehicle from "./Vehicle.js";
import Car from "./Car.js";
import Bike from "./Bike.js";

let car = new Car('gas', '2013', 'phaeton', 'white', '220 km/h');
car.startVenicle();
car.showInfo();
car.venicleDrive();
car.transportPeople();

let bike = new Bike('electric', '2021', 'blue', '60 km/h');
bike.startVenicle();
bike.showInfo();
bike.venicleDrive();
bike.transportContainer();

Vehicle.venicleRepair(bike);
new Vehicle().fuelType(bike);