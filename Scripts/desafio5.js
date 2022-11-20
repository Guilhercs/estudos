let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");
pincel.fillStyle = "lightGrey";
pincel.fillRect(0, 0, 600, 400);

function drawCircle(event) {
    let x = event.pageX - tela.offsetLeft;
    let y = event.pageY - tela.offsetTop;
    let raio = 10;
  pincel.fillStyle = 'blue';
  pincel.beginPath();
  if (event.shiftKey) {
    raio = raio + 20;
  }

  pincel.arc(x, y, raio, 0, 2 * 3.14);
  pincel.fill();
  console.log(`Eixo x: ${x}, eixo y: ${y}`);
}

tela.onclick = drawCircle;
