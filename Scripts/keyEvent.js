const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

let x = 20;
let y = 20;

const left = 37;
const up = 38;
const right = 39;
const down = 40;
const taxa = 10;

function desenhaCirculo(x, y, raio) {
  pincel.fillStyle = "blue";
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function limparTela() {
  pincel.clearRect(0, 0, 600, 400);
}

function atualizaTela() {
  limparTela();
  desenhaCirculo(x, y, 10);
}

atualizaTela();
setInterval(atualizaTela, 20);

function eventReader(event) {
  if (event.keyCode == up) {
    y = y - taxa;
  } else if (event.keyCode == down) {
    y = y + taxa;
  } else if (event.keyCode == left) {
    x = x - taxa;
  } else if (event.keyCode == right) {
    x = x + taxa;
  }
}

document.onkeydown = eventReader;
