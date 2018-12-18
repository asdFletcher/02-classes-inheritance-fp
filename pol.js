'use strict';

const pol = require('./pol.js');
const http = require('http');

let proofoflife = module.exports = {};

proofoflife.isAlive = function(dead) {
  return !(!!dead);
};


