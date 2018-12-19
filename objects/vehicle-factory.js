'use strict';

function Car(name) {
  let car = Object.assign(
    {},
    Vehicle(),
    {name},
    {wheels: 4}
  );
  return car;
}

function Motorcycle(name) {
  let motorcycle = Object.assign(
    {},
    Vehicle(),
    {name},
    {wheels: 2},
    {wheelie}
  );

  function wheelie() {
    return 'Wheee!';
  }

  return motorcycle;
}

const Vehicle = () => ({
  drive: () => 'Moving Forward',
  stop: () => 'Stopping',
});



module.exports = {Vehicle, Car, Motorcycle};


