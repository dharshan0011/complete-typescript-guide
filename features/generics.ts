class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index]
  }
}

const arr = new ArrayOfAnything<string>(['a', 'b', 'c'])

//type inference
const arr2 = new ArrayOfAnything(['a', 'b', 'c'])

function printString(arr: string): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    console.log(element)
  }
}

function printNumber(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    console.log(element)
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    console.log(element)
  }
}

//recommended to add the type even when type inference
printAnything<string>(['a', 'b', 'c'])

//type inference
// printAnything(['a', 'b', 'c'])

//Generic Constraints

class Car {
  print() {
    console.log('I am a car')
  }
}

class House {
  print() {
    console.log('I am a house')
  }
}

interface Printable {
  print(): void
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    element.print()
  }
}

printHousesOrCars([new House(), new House()])
printHousesOrCars([new Car(), new Car()])
