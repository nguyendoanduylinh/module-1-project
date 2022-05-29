const BALL_DIAMETER = 30;

class Ball {
  constructor() {
    this.speed = [2, -2];
    this.position = [
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT - PADDLE_HEIGHT - 10 - BALL_DIAMETER,
    ];
  }

  checkWallCollision() {
    if (
      this.position[0] - BALL_DIAMETER / 2 < 0 ||
      this.position[0] + BALL_DIAMETER / 2 > CANVAS_WIDTH
    ) {
      this.speed[0] = -this.speed[0];
    }
    if (this.position[1] - BALL_DIAMETER / 2 < 0) {
      this.speed[1] = -this.speed[1];
    }
    if (this.position[1] + BALL_DIAMETER / 2 > CANVAS_HEIGHT) {
      document.getElementById("result").innerHTML = "GAME OVER";
      this.speed = [0, 0];
    }
  }

  checkPaddleCollision(paddlePosition) {
    let bottomOfBall = this.position[1] + BALL_DIAMETER / 2;
    let topOfPaddle = CANVAS_HEIGHT - PADDLE_HEIGHT - 10;
    let leftOfPaddle = paddlePosition[0];
    let rightOfPaddle = paddlePosition[0] + PADDLE_WIDTH;

    if (
      bottomOfBall >= topOfPaddle &&
      this.position[0] >= leftOfPaddle &&
      this.position[0] <= rightOfPaddle
    ) {
      this.speed[1] = -this.speed[1];
    }
  }

  update() {
    this.position[0] += this.speed[0];
    this.position[1] += this.speed[1];
  }

  drawBall(ctx) {
    ctx.beginPath();
    ctx.arc(this.position[0], this.position[1], 15, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
  }
}
