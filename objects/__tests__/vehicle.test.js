'use strict';

// const Vehicle = require('../vehicle-constructor.js');
const Vehicle = require('../vehicle-class.js');
// const Vehicle = require('../vehicle-factory.js');

// console.log({Vehicle});

//Do not change the actual test or index code! 

describe('Vehicles', () => {

  describe('Car', () => {

    let car = new Vehicle.Car('foo');

    it('has 4 wheels', () => {
      expect(car.wheels).toEqual(4);
    });

    it('can drive', () => {
      expect(car.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(car.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(car.wheelie).toBeUndefined();
    });

  });

  describe('Motorcycle', () => {

    let motorcycle = new Vehicle.Motorcycle('foo');

    it('has 2 wheels', () => {
      expect(motorcycle.wheels).toEqual(2);
    });

    it('can drive', () => {
      expect(motorcycle.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(motorcycle.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });

  });

});


let FlyingVehicle = require('../flying-vehicle-class.js');
// let FlyingVehicle = require('../flying-vehicle-factory.js');
// let FlyingVehicle = require('../flying-vehicle-constructor.js');

describe('flying vehicle', ()=>{

  // baseline airplane test
  describe('Airplane', () => {
    const dumbo = new FlyingVehicle.Airplane('NDMB001', 'gray');

    it('correctly constructs an object', () => {
      let expected = {
        wings: 2,
        tailNumber: 'NDMB001',
        color: 'gray',
        topSpeed: 400,
        maxAltitude: 40000,
        passengers: 300,
        altitude: 0,
        speed: 0,
      };

      expect(dumbo).toEqual(
        expect.objectContaining(expected)
      );

    }); 

    it('can takeoff', () => {
      dumbo.altitude = 0;
      dumbo.takeOff();
      expect(dumbo.altitude).toEqual(40000);
    });

    it('can land', () => {
      dumbo.altitude = 100;
      dumbo.land();
      expect(dumbo.altitude).toEqual(0);
    });
    
    it('has a taxi method', () => {
      expect(dumbo.taxi).toBeTruthy();
    });

    it('can taxi', () => {
      dumbo.speed = 0;
      dumbo.taxi();
      expect(dumbo.speed).toEqual(25);
    });

    it('has an autopilot method', () => {
      expect(dumbo.autoPilot).toBeTruthy();
    });

    it('can engage autopilot correctly', () => {
      dumbo.sleepFor = 0;
      let duration = 60;
      dumbo.autoPilot(duration);
      expect(dumbo.sleepFor).toEqual(duration);
    });

  });


  // baseline Helicopter test
  describe('Helicopter', () => {
    const myHeli = new FlyingVehicle.Helicopter('NDMB001', 'gray');

    it('correctly constructs an object', () => {
      let expected = {
        wings: 4,
        tailNumber: 'NDMB001',
        color: 'gray',
        topSpeed: 200,
        maxAltitude: 10000,
        passengers: 12,
        altitude: 0,
        speed: 0,
      };

      expect(myHeli).toEqual(
        expect.objectContaining(expected)
      );
    }); 

    it('can takeoff', () => {
      myHeli.altitude = 0;
      myHeli.takeOff();
      expect(myHeli.altitude).toEqual(10000);
    });

    it('can land', () => {
      myHeli.altitude = 100;
      myHeli.land();
      expect(myHeli.altitude).toEqual(0);
    });

    it('has a taxi method', () => {
      expect(myHeli.taxi).toBeTruthy();
    });

    it('can taxi', () => {
      myHeli.speed = 0;
      myHeli.taxi();
      expect(myHeli.speed).toEqual(15);
    });

    it('has no autopilot method', () => {
      expect(myHeli.autoPilot).toBeUndefined;
    });

  });

});