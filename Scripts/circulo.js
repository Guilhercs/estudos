let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function drawnCircle(x, y, raio) {
  pincel.fillStyle = "blue";
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function clearDrawn() {
  pincel.clearRect(0, 0, 600, 400);
}
let x = 20;
function update() {
  clearDrawn();
  drawnCircle(x, 20, 10);
  x++;
}
setInterval(update, 1);
