'use strict';

const List = require('./list-constructor.js');

// let last = stuff.pop();

let stuff = new List();
stuff.push('a');
stuff.push('b');
stuff.push('c');

// console.log({stuff});
// stuff.shift();
// console.log({stuff});

stuff.unshift(['x', 'y', 'z']);
console.log({stuff});
console.log(stuff.length);
