'use strict';


// FlyingVehicle
const FlyingVehicle = (tailNumber, color) => ({

  tailNumber: tailNumber,
  color: color,
  altitude: 0,
  speed: 0,

  land: function() {
    console.log('landed');
    this.altitude = 0;
    this.speed = 0;
  },

  takeOff: function() {
    console.log('taking off');
    this.speed = this.topSpeed;
    this.altitude = this.maxAltitude;
  },
});


// Airplane
const Airplane = function(tailNumber, color){

  let wings = 2;
  let topSpeed = 400;
  let maxAltitude = 40000;
  let passengers = 300;

  function taxi() {
    this.speed = 25;
    console.log(`taxi-ing, current speed is ${this.speed}`);
  }

  function autoPilot(duration) {
    this.sleepFor = duration;
    console.log(`Autopilot engaged for ${duration} minutes. Enjoy the flight.`);
  }

  let airplane = Object.assign(
    {},
    FlyingVehicle(tailNumber, color),
    {wings},
    {topSpeed},
    {maxAltitude},
    {passengers},
    {taxi},
    {autoPilot}
  );

  return airplane;
};


// Helicopter
const Helicopter = function(tailNumber, color){

  let wings = 4;
  let topSpeed = 200;
  let maxAltitude = 10000;
  let passengers = 12;

  function taxi() {
    this.speed = 15;
    console.log(`taxi-ing, current speed is ${this.speed}`);
  }

  let helicopter = Object.assign(
    {},
    FlyingVehicle(tailNumber, color),
    {wings},
    {topSpeed},
    {maxAltitude},
    {passengers},
    {taxi}
  );

  return helicopter;

};

module.exports = {FlyingVehicle, Airplane, Helicopter};

