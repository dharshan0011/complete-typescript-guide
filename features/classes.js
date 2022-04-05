"use strict";
class Vehicle {
    // color: string
    // constructor(color: string) {
    //   this.color = color
    // }
    constructor(color) {
        this.color = color;
        //does the same thing as above code
    }
    drive() {
        console.log('Chugga chugga');
    }
    honk() {
        console.log('Beep');
    }
}
const vehicle = new Vehicle('red');
vehicle.drive();
class Bike extends Vehicle {
    constructor(brand, color) {
        super(color);
        this.brand = brand;
    }
    /*private*/ drive() {
        //Overriding, but you shouldn't modify the modifier
        console.log('Vrooom');
    }
    startDrivingProcess() {
        this.drive();
        this.honk();
    }
}
const bike = new Bike('Bajaj', 'black');
// bike.honk() not accessible here
// bike.drive() not accessible here
bike.startDrivingProcess();
