let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgrey';
pincel.fillRect(0, 0, 600, 400);

function showAlert(event) {
    alert ('Click');
    console.log(event);
}

tela.onclick = showAlert;