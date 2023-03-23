const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const dog = new Image();
dog.src = 'dog.png';

let dogX = 100;
let dogY = 500;

let dogSpeed = 5;

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(dog, dogX, dogY);

  dogX += dogSpeed;

  if (dogX > canvas.width) {
    dogX = -100;
  }

  window.requestAnimationFrame(gameLoop);
}



