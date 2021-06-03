
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

function setup() {
  createCanvas(1200, 700);
  pantalla = 0;
  levelA = new LevelA();
  taylor = new Tay(levelA.getMapReference());
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
      //levelA.setObstaculos();
    break;
  }
}

  function mousePressed() {
    //seguir a instrucciones
    switch (pantalla) {
      case 0:
        if (dist(mouseX, mouseY, 1004, 614) < 100) {
          pantalla = 1;
        }
      break;
      // empezar nivel 1
      case 1:
        if (dist(mouseX, mouseY, 1004, 614) < 100) {
          pantalla = 2;
        }
      break;
    }
  }

  function keyPressed() {
    switch (pantalla) {
      case 0:
        if (pantalla=2) {
          taylor.mover();
        }
      break;
  }
  //console(taylor.mover());
}
  
  /*function keyIsPressed() {
    switch (keyCode) {
            case LEFT_ARROW: // izquierda
            if (taylor.getPjCol() - 1 >= 0) {
                if (this.mapReference[this.pjFil][this.pjCol - 1] === 0) {
                this.pjCol -= 1;
                }
            }
            break;
            case RIGHT_ARROW: // derecha
            if (this.pjCol + 1 < 12) {
                if (this.mapReference[this.pjFil][this.pjCol + 1] === 0) {
                this.pjCol += 1;
                }
            }
            break;
            case UP_ARROW: // arriba
            if (this.pjFil - 1 >= 0) {
                if (this.mapReference[this.pjFil - 1][this.pjCol] === 0) {
                this.pjFil -= 1;
                }
            }
            break;
            case DOWN_ARROW: // abajo
            if (this.pjFil + 1 < 7) {
                if (this.mapReference[this.pjFil + 1][this.pjCol] === 0) {
                this.pjFil += 1;
                }
            }
            break;
            }
            this.xPos = (this.pjCol * 100) + 0;
            this.yPos = (this.pjFil * 100) + 100;
  }*/



