let ball1 = new Ball();

function moveBall() {
  ball1.checkWallCollision();
  ball1.changeBall();
  ball1.drawBall();
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  requestAnimationFrame(moveBall);
}

window.onload = moveBall();
