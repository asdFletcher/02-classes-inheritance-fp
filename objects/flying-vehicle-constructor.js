'ues strict';



const FlyingVehicle = function(wings, tailNumber, color, topSpeed, maxAltitude, passengers) {
  
  this.wings = wings;
  this.tailNumber = tailNumber;
  this.color = color;
  this.topSpeed = topSpeed;
  this.maxAltitude = maxAltitude;
  this.passengers = passengers;
  this.altitude = 0;
  this.speed = 0;

};

FlyingVehicle.prototype.land = function() {
  console.log('landed');
  this.altitude = 0;
  this.speed = 0;
};

FlyingVehicle.prototype.takeOff = function() {
  console.log('taking off');
  this.speed = this.topSpeed;
  this.altitude = this.maxAltitude;
};

// airplane constructor
const Airplane = function(tailNumber, color) {
  FlyingVehicle.call(this, 2, tailNumber, color, 400, 40000, 300);
};

Airplane.prototype = new FlyingVehicle();

Airplane.prototype.taxi = function() {
  this.speed = 25;
  console.log(`taxi-ing, current speed is ${this.speed}`);
};

Airplane.prototype.autoPilot = function(duration) {
  this.sleepFor = duration;
  console.log(`Autopilot engaged for ${duration} minutes. Enjoy the flight.`);
};


// helicopter constructor
const Helicopter = function(tailNumber, color) {
  FlyingVehicle.call(this, 4, tailNumber, color, 200, 10000, 12);
};

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.taxi = function() {
  this.speed = 15;
  console.log(`taxi-ing, current speed is ${this.speed}`);
};

module.exports = {FlyingVehicle, Airplane, Helicopter};