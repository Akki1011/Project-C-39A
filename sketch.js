var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var players;
var player1image, player2image;
var player1, player2;
var trackimage;
var endimage;
function preload(){
  player1image = loadImage("rabbit.png");
  player2image = loadImage("turtle.png")
  backgroundImage = loadImage("ground.png");
  trackimage = loadImage("bg.jpg");
  endimage = loadImage("gameover.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}


function draw(){

  background(backgroundImage);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
