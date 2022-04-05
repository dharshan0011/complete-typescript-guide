"use strict";
class ArrayOfNumbers {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
class ArrayOfStrings {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
class ArrayOfAnything {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
const arr = new ArrayOfAnything(['a', 'b', 'c']);
//type inference
const arr2 = new ArrayOfAnything(['a', 'b', 'c']);
function printString(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
    }
}
function printNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
    }
}
function printAnything(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
    }
}
//recommended to add the type even when type inference
printAnything(['a', 'b', 'c']);
//type inference
// printAnything(['a', 'b', 'c'])
//Generic Constraints
class Car {
    print() {
        console.log('I am a car');
    }
}
class House {
    print() {
        console.log('I am a house');
    }
}
function printHousesOrCars(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        element.print();
    }
}
printHousesOrCars([new House(), new House()]);
printHousesOrCars([new Car(), new Car()]);
