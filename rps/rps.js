import "../styles.scss";
import {performGetRequest, performPostRequest} from "./api.js";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
let text = "Welcome To RPS";

function wipeScreen() {
  ctx.fillStyle="white";
  ctx.fillRect(0,0,WIDTH,HEIGHT);
}

function displayText(text, x, y, fontSize=100) {
  ctx.font = (`${fontSize}px serif`);
  let textWidth = ctx.measureText(text).width;
  ctx.fillStyle = "black";
  ctx.fillText(text, (x-textWidth/2), (y-fontSize/2));
}

function draw(gameState) {
  wipeScreen();
  displayText("Player1",   WIDTH/4, HEIGHT/2 - 200, 50);
  displayText(gameState.player1Move,   WIDTH/4, HEIGHT/2);
  displayText("Player2", 3*WIDTH/4, HEIGHT/2 - 200, 50);
  displayText(gameState.player2Move, 3*WIDTH/4, HEIGHT/2);
  displayText(gameState.winner, WIDTH/2, HEIGHT/2);
}

function playGame(move) {
  //Get backendurl/RPS/random
  // {"move": "rock" || "paper" || "scissors"}
  const computerResponse = performGetRequest("RPS/random");
  
  //Send result to compute
  //POST backendurl/RPS/saveResults
  /* { 
    Player1Move: "rock" || "paper" || "scissors",
    Player2Move: "rock" || "paper" || "scissors"
  } */
  const postPayload = {
    "Player1Move": move,
    "Player2Move": computerResponse.move
  }

  /* { 
    Player1Move: "rock" || "paper" || "scissors",
    Player2Move: "rock" || "paper" || "scissors",
    result: "0 || 1 || 2"
  } */ 
  //Get Calculate outcome
  const gameState = performPostRequest("/RPS/saveResults", postPayload);
  //Display outcome
  draw(gameState);
}

function handleClick(e) {
  let innerText = e.target.id;
  playGame(innerText); 
}

displayText(text, WIDTH/2, HEIGHT/2);

let rock_button = document.getElementById("rock");
let paper_button = document.getElementById("paper");
let scissor_button = document.getElementById("scissors");

console.log(rock_button);

rock_button.addEventListener("click",handleClick);
paper_button.addEventListener("click",handleClick);
scissor_button.addEventListener("click",handleClick);