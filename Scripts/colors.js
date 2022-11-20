let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");
let desenha = false;
let paleta = document.querySelector("input")
pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400);


function drawCircle(event) {
  if (desenha) {
    let x = event.pageX - tela.offsetLeft;
    let y = event.pageY - tela.offsetTop;
    pincel.fillStyle = paleta.value;
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();
  }
}
tela.onmousemove = drawCircle;

function habilitaDesenhar() {
  desenha = true;
}

function desabilitaDesenhar() {
  desenha = false;
}
tela.onmousedown = habilitaDesenhar;
tela.onmouseup = desabilitaDesenhar;
