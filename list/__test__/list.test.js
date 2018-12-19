'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');


describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('shifts items off the front', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');

    stuff.shift();
    expect(stuff.length).toEqual(3);
    expect(stuff.data).toEqual({0:'b', 1:'c', 2:'d'});
  });

  it('unshifts items to the front', () => {
    let stuff = new List();
    stuff.data = { '0': 'a', '1': 'b', '2': 'c' };
    stuff.length = 3;

    stuff.unshift(['x', 'y', 'z']);
    
    expect(stuff.length).toEqual(6);
    expect(stuff.data).toEqual({0:'x', 1:'y', 2:'z', 3:'a', 4:'b', 5:'c'});
  });

});
