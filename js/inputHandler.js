class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", moveFunction);
    function moveFunction(evt) {
      switch (evt.keyCode) {
        case 37:
          paddle.moveLeft();
          break;
        case 39:
          paddle.moveRight();
          break;
      }
    }
    document.addEventListener("keyup", stopFunction);
    function stopFunction(evt) {
      switch (evt.keyCode) {
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;
        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    }
  }
}
