//Squads

function createSquad(x, y, color) {
  let tela = document.querySelector("canvas");
  let pincel = tela.getContext("2d");

  pincel.fillStyle = color;
  pincel.fillRect(x, y, 50, 50);
  pincel.fillStroke = "black";
  pincel.strokeRect(x, y, 50, 50);
}

let x = 0;
while (x < 600) {
  createSquad(x, 0, "yellow");
  createSquad(x, 50, "grey");
  createSquad(x, 100, "goldenrod");
  x = x + 50;
}

//flower
var tela = document.getElementById("flor");
var pincel = tela.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * 3.14);
  pincel.fill();
}

desenhaCirculo(300, 200, 10, 'red');
desenhaCirculo(300, 180, 10, 'yellow');
desenhaCirculo(300, 220, 10, 'blue');
desenhaCirculo(280, 200, 10, 'orange');
desenhaCirculo(320, 200, 10, 'black');

// pincel.font='20px Georgia';
// pincel.fillStyle='black';
// pincel.fillText("Qual é a fração?", 50, 30);

