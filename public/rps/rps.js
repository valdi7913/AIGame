import "../styles.scss";
import {performGetRequest, performPostRequest} from "./api.js";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const text = "Welcome To RPS";

const BACKGROUND_COLOR = "#2a9d8f";
const TEXT_COLOR = "white";
// const FONT_URL = "https://fonts.googleapis.com/css2?family=Consolas:wght@400&display=swap";
// const Consolas = new FontFace("consolas", FONT_URL);

function wipeScreen(color = "white") {
  ctx.fillStyle=color;
  ctx.fillRect(0,0,WIDTH,HEIGHT);
}

function displayText(text, x, y, fontSize=100, color="white") {
  ctx.font = (`${fontSize}px Consolas, monospace`);
  let textWidth = ctx.measureText(text).width;
  ctx.fillStyle = color;
  ctx.fillText(text, (x-textWidth/2), (y-fontSize/2));
}

function draw(gameState) {

  //Chose display text based on game outcome
  const texts = ["Draw!", "Player 1 Wins!", "Player 2 Wins!"];
  const text = texts[gameState.result]; 

  const numberOfColumns = 9; 
  const numberOfRows = 10;

  const xFromCol = (columnNumber) => columnNumber * WIDTH / numberOfColumns;
  const yFromRow = (rowNumber) => rowNumber * HEIGHT / numberOfRows;

  console.log(gameState)
  wipeScreen(BACKGROUND_COLOR);
  displayText("Player1"               , xFromCol(1.25), yFromRow(4), 50);
  displayText("Player2"               , xFromCol(7.75), yFromRow(4), 50);

  displayText(gameState.player_1_move , xFromCol(1.25), yFromRow(6));
  displayText(text                    , xFromCol(4.5),  yFromRow(6));
  displayText(gameState.player_2_move , xFromCol(7.75), yFromRow(6));
}

async function playGame(move) {
  //Get backendurl/RPS/random
  // {"move": "rock" || "paper" || "scissors"}
  const computerResponse = await performGetRequest("RPS/random");
  
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
  const gameState = await performPostRequest("RPS/save_results", postPayload)
  draw(gameState);
}

function handleClick(e) {
  let innerText = e.target.id;
  playGame(innerText); 
}


function main() {
  let rock_button = document.getElementById("rock");
  let paper_button = document.getElementById("paper");
  let scissor_button = document.getElementById("scissors");


  rock_button.addEventListener("click",handleClick);
  paper_button.addEventListener("click",handleClick);
  scissor_button.addEventListener("click",handleClick);

  wipeScreen(BACKGROUND_COLOR);
  displayText(text, WIDTH/2, HEIGHT/2+50);
}

document.addEventListener("DOMContentLoaded", main);