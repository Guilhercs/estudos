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
