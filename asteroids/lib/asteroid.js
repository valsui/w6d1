const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

function Asteroid(pos_hash){
  let pos = pos_hash.pos || Util.randomPos();
  let vel = pos_hash.vel || Util.randomVec(9);
  let color = pos_hash.color || 'blue';
  let radius = pos_hash.radius || 20;
  const ast_hash = {
    pos: pos,
    vel: vel,
    color: color,
    radius: radius
  };
  MovingObject.call(this, ast_hash);

}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;

