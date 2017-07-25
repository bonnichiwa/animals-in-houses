/**
 * Define the House object
 *
 * no @returns
 */
var House = function() {
  this.animals = [];
}

/**
 * When the door opens, all animals in the house will call for food
 *
 * no @returns
 */
House.prototype.openDoor = function() {
  for (var i = 0; i < this.animals.length; i++) {
    this.animals[i].callForFood();    
  }
}

/**
 * Only animals can we adopted
 *
 * @param {Animal} animal
 * no @returns
 */
House.prototype.adoptAnAnimal = function(animal) {
  if(animal instanceof Animal) {
    console.log("Welcome to the family, " + animal.name + " !");
    this.animals.push(animal);
  } else {
    console.log("You can only adopt animals.");
  }
}

/**
 * Define the Animal Object
 *
 * @params {String} name
 * no @returns
 */
var Animal = function(name) {
  this.name = name;
}

/**
 * The Animal can call for food
 *
 * no @returns
 */
Animal.prototype.callForFood = function() {
  console.log(this.name + " is calling for food!");
}

/**
 * Define the Cat Object
 *
 * @params {String} name
 * no @returns
 */
var Cat = function(name) {
  Animal.call(this, name);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

/**
 * Add additional action to Cat's callForFood function
 *
 * no @returns
 */
Cat.prototype.callForFood = function() {
   Animal.prototype.callForFood.call(this);
   console.log("Meow meow");
}

/**
 * Define the Dog Object
 *
 * @params {String} name
 * no @returns
 */
var Dog = function(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

/**
 * Add additional action to Dog's callForFood function
 *
 * no @returns
 */
Dog.prototype.callForFood = function() {
  Animal.prototype.callForFood.call(this);
  console.log("Ruff ruff");
}