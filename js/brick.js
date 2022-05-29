class Brick {
  constructor(position) {
    this.position = position;

    this.width = 90;
    this.height = 30;

    this.isCollied = false;
  }

  checkBallCollision(ballPosition, ballSpeed) {
    let topOfBall = ballPosition[1] - BALL_DIAMETER / 2;
    let bottomOfBall = ballPosition[1] + BALL_DIAMETER / 2;
    let leftOfBall = ballPosition[0] - BALL_DIAMETER / 2;
    let rightOfBall = ballPosition[0] + BALL_DIAMETER / 2;

    let topOfBrick = this.position[1];
    let bottomOfBrick = this.position[1] + this.height;
    let leftOfBrick = this.position[0];
    let rightOfBrick = this.position[0] + this.width;

    if (
      (topOfBall <= bottomOfBrick &&
        bottomOfBall >= bottomOfBrick + BALL_DIAMETER &&
        ballPosition[0] >= leftOfBrick &&
        ballPosition[0] <= rightOfBrick) ||
      (bottomOfBall <= topOfBrick &&
        topOfBall <= topOfBrick - BALL_DIAMETER &&
        ballPosition[0] >= leftOfBrick &&
        ballPosition[0] <= rightOfBrick)
    ) {
      ballSpeed[1] = -ballSpeed[1];
      this.isCollied = true;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.position[0], this.position[1], this.width, this.height);
    ctx.stroke();
    ctx.closePath();
  }
}
