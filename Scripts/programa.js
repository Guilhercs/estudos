    //Flag
    let tela2 = document.getElementById("Draw");
    let pincel2 = tela2.getContext("2d");

    pincel2.fillStyle = "lightgrey";
    pincel2.fillRect(0, 0, 600, 400);

    pincel2.fillStyle = "blue";
    pincel2.fillRect(0, 0, 200, 400);

    pincel2.fillStyle = "goldenrod";
    pincel2.fillRect(400, 0, 200, 400);

    pincel2.fillStyle = "yellow";
    pincel2.beginPath();
    pincel2.moveTo(300, 200);
    pincel2.lineTo(200, 400);
    pincel2.lineTo(400, 400);
    pincel2.fill();

    pincel2.fillStyle = "blue";
    pincel2.beginPath();
    pincel2.arc(300, 200, 50, 0, 2 * 3.14);
    pincel2.fill();