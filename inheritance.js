Function.prototype.inherits = function (parent) {
  // function Surrogate () {}
  // Surrogate.prototype = parent.prototype;
  // this.prototype = new Surrogate();
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
  
};

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);


MovingObject.prototype.sayHello = function () {
  console.log('sup');
};

Ship.prototype.explode = function () {
  console.log("i'm exploding");
};

Asteroid.prototype.die = function () {
  console.log("im ded");
};