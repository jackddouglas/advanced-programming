let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let bouncyObject = new MovingObject();

let walls = [];
walls.push(new Wall(200, 200, 100, 100, "pink"));
walls.push(new Wall(100, 100, 200, 10, "red"));
walls.push(new Wall(400, 150, 40, 100, "yellow"));

setInterval(animate, 33);
function animate() {
  ctx.fillStyle = "purple";
  ctx.fillRect(0, 0, canvas.width,
    canvas.height);

  bouncyObject.move();
  bouncyObject.draw();

  for (let w of walls) w.draw();
}

function MovingObject() {
  this.x = 0;
  this.y = 0;
  this.width = 50;
  this.height = 50;
  this.color = "blue";
  this.dx = Math.random() * 4;
  this.dy = Math.random() * 4;

  this.draw = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y,
      this.width, this.height);
  }

  this.move = function() {
    let newX = this.x + this.dx;
    let newY = this.y + this.dy;

    if (newX < 0) {
      newX = 0;
      this.dx = Math.random() * 4;
    } else if (newX + this.width > canvas.width) {
      newX = canvas.width - this.width;
      this.dx = - Math.random() * 4;
    } else {
      for (let w of walls) {
        if (detectCollision(newX, this.y, this.width, this.height, w.x, w.y, w.width, w.height)) {
          newX = this.x;
          this.dx = - this.dx;
        }
      }
    }

    if (newY < 0) {
      newY = 0;
      this.dy = Math.random() * 4;
    } else if (newY + this.height > canvas.height) {
      newY = canvas.height - this.height;
      this.dy = - Math.random() * 4;
    } else {
      for (let w of walls) {
        if (detectCollision(this.x, newY, this.width, this.height, w.x, w.y, w.width, w.height)) {
          newY = this.y;
          this.dy = - this.dy;
        }
      }
    }

    this.x = newX;
    this.y = newY;
  }
}

function Wall(x, y, w, h, color) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.color = color;

  this.draw = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y,
      this.width, this.height);
  }
}

function detectCollision(x1, y1, w1, h1, x2, y2, w2, h2) {
  return (x1 + w1 > x2 &&
    x2 + w2 > x1 &&
    y1 + h1 > y2 &&
    y2 + h2 > y1);
}
