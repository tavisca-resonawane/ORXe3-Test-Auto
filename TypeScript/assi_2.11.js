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
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getDetails = function () {
        return "Name is " + this.getName();
    };
    return Employee;
}());
var Permanant = /** @class */ (function (_super) {
    __extends(Permanant, _super);
    function Permanant(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        return _this;
    }
    Permanant.prototype.getSalary = function () {
        return this.salary;
    };
    Permanant.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Permanant.prototype.getFullName = function () {
        return this.name;
    };
    Permanant.prototype.getDetails = function () {
        return "Name is Permanat employee " + this.name;
    };
    return Permanant;
}(Employee));
var emp1 = new Permanant('ABC', 28, 800);
console.log(emp1.getSalary());
console.log(emp1.getFullName());
console.log(emp1.getDetails());
