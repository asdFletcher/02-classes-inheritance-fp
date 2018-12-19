'use strict';

const util = require('util');

// const Vehicle = require('./vehicle-class.js');
// const Vehicle = require('./vehicle-factory.js');
const Vehicle = require('./vehicle-constructor.js');

// const testmoto = new Vehicle.Motorcycle('motoo');
// console.log(testmoto);
// console.log(testmoto.drive());
// console.log(testmoto.stop());
// console.log(testmoto.wheelie());



// const FlyingVehicle = require('./flying-vehicle-class');
// const FlyingVehicle = require('./flying-vehicle-factory');
const FlyingVehicle = require('./flying-vehicle-constructor');

const dumbo = new FlyingVehicle.Airplane('NDMB001', 'gray');
console.log(`dumbo: ${util.inspect(dumbo)}`);
// console.log(`dumbo: ${dumbo.land}`);
// console.log(`dumbo: ${dumbo.taxi}`);
// console.log(`dumbo: ${dumbo.autoPilot}`);

// dumbo.taxi();
dumbo.takeOff();
// dumbo.autoPilot(60);
// dumbo.land();
console.log(`dumbo: ${util.inspect(dumbo)}`);

// const myHeli = new FlyingVehicle.Helicopter('NDMB001', 'gray');
// console.log(`myHeli: ${util.inspect(myHeli)}`);
// console.log(`myHeli: ${myHeli.land}`);
// console.log(`myHeli: ${myHeli.taxi}`);
// console.log(`myHeli: ${myHeli.autoPilot}`);

// myHeli.taxi();
// myHeli.takeOff();
// myHeli.land();