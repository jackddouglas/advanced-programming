let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

var spritesheetDown = new Image();
var spritesheetLeft = new Image();
var spritesheetRight = new Image();
var spritesheetUp = new Image();

spritesheetDown.src = "./spritesheetCoolRunnerDown.png";
spritesheetLeft.src = "./spritesheetCoolRunnerLeft.png";
spritesheetRight.src = "./spritesheetCoolRunnerRight.png";
spritesheetUp.src = "./spritesheetCoolRunnerUp.png";

var numbImages = 6;
var currImage = 0;
var numbRows = 1, numbCols = 6;
var imageWidth = 120, imageHeight = 120;

let TOP = 0;
let RIGHT = 1;
let BOTTOM = 2;
let LEFT = 3;
let currentState = TOP;

let speed = 4;
let xPos = 0;
let yPos = 0;

let frameCount = 0;
setInterval(animate, 33);

function animate() {
  frameCount++;
  clearBackground();
  drawSprite();
}

function clearBackground() {
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSprite() {
  var currCol = currImage % numbCols;

  switch (currentState) {
    case TOP:
      c.drawImage(spritesheetRight, currCol * imageWidth, 0, imageWidth, imageHeight, xPos, yPos, imageWidth, imageHeight);
      xPos += speed;
      break;

    case RIGHT:
      c.drawImage(spritesheetDown, 0, currCol * imageHeight, imageWidth, imageHeight, xPos, yPos, imageWidth, imageHeight);
      yPos += speed;
      break;

    case BOTTOM:
      c.drawImage(spritesheetLeft, currCol * imageWidth, 0, imageWidth, imageHeight, xPos, yPos, imageWidth, imageHeight);
      xPos -= speed;
      break;

    case LEFT:
      c.drawImage(spritesheetUp, 0, currCol * imageHeight, imageWidth, imageHeight, xPos, yPos, imageWidth, imageHeight);
      yPos -= speed;
      break;

    default:
      break;
  }

  if (frameCount % 3 == 0) {
    currImage++;
    currImage %= numbImages;
  }

  if (xPos > 500 - imageWidth) {
    xPos = 500 - imageWidth;
    currentState = RIGHT;
  } else if (yPos > 500 - imageHeight) {
    yPos = 500 - imageHeight;
    currentState = BOTTOM;
  } else if (xPos < 0) {
    xPos = 0;
    currentState = LEFT;
  } else if (yPos < 0) {
    yPos = 0;
    currentState = TOP;
  }

  console.log("x pos: " + xPos);
  console.log("y pos: " + yPos);
}
