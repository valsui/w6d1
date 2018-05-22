const Asteroid = require('./asteroid.js');
const Util = require('./util.js');


function Game(dimX, dimY, numAsteroids){
  this.dimX = dimX;
  this.dimY = dimY;
  this.numAsteroids = numAsteroids;
  
  
  this.asteroids = [];
  this.addAsteroids();
}


Game.prototype.addAsteroids = function () {
  for (let i = 0; i < this.numAsteroids; i++) {  
    let a = new Asteroid({});
    this.asteroids.push(a);
  }
};


Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, 999, 999);
  this.asteroids.forEach((ast) => ast.draw(ctx));
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach((ast) => ast.move());
};

module.exports = Game;

