let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");
let raio = 10;
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function drawCircle(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function clearWindow() {
  pincel.clearRect(0, 0, 600, 400);
  pincel.fillStyle = "lightgray";
  pincel.fillRect(0, 0, 600, 400);
}

function drawTarget(x, y) {
  drawCircle(x, y, raio + 20, "red");
  drawCircle(x, y, raio + 10, "white");
  drawCircle(x, y, raio, "red");
}

function positionSort(max) {
  return Math.floor(Math.random() * max);
}

function clean() {
  clearWindow();
  let xRandom = positionSort(600);
  let yRandom = positionSort(400);
  drawTarget(xRandom, yRandom);
}

setInterval(clean, 800);
