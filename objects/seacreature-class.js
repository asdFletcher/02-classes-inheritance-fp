'use strict';


class SeaCreature{
  constructor(name, color, age){
    this.name = name;
    this.age = age;
    this.color = color;
    this.taste = 'good';
  }

  swim(){
    return `${this.name}: I'm swimming!`;
  }

  breatheWater(){
    return `${this.name}: Currently breathing water...`;
  }

  sing() {
    return `${this.name}: Under tha sea!`;
  }
}


class Lobster extends SeaCreature{
    
  constructor(name, color, age){
    super(name, color, age);
    this.antennae = 2;
    this.legs = 8;
  }

  crawl() {
    return `${this.name} is crawling along the sea floor`;
  }

}

class Fish extends SeaCreature {
  constructor(name, color, age){
    super(name,color, age);
    this.fins = 3;
  }
}

module.exports = {
  SeaCreature,
  Fish,
  Lobster,
};
