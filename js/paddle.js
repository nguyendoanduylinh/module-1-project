class Paddle {
  constructor() {
    this.paddleSpeed = 2;
    this.position = [
      CANVAS_WIDTH / 2 - PADDLE_WIDTH / 2,
      CANVAS_HEIGHT - PADDLE_HEIGHT - 10,
    ];

    this.maxSpeed = 5;
    this.speed = 0;
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  update(deltaTime) {
    this.position[0] += this.speed;
  }

  checkWallCollision(deltaTime) {
    if (this.position[0] < 0) {
      this.position[0] = 0;
    }
    if (this.position[0] + PADDLE_WIDTH > CANVAS_WIDTH) {
      this.position[0] = CANVAS_WIDTH - PADDLE_WIDTH;
    }
  }

  drawPaddle() {
    ctx.beginPath();
    ctx.rect(this.position[0], this.position[1], PADDLE_WIDTH, PADDLE_HEIGHT);
    ctx.stroke();
    ctx.closePath();
  }
}
