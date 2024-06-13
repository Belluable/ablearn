var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pet = /** @class */ (function () {
    function Pet(name) {
        this.name = name;
    }
    Pet.prototype.move = function () {
        console.log('Pet is moving');
    };
    Pet.prototype.bark = function () { };
    Pet.prototype.getName = function () {
        return this.name;
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.move = function () {
        console.log('어슬렁');
    };
    Dog.prototype.bark = function () {
        console.log('멍멍!', this.name);
    };
    Dog.prototype.howling = function () {
        console.log('우우우우!', this.name);
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.bark = function () {
        console.log('야옹!', this.name);
    };
    Cat.prototype.kukuki = function () {
        console.log('꾹!꾹!');
    };
    return Cat;
}(Pet));
var lucy = new Dog('Lucy');
lucy.move();
lucy.bark();
lucy.howling();
var maxx = new Dog('Maxx');
maxx.howling();
console.log('🚀 ~ maxx:', maxx.getName());
var happy = new Cat('Happy');
happy.bark();
happy.kukuki();
