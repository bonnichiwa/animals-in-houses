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
  this.callForFood = function() {
    console.log(this.name + " is calling for food");
    console.log(this.greeting);
  }
}


/**
 * Define the Cat Object
 *
 * @params {String} name
 * no @returns
 */
var Cat = function(name) {
    Animal.call(this, name);
    this.name = name;
    this.greeting = 'meow meow';
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;


/**
 * Define the Dog Object
 *
 * @params {String} name
 * no @returns
 */
var Dog = function(name) {
  Animal.call(this, name);
  this.name = name;
  this.greeting = 'ruff ruff';
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;