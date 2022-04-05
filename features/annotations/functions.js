"use strict";
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
function divide(a, b) {
    return a / b;
}
const multiply = function (a, b) {
    return a * b;
};
const logger = (message) => {
    console.log(message);
};
const throwError = (message) => {
    throw new Error(message);
};
const todaysWeather = {
    date: new Date(),
    weather: 'sunny',
};
const logWeather = ({ date, weather, }) => {
    console.log(weather);
};
logWeather(todaysWeather);
