let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let mover = new Something();

setInterval(animate, 33);

function animate() {
  ctx.fillStyle = "pink";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  mover.move();
  mover.draw();
}

function Something() {
  this.centerX = 50;
  this.centerY = 50;

  this.width = 50;
  this.height = 50;

  this.speed = 6;
  this.angle = Math.random() * Math.PI / 2 + 3 * Math.PI / 2;

  this.move = function() {
    let dx = this.speed * Math.cos(this.angle);
    let dy = this.speed * Math.sin(this.angle);

    let newX = this.centerX + dx;
    let newY = this.centerY + dy;

    if (newX - this.width / 2 < 0) {
      newX = this.width / 2;
      this.angle = Math.PI - this.angle;
    } else if (newX + this.width / 2 > canvas.width) {
      newX = canvas.width - this.width / 2;
      this.angle = Math.PI - this.angle;
    }

    this.centerX = newX;
    this.centerY = newY;
  }

  this.draw = function() {
    ctx.fillStyle = "blue";
    ctx.translate(this.centerX, this.centerY);
    ctx.rotate(this.angle);
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    ctx.restore();
  }
}
