'use strict';

class FlyingVehicle {

  constructor(wings, tailNumber, color, topSpeed, maxAltitude, passengers){
    this.wings = wings;
    this.tailNumber = tailNumber;
    this.color = color;
    this.topSpeed = topSpeed;
    this.maxAltitude = maxAltitude;
    this.passengers = passengers;
    this.altitude = 0;
    this.speed = 0;
  }

  land(){
    console.log('landed');
    this.altitude = 0;
    this.speed = 0;
  }

  takeOff(){
    console.log('taking off');
    this.speed = this.topSpeed;
    this.altitude = this.maxAltitude;
  }
}


class Helicopter extends FlyingVehicle{
  constructor(tailNumber, color){
    super(4, tailNumber, color, 200, 10000, 12);
  }

  taxi() {
    this.speed = 15;
    console.log(`taxi-ing, current speed is ${this.speed}`);
  }
}


class Airplane extends FlyingVehicle{
  constructor(tailNumber, color){
    super(2, tailNumber, color, 400, 40000, 300);
  }

  taxi() {
    this.speed = 25;
    console.log(`taxi-ing, current speed is ${this.speed}`);
  }

  autoPilot(duration) {
    this.sleepFor = duration;
    console.log(`Autopilot engaged for ${duration} minutes. Enjoy the flight.`);
  }
}


module.exports = {FlyingVehicle, Airplane, Helicopter};




