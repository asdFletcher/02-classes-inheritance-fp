'use strict';
const util = require('util');

// const Vehicle = require('./vehicle-class.js');
// const Vehicle = require('./vehicle-factory.js');
// const Vehicle = require('./vehicle-constructor.js');

// const FlyingVehicle = require('./flying-vehicle-class');
// const FlyingVehicle = require('./flying-vehicle-factory');
// const FlyingVehicle = require('./flying-vehicle-constructor');

const SeaCreature = require('./seacreature-factory.js');

const reddie = new SeaCreature.Lobster('reddie', 'blue', 40);

// console.log({SeaCreature});
// console.log({reddie});

reddie.swim();
reddie.crawl();
reddie.breatheWater();
reddie.sing();

// console.log(reddie.antennae);
// console.log(reddie.name);
// console.log(reddie.age);
// console.log(reddie.color);
// console.log(reddie.legs);
// console.log(reddie.fins);

const fishie = new SeaCreature.Fish('fishie','shiny', 1);
fishie.swim();
// fishie.crawl();
fishie.breatheWater();
fishie.sing();

// console.log(fishie.antennae);
// console.log(fishie.name);
// console.log(fishie.age);
// console.log(fishie.color);
// console.log(fishie.legs);
// console.log(fishie.fins);
