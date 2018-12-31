'use strict';


const SeaCreature = (name, color, age) => ({
  swim: () => `${name}: I\'m swimming!`,
  breatheWater: () => `${name}: Currently breathing water...`,
  sing: () => `${name}: Under tha sea!`,

  taste: 'good',
  name: name,
  color: color,
  age: age,

});

function Lobster(name, color, age) {
  const crawl = () => {
    return `${name} is crawling along the sea floor`;
  };

  let antennae = 2;
  let legs = 8;

  let Lobster = Object.assign(
    {},
    SeaCreature(name, color, age),
    {crawl},
    {legs},
    {antennae}
  );
  return Lobster;
}

function Fish(name, color, age){
  let fins = 3;

  let Fish = Object.assign(
    {},
    SeaCreature(name, color, age),
    {fins}
  );

  return Fish;
}

module.exports = {
  SeaCreature,
  Lobster,
  Fish,
};