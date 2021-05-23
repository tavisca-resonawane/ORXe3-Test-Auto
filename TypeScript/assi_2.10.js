var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.calculateArea = function () {
        return 3.14 * this.radius * this.radius;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.calculateArea = function () {
        return this.length * this.breath;
    };
    return Rectangle;
}());
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.calculateArea = function () {
        return this.side * this.side;
    };
    return Square;
}());
var obj = new Square();
obj.side = 2;
console.log(obj.calculateArea());
var objC = new Circle();
objC.radius = 2;
console.log(objC.calculateArea());
var objR = new Rectangle();
objR.length = 2;
objR.breath = 3;
console.log(objR.calculateArea());
