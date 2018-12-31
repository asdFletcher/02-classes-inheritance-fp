![CF](http://i.imgur.com/7v5ASc8.png) LAB: Async
=================================================

## Lab 03

### Author: Fletcher LaRue

### Links and Resources

[![Build Status](https://www.travis-ci.com/asdFletcher/02-classes-inheritance-fp.svg?branch=master)](https://www.travis-ci.com/asdFletcher/02-classes-inheritance-fp)

* [repo](https://github.com/asdFletcher/03-async)
* [travis](https://www.travis-ci.com/asdFletcher/02-classes-inheritance-fp)


[//]: # (heroku link: https://lab02-401.herokuapp.com/)

---
### Modules
#### `list-constructor.js`s
#### `vehicle-class.js`
#### `vehicle-constructor.js`
#### `vehicle-factory.js`
#### `flying-vehicle-class.js`
#### `flying-vehicle-constructor.js`
#### `flying-vehicle-factory.js`

#### `list-constructor.js`
#### `list-class.js`

---
##### Exported Values and Methods for the following modules:
- #### `vehicle-class.js`
- #### `vehicle-constructor.js`
- #### `vehicle-factory.js`


* Vehicle
    * Methods:
        * `constructor(name, wheels)`
        * `drive()`
        * `stop()`
    * Attributes:
        * `name`
        * `wheels`

The following objects extend the Vehicle object:
* Car
    * Methods:
        * constructor(name)
        * `drive()`
        * `stop()`
    * Attributes:
        * `name`
        * `wheels: 4`

* Motorcycle
    * Methods:
        * `constructor(name)`
        * `drive()`
        * `stop()`
        * `wheelie()`
    * Attributes:
        * `name`
        * `wheels: 2`

---


##### Using the following modules:
- #### `vehicle-class.js`
- #### `vehicle-constructor.js`
- #### `vehicle-factory.js`


Car Methods:
* `constructor(name)`
    * Takes a name and creates a Car object with that name
    * Requires tha a name be passed in
    * Automatically sets `wheels: 4`
* `drive()`
    * call the drive method to move the car
    * accepts no arguments
* `stop()`
    * call the drive method to stop the car
    * accepts no arguments


Motorcycle:
Identical to the Car object except that it has a `wheelie` method
* `constructor(name)`
    * Takes a name and creates a Car object with that name
    * Requires tha a name be passed in
    * Automatically sets `wheels: 4`
* `drive()`
    * call this method to move the car
    * accepts no arguments
* `stop()`
    * call this method to stop the car
    * accepts no arguments
* `wheelie()`
    * call this method to do a wheelie
    * accepts no arguments

---

---
##### Exported Values and Methods for the following modules:
- #### `list-constructor.js`
- #### `list-class.js`

`list-constructor.js` and `list-class.js` have duplicate functionality and are simply implemented in two different ways: using constructor functions and using classes.
* List
    * Methods:
        * `constructor()`
        * `push(item)`
        * `pop()`
        * `shift()`
        * `unshift(item)`
        * `splice(start,deleteCount [,item1 [,item2]] ...)`
        * `slice(begin, end)`
    * Attributes:
        * `data`
        * `length`

##### Using the following modules:
- #### `list-constructor.js`
- #### `list-class.js`

Car Methods:
* `constructor()`
    * The constructor accepts no arguments
    * It creats an empty list
    * With `data = {}` and `length = 0`;

* `push(item)`
    * adds the item to the end of the list
    * increments the length by 1
    * accepts 1 argument

* `pop()`
    * remove the end item from the list
    * decrements the length by 1
    * accepts no arguments
    * returns the removed item

* `shift()`
    * remove the first item from the list
    * decrements the length by 1
    * accepts no arguments

* `unshift(item)`
    * adds an element to the beginning of the list
    * increments the length by 1
    * accepts 1 argument

* `splice( [start [,deleteCount [,item1 [,item2]]]] )`
    * accepts 0 , 1 , 2 or more arguments
    * changes the list by deleting the number of elements specified by `deleteCount` starting at the index `start`.
    * any additional parameters passed in will be added to the list starting at the `start` index
    * shifted elements are shifted accordingly
    * length is adjusted accordingly
    * See examples below:

```JavaScript
let myList = new List();
myList.push('a');
myList.push('b');
myList.push('c');
// myList: length: 3 , data: {'0': 'a', '1': 'b','2': 'c'}
stuff.splice(1, 1, 'seven');
// myList: length: 3 , data: {'0': 'a', '1': 'seven','2': 'c'}
```

```JavaScript
let myList = new List();
myList.push('a');
myList.push('b');
myList.push('c');
// myList: length: 3 , data: {'0': 'a', '1': 'b','2': 'c'}
stuff.splice(1, 0, 'seven');
// myList: length: 4 , data: {'0': 'a', '1': 'seven','2': 'b', '3': 'c'}
```

```JavaScript
let myList = new List();
myList.push('a');
myList.push('b');
myList.push('c');
// myList: length: 3 , data: {'0': 'a', '1': 'b','2': 'c'}
myList.splice();
// myList: length: 3 , data: {'0': 'a', '1': 'b','2': 'c'}
```

* `slice()`
    * returns an array of the list elements captured between `begin` and `end` list indecies
    * accepts 0, 1 , or 2 arguments
    * If no arguments are supplied the whole list is returned
    * if 1 argument is supplied, the `end` is assumed to be the end of the array
    * See example below:

```JavaScript
let myList = new List();
myList.push('a');
myList.push('b');
myList.push('c');

let result = myList.slice(1,2);
// result: ['b','c']
```



### Testing

TODO: fill out testing instructions
TODO: fill out testing methodology

---

### 


