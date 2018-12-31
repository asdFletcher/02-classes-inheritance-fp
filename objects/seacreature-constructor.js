'use strict';

const SeaCreature = function(name,color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
  this.taste = 'good';
};

SeaCreature.prototype.swim = function() {
  return `${this.name}: I'm swimming!`;
};

SeaCreature.prototype.breatheWater = function() {
  return `${this.name}: Currently breathing water...`;
};

SeaCreature.prototype.sing = function() {
  return `${this.name}: Under tha sea!`;
};


const Lobster = function(name,color,age){
  SeaCreature.call(this, name,color,age);
  this.antennae = 2;
  this.legs = 8;
};

Lobster.prototype = new SeaCreature();

Lobster.prototype.crawl = function(){
  return `${this.name} is crawling along the sea floor`;
};

const Fish = function(name, color, age){
  SeaCreature.call(this, name, color, age);
  this.fins = 3;
};

Fish.prototype = new SeaCreature();

module.exports = {
  SeaCreature,
  Lobster,
  Fish,
};
