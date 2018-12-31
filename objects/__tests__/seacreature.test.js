'use strict';

// let SeaCreature = require('./../seacreature-factory.js');
let SeaCreature = require('./../seacreature-constructor.js');
// let SeaCreature = require('./../seacreature-factory.js');



describe ('seacreature Fish', () =>{
  it('can sing', () => {
    let fish = new SeaCreature.Fish('fishie', 'red', 365);

    let result = fish.sing();
    let expected = 'fishie: Under tha sea!';

    expect(result).toEqual(expected);
  });

  it('can breathe under water', () => {
    let fish = new SeaCreature.Fish('fishie', 'red', 365);

    let result = fish.breatheWater();
    let expected = 'fishie: Currently breathing water...';

    expect(result).toEqual(expected);
  });

  it('can swim', () => {
    let fish = new SeaCreature.Fish('fishie', 'red', 365);

    let result = fish.swim();
    let expected = 'fishie: I\'m swimming!';

    expect(result).toEqual(expected);
  });

  it('has the correct attributes', () => {
    let fish = new SeaCreature.Fish('fishie', 'red', 365);

    expect(fish.name).toEqual('fishie');
    expect(fish.color).toEqual('red');
    expect(fish.age).toEqual(365);
    expect(fish.fins).toEqual(3);
    expect(fish.taste).toEqual('good');
    expect(fish.legs).toBeUndefined();
  });
});


describe ('seacreature Lobster', () =>{
  it('can sing', () => {
    let myLobster = new SeaCreature.Lobster('lobbie', 'blue', 100);

    let result = myLobster.sing();
    let expected = 'lobbie: Under tha sea!';

    expect(result).toEqual(expected);
  });

  it('can breathe under water', () => {
    let myLobster = new SeaCreature.Lobster('lobbie', 'blue', 100);

    let result = myLobster.breatheWater();
    let expected = 'lobbie: Currently breathing water...';

    expect(result).toEqual(expected);
  });

  it('can swim', () => {
    let myLobster = new SeaCreature.Lobster('lobbie', 'blue', 100);

    let result = myLobster.swim();
    let expected = 'lobbie: I\'m swimming!';

    expect(result).toEqual(expected);
  });

  it('can crawl', () => {
    let myLobster = new SeaCreature.Lobster('lobbie', 'blue', 100);

    let result = myLobster.crawl();
    let expected = 'lobbie is crawling along the sea floor';

    expect(result).toEqual(expected);
  });

  it('has the correct attributes', () => {
    let myLobster = new SeaCreature.Lobster('lobbie', 'blue', 100);

    expect(myLobster.name).toEqual('lobbie');
    expect(myLobster.color).toEqual('blue');
    expect(myLobster.age).toEqual(100);
    expect(myLobster.fins).toBeUndefined();
    expect(myLobster.taste).toEqual('good');
    expect(myLobster.legs).toEqual(8);
  });
});

