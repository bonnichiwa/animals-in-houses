/**
 * Define the House object
 * @returns {Array} 
 */
var House = function() {
  this.animals = [];
}

/**
 * When the door opens, all animals in the house will call for food
 * no @returns
 */
House.prototype.openDoor = function() {
  for (var i = 0; i < this.animals.length; i++) {
    this.animals[i].callForFood();    
  }
}

/**
 * Only animals can we adopted
 * no @returns
 */
House.prototype.adoptAnAnimal = function(animal) {
  if(animal.isAnimal) {
    console.log("Welcome to the family, " + animal.name + " !");
    this.animals.push(animal);
  } else {
    console.log("You can only adopt animals.");
  }
}


/**
 * Define the Animal Object
 * @params {String} name
 * @returns {Boolean} isAnimal
 */

var Animal = function(name) {
  this.name = name;
  this.isAnimal = true;
}


/**
 * Define the Cat Object
 * @params {String} name
 */

var Cat = function(name) {
  Animal.call(this, name);
  this.name = name;
  this.type = 'cat';
}

/**
 * What the cat says when it calls for food
 * no @returns
 */

Cat.prototype.callForFood = function() {
  console.log(this.name + " is calling for food");
  console.log("Meow meow");
}


/**
 * Define the Dog Object
 * @params {string} name
 * no @returns
 */

var Dog = function(name) {
  Animal.call(this, name);
  this.name = name;
  this.type = 'dog';
}

/**
 * What the dog says when it calls for food
 * no @returns
 */

Dog.prototype.callForFood = function() {
  console.log(this.name + " is calling for food");
  console.log("Ruff ruff");
}