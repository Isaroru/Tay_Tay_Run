
let tayinicio;
let tay1;
let llave;
let cd;
let tay2;
let tay3;
let tay4;
let tay5;
let kanye;
let fondo1;
let inst1;

function preload() {
  tayinicio = loadImage('recursos/inicio.gif');
  tay1 = loadImage('recursos/tay1.png');
  kanye = loadImage('recursos/kanye.png');
  fondo1 = loadImage('recursos/fondo.png');
  inst1 = loadImage('recursos/inst1.png');
  llave = loadImage('recursos/llave.png');
  cd = loadImage('recursos/cd.png');
}

let levelA;
let taylor;
let enemyK;

function setup() {
  createCanvas(1400, 700);
  pantalla = 0;
  levelA = new LevelA();
  taylor = new Tay(levelA.getMapReference());
  enemyK = new Kanye(levelA.getMapReference());
}

function draw() {
  background(220);
  switch (pantalla) {
		case 0:
			// pantalla de inicio
      image(tayinicio, 0, 0);
		break;
		case 1:
			// instrucciones 1
      image(inst1, 0, 0);
		break;
    case 2:
      // nivel 1
      levelA.mostrar();
      taylor.mostrar();
      enemyK.mostrar();
      enemyK.mover();
      verifyEnemy();
    break;
  }
}
  function verifyEnemy() {
    if (dist(taylor.getXPos(), taylor.getYPos(), enemyK.getKPosX(), enemyK.getKPosY()) < 100) {
      taylor.llaveAtrapada = false;
      taylor.llaveCol = 6;
      taylor.llaveFil = 2;
      taylor.llaveX = (taylor.llaveCol * 100) + 10;
      taylor.llaveY = (taylor.llaveFil * 100) + 10;
      taylor.cdAtrapado = false;
      taylor.cdCol = 0;
      taylor.cdFil = 6;
      taylor.cdX = (taylor.cdCol * 100) + 10;
      taylor.cdY = (taylor.cdFil * 100) + 10;
      taylor.pjCol = 0;
      taylor.pjFil = 0;
      taylor.xPos = (taylor.pjCol * 100);
      taylor.yPos = (taylor.pjFil * 100) + 100;
    }
  }

  function mousePressed() {
    //seguir a instrucciones
    switch (pantalla) {
      case 0:
        if (dist(mouseX, mouseY, 1203, 610) < 100) {
          pantalla = 1;
        }
      break;
      // empezar nivel 1
      case 1:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          pantalla = 2;
        }
      break;
    }
  }

  function keyPressed() {
    
    switch (pantalla) {
      case 0:
        break;
      //nivel 1
      case 2:
        taylor.mover();
        break;

  }
}
  


