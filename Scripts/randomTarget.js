let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");
let raio = 10;
let xRandom = 0;
let yRandom = 0;

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
  xRandom = positionSort(600);
  yRandom = positionSort(400);
  drawTarget(xRandom, yRandom);
}

function shot(event) {
  let x = event.pageX - tela.offsetLeft;
  let y = event.pageY - tela.offsetTop;

  if (
    x > xRandom - raio &&
    x < xRandom + raio &&
    y > yRandom - raio &&
    y < yRandom + raio
  ) {
    alert("Acertou!");
  }
}

setInterval(clean, 800);

tela.onclick = shot;
