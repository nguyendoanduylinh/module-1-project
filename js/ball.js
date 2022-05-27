const BALL_DIAMETER = 30;
const BALL_START = [100, 100];
let ballCurrent = BALL_START;
let ballX;
let ballY;

class Ball {
  constructor() {
    this.ballX = ballX;
    this.ballY = ballY;
  }

  checkWallCollision() {
    ballX = 2;
    ballY = 2;
  }

  changeBall() {
    ballCurrent[0] += ballX;
    ballCurrent[1] += ballY;
  }

  drawBall() {
    ctx.arc(ballCurrent[0], ballCurrent[1], 15, 0, 2 * Math.PI);
    ctx.stroke();
  }
}
