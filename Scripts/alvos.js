let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");

pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

let raio = 10;

function drawCircle(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

drawCircle(300, 200, raio + 20, "red");
drawCircle(300, 200, raio + 10, "white");
drawCircle(300, 200, raio, "red");

function dispara(evento) {
  let x = evento.pageX - tela.offsetLeft;
  let y = evento.pageY - tela.offsetTop;

  if (x > 300 - raio && x < 300 + raio && y > 200 - raio && y < 200 + raio) {
    alert("Acertou");
  }
}

tela.onclick = dispara;
