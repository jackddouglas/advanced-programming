let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

var earth = new Image()
earth.src = "./earth-spritesheet.png";

var numImages = 256;
var currImage = 0;
var numRows = 16, numCols = 16;
var imageWidth = 64, imageHeight = 64;

setInterval(animate, 33);

function animate() {
  clearBackground();
  drawSprite();
}

function clearBackground() {
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSprite() {
  var currRow = Math.floor(currImage / numCols);
  var currCol = currImage % numCols;
  c.drawImage(earth, currCol * imageWidth, currRow * imageHeight, imageWidth, imageHeight, 0, 0, imageWidth * 1.5, imageHeight * 1.5);
  currImage++;
  currImage %= numImages;
}
