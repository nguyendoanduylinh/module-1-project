//BALL
const ball1 = new Ball();
const paddle1 = new Paddle();

new InputHandler(paddle1);

function updateBall() {
  ball1.checkWallCollision();
  ball1.checkPaddleCollision(paddle1.position);
  ball1.update();
  ball1.drawBall(ctx);
}

function updatePaddle(deltaTime) {
  paddle1.checkWallCollision();
  paddle1.update(deltaTime);
  paddle1.drawPaddle(ctx);
}

let bricks = [];

for (let i = 0, y = 20; i <= 3; i++) {
  for (let j = 0; j <= 6; j++) {
    bricks.push(new Brick([25 + j * 110, y]));
  }
  y += 50;
}

let ballPosition = ball1.position;
let ballSpeed = ball1.speed;

function checkBallBrickCollision(ballPosition, ballSpeed) {
  bricks.forEach((brick) => {
    brick.checkBallCollision(ballPosition, ballSpeed);
  });

  bricks = bricks.filter((brick) => !brick.isCollied);
}

// function deleteBrick(ballPosition, ballSpeed) {
//   for (let i = 0; i < 28; i++) {
//     checkBallBrickCollision(ballPosition, ballSpeed);
//   }
// }

function updateBrick(ctx) {
  bricks.forEach((brick) => {
    brick.draw(ctx);
  });
}

let lastTime = 0;

function startGame(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  updateBall();
  updatePaddle(deltaTime);
  checkBallBrickCollision(ballPosition, ballSpeed);
  updateBrick(ctx);
  requestAnimationFrame(startGame);
}

requestAnimationFrame(startGame);
