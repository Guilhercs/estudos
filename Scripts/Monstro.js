    //monster
    let tela3 = document.getElementById("Monster");
    let pincel3 = tela3.getContext("2d");

    // cabeça
    pincel3.fillStyle = "darkgreen";
    pincel3.fillRect(200, 50, 350, 300);

    // olhos
    pincel3.fillStyle = "black";
    pincel3.fillRect(250, 110, 90, 90);
    pincel3.fillRect(410, 110, 90, 90);

    // nariz
    pincel3.fillRect(340, 200, 70, 100);

    // boca ou barba
    pincel3.fillRect(300, 240, 40, 110);
    pincel3.fillRect(410, 240, 40, 110);