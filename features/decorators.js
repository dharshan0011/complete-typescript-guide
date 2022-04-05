"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class Boat {
    constructor() {
        this.color = 'red';
    }
    get formattedColor() {
        return `This boats color is ${this.color}`;
    }
    pilot() {
        // console.log('swish')
        throw new Error();
    }
}
__decorate([
    testDecorator,
    __metadata("design:type", String)
], Boat.prototype, "color", void 0);
__decorate([
    logError('Oops, boat was sunk'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Boat.prototype, "pilot", null);
// only gets executed when we declare class not when instantiated
function logError(errorMessage) {
    return function (target, key, desc) {
        //actual decorator
        //wrapping the pilot method to log errors
        const method = desc.value;
        try {
            method();
        }
        catch (err) {
            console.log(errorMessage);
        }
    };
}
function testDecorator(target, key) {
    console.log(target);
    console.log(key);
}
