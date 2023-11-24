var HondaV4 = /** @class */ (function () {
    function HondaV4(cylinders) {
        this.cylinders = cylinders;
    }
    HondaV4.prototype.accelerate = function (fuel) {
        console.log("accelerate honda with " + this.cylinders + " cylinders and " + fuel);
    };
    return HondaV4;
}());
var HondaTank = /** @class */ (function () {
    function HondaTank(capacity) {
        this.capacity = capacity;
    }
    HondaTank.prototype.getFuel = function (quantity) {
        var delta = this.capacity - quantity;
        if (delta < 0) {
            delta = this.capacity;
        }
        this.capacity = this.capacity - delta;
        return quantity;
    };
    return HondaTank;
}());
var Car = /** @class */ (function () {
    function Car(tank, engine) {
        this.tank = tank;
        this.engine = engine;
    }
    Car.prototype.move = function () {
        var fuel = this.tank.getFuel(20);
        this.engine.accelerate(fuel);
    };
    return Car;
}());
function main() {
    var engine = new HondaV4(4);
    var tank = new HondaTank(40);
    var honda = new Car(tank, engine);
    honda.move();
    honda.move();
    honda.move();
}
main();
