"use strict";
const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 14,
    },
    setAge(age) {
        this.age = age;
    },
};
const { age, name } = profile;
const { coords: { lat, lng }, } = profile;
//dynamic key
const event1 = {
    click: [
        () => {
            console.log('clicked');
        },
    ],
};
