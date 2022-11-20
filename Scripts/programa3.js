let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgrey';
pincel.fillRect(0, 0, 600, 400);

function drawCircle(event) {
    let x = event.pageX -tela.offsetLeft;
    let y = event.pageY; -tela.offsetTop;
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2*3.14)
    pincel.fill()
    console.log(`Eixo x: ${x}, eixo y: ${y}`);

}

tela.onclick = drawCircle;