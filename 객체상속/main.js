function Vehicle(name, speed) {
    this.name = name;
    this.speed = speed
};

Vehicle.prototype.drive = function() {
    console.log(this.name + ' run at ' + this.speed)
};

let tico = new Vehicle('tico', 50);
tico.drive();

function Sedan(name, speed, maxSpeed) {
    Vehicle.apply(this, arguments);
    this.maxSpeed = maxSpeed;
};

Sedan.prototype = Object.create(Vehicle.prototype);
console.log(Sedan.prototype)

