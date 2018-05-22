const Game = require('./game.js');


function GameView(game, drawing) {
  this.game = game;
  this.ctx = drawing;
  
  
}

GameView.prototype.start = function () {
  setInterval(function () {
    Game.draw.call(this.game, ctx);
    Game.moveObjects.call(this.game, ctx);
  }, 200);
};

module.exports = GameView;