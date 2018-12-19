'use strict';

// const Vehicle = require('./vehicle-constructor.js');
const Vehicle = require('./vehicle-class.js');
// const Vehicle = require('./vehicle-factory.js');

const testmoto = new Vehicle.Motorcycle('motoo');
console.log(testmoto);
console.log(testmoto.drive());
console.log(testmoto.stop());
console.log(testmoto.wheelie());
console.log(testmoto.wheelie);
console.log(testmoto.stop);

const FlyingVehicle = require('./flying-vehicle-class');
// const FlyingVehicle = require('./flying-vehicle-factory');
// const FlyingVehicle = require('./flying-vehicle-constructor');

const dumbo = new FlyingVehicle.Airplane('NDMB001', 'gray');

console.log(`dumbo: ${dumbo}`);
console.log(`dumbo: ${dumbo.land}`);
console.log(`dumbo: ${dumbo.taxi}`);
console.log(`dumbo: ${dumbo.autoPilot}`);
// console.log(`dumbo.taxi: ${dumbo.taxi}`);
// console.log(`dumbo.taxi(): ${dumbo.taxi()}`);

// console.log(`dumbo.land: ${dumbo}`);
// console.log(`dumbo.land(): ${dumbo.land()}`);
console.log('autopilot test: ', dumbo.autopilot);
console.log('landing: ', dumbo.land());
// console.log(typeof( dumbo.land()));


// const helicoptie = new FlyingVehicle.Helicopter('NC0PT3R', 'yellow');

// console.log({helicoptie});
// console.log(helicoptie.autopilot);



