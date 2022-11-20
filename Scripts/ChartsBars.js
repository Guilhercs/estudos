function desenhaRetangulo(x, y, largura, altura, cor) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle=cor;
    pincel.fillRect(x,y, largura, altura);
    pincel.strokeStyle='black';
    pincel.strokeRect(x,y, largura, altura);
}

function desenhaTexto(x, y, texto) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.font='15px Georgia';
    pincel.fillStyle='black';
    pincel.fillText(texto, x, y);    
}
