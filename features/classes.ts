class Vehicle {
  // color: string
  // constructor(color: string) {
  //   this.color = color
  // }
  constructor(public color: string) {
    //does the same thing as above code
  }
  public drive(): void {
    console.log('Chugga chugga')
  }
  protected honk(): void {
    console.log('Beep')
  }
}

const vehicle = new Vehicle('red')
vehicle.drive()

class Bike extends Vehicle {
  constructor(public brand: string, color: string) {
    super(color)
  }
  /*private*/ drive(): void {
    //Overriding, but you shouldn't modify the modifier
    console.log('Vrooom')
  }

  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const bike = new Bike('Bajaj', 'black')
// bike.honk() not accessible here
// bike.drive() not accessible here
bike.startDrivingProcess()
