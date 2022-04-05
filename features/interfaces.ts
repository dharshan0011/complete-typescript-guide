interface Vehicle {
  name: string
  year: Date
  broken: boolean
  summary(): string // not limited to just primitive types, can be function, Date, ...
}

//We don't need type annotation since we are assigning at the time of declaration, the type will inferred
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  available: 'sold', //doesn't matter if you have extra property, you have to have all that is specified by the interface
  summary(): string {
    return `Name ${this.name}`
  },
}

//Long type annotations making it difficult for adding new properties
// const printVehicle = (vehicle: {
//   name: string
//   year: number
//   broken: boolean
// }): void => {
//   console.log(`Name: ${vehicle.name}`)
//   console.log(`Year: ${vehicle.year}`)
//   console.log(`Broken: ${vehicle.broken}`)
// }

//Replacing with interface
const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary())
}

printVehicle(oldCivic) // even though we additional property called available it doesn't matter as far as all the props mentioned by the interface is specified

const normalDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 50,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  },
}

//Let us now make our interface more generic since we are only using the summary method

interface Reportable {
  summary(): string
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printSummary(oldCivic)
printSummary(normalDrink)
