var database;
var playerCount;
var gameState = 0;
var form, player, game;
var allPlayers

function setup() {
    createCanvas(800, 400)

    database = firebase.database()
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
if(playerCount===2){
game.update(1)
}
if(gameState ===1){
    clear();
    game.play()
}


}






