let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

let myHero = new Hero();

setInterval(animate, 33);

function animate() {
  clearBackground();
  myHero.shamble();
  myHero.draw();
}

function clearBackground() {
  ctx.fillStyle = "cyan";
  ctx.fillRect(0, 0, c.width, c.height);
}

function Hero() {
  this.x = 0;
  this.y = 0;
  this.speed = 2;
  this.width = 120;
  this.height = 120;

  this.rightSheet = new Image();
  this.rightSheet.src = "right.png";
  this.leftSheet = new Image();
  this.leftSheet.src = "left.png";
  this.upSheet = new Image();
  this.upSheet.src = "up.png";
  this.downSheet = new Image();
  this.downSheet.src = "down.png";

  this.currentSheet = this.rightSheet;

  this.numbImages = 6;
  this.currImage = 0;
  this.imageWidth = 120;
  this.imageHeight = 120;

  this.goingUp = false;
  this.goingDown = false;
  this.goingRight = false;
  this.goingLeft = false;

  this.goLeft = function() {
    this.stopAll();
    this.goingLeft = true;
    this.currentSheet = this.leftSheet;
    this.currImage = 0;
  }

  this.goRight = function() {
    this.stopAll();
    this.goingRight = true;
    this.currentSheet = this.rightSheet;
    this.currImage = 0;
  }

  this.goUp = function() {
    this.stopAll();
    this.goingUp = true;
    this.currentSheet = this.upSheet;
    this.currImage = 0;
  }

  this.goDown = function() {
    this.stopAll();
    this.goingDown = true;
    this.currentSheet = this.downSheet;
    this.currImage = 0;
  }

  this.stopAll = function() {
    this.goingUp = false;
    this.goingDown = false;
    this.goingRight = false;
    this.goingLeft = false;
  }

  this.shamble = function() {
    if (this.goingUp) {
      this.y -= this.speed;
    } else if (this.goingDown) {
      this.y += this.speed;
    } else if (this.goingRight) {
      this.x += this.speed;
    } else if (this.goingLeft) {
      this.x -= this.speed;
    }
  }

  this.draw = function() {
    var ssX = 0, ssY = 0;

    if (this.goingRight) ssX = this.currImage * this.imageWidth;
    else if (this.goingLeft) ssX = this.leftSheet.width - (this.currImage + 1) * this.imageWidth;
    else if (this.goingUp) ssY = this.upSheet.height - (this.currImage + 1) * this.imageHeight;
    else if (this.goingDown) ssY = this.currImage * this.imageHeight;

    ctx.drawImage(this.currentSheet, ssX, ssY, this.imageWidth, this.imageHeight, this.x, this.y, this.imageWidth, this.imageHeight);
    this.currImage++;
    this.currImage %= this.numbImages;

    // ctx.fillStyle = "blue";
    // ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function handleKeyDown(evt) {
  if (evt.key == 'w') {
    myHero.goingUp = true;
  } else if (evt.key == 'a') {
    myHero.goingLeft = true;
  } else if (evt.key == 's') {
    myHero.goingDown = true;
  } else if (evt.key == 'd') {
    myHero.goingRight = true;
  }
}

function handleKeyUp(evt) {
  if (evt.key == 'w') {
    myHero.goingUp = false;
  } else if (evt.key == 'a') {
    myHero.goingLeft = false;
  } else if (evt.key == 's') {
    myHero.goingDown = false;
  } else if (evt.key == 'd') {
    myHero.goingRight = false;
  }
}
