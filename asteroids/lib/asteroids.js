
const Asteroid = require('./asteroid.js');
const Util = require('./util.js');
const MovingObject = require('./moving_object.js');
const Game = require('./game.js');
const GameView = require('./game_view.js');

window.MovingObject = MovingObject;
window.Util = Util;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;


console.log("Webpack is working!");