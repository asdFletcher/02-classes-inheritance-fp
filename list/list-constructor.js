'use strict';

let util = require('util');

function List() {
  this.length = 0;
  this.data = {};
}

// Add item to the end of the list
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

// Remove an item from the end of the list and return it's value
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

List.prototype.shift = function() {
  if (this.length === 0) {
    return;
  }

  for (let i = 0; i < this.length-1; i++ ) {
    this.data[i] = this.data[i+1];
  }
  
  delete this.data[this.length-1];
  this.length--;
};

List.prototype.unshift = function(input) {

  let temp = [];

  for (let i = 0; i < this.length; i++){
    temp[i] = this.data[i];
  }

  this.data = {};
  this.length = 0;

  for (let i = 0; i < input.length; i++){
    this.data[i] = input[i];
    this.length++;
  }
  
  for (let i = 0; i < temp.length; i++){
    this.data[this.length] = temp[i];
    this.length++;
  }
};

// .splice(start[, deleteCount[, item1[, item2[, ...]]]])
// months.splice(4, 1, 'May');
// replaces 1 element at 4th index






module.exports = List;
