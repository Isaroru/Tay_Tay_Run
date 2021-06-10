let tayinicio;
//nivel 1
let tay1;
let llave;
let cd;
let kanye;
let fondo1;
let barra1;
let inst1;
let levelA;
let enemyK;
let taylor;
//nivel 2
let tay2;
let avion;
let harry;
let fondo2;
let barra2;
let inst2;
let levelB;
let taylor2;
let enemyH;
//nivel 3
let tay3;
let gato;
let katy;
let fondo3;
let inst3;
let levelC;
let taylor3;
let enemyKp;
//nivel 4
let tay4;
let pajaro;
let kim;
let fondo4;
let inst4;
let levelD;
let taylor4;
let enemyKk;
//nivel 5
let tay5;
let scooter;
let fondo5;
let inst5;
let levelE;
let taylor5;
let enemyS;

//tiempo
let time;

let pantalla;

function preload() {
  tayinicio = loadImage('recursos/inicio.gif');
  tay1 = loadImage('recursos/tay1.png');
  kanye = loadImage('recursos/kanye.png');
  fondo1 = loadImage('recursos/fondo.png');
  inst1 = loadImage('recursos/inst1.png');
  llave = loadImage('recursos/llave.png');
  cd = loadImage('recursos/cd.png');
  barra1 = loadImage('recursos/barra1.png');

  tay2 = loadImage('recursos/tay2.png');
  harry = loadImage('recursos/harry.png');
  fondo2 = loadImage('recursos/fondo2.png');
  inst2 = loadImage('recursos/inst2.png');
  avion = loadImage('recursos/avion.png');
  barra2 = loadImage('recursos/barra2.png');

  tay3 = loadImage('recursos/tay3.png');
  katy = loadImage('recursos/katy.png');
  fondo3 = loadImage('recursos/fondo3.png');
  inst3 = loadImage('recursos/inst3.png');
  gato = loadImage('recursos/gato.png');

  tay4 = loadImage('recursos/tay4.png');
  kim = loadImage('recursos/kim.png');
  fondo4 = loadImage('recursos/fondo4.png');
  inst4 = loadImage('recursos/inst4.png');
  pajaro = loadImage('recursos/pajaro.png');

  tay5 = loadImage('recursos/tay5.png');
  scooter = loadImage('recursos/scooter.png');
  fondo5 = loadImage('recursos/fondo5.png');
  inst5 = loadImage('recursos/inst5.png');

  time = 120;
}


function setup() {
  createCanvas(1400, 700);
  pantalla = 4;
  levelA = new LevelA();
  taylor = new Tay(levelA.getMapReference());
  enemyK = new Kanye(levelA.getMapReference());
  levelB = new LevelB();
  taylor2 = new Tay2(levelB.getMapReference2());
  enemyH = new Harry(levelB.getMapReference2());
  levelC = new LevelC();
  taylor3 = new Tay3(levelC.getMapReference3());
  enemyKp = new Katy(levelC.getMapReference3());
  levelD = new LevelD();
  taylor4 = new Tay4(levelD.getMapReference4());
  enemyKk = new Kim(levelD.getMapReference4());
  levelE = new LevelE();
  taylor5 = new Tay5(levelE.getMapReference5());
  enemyS = new Scooter(levelE.getMapReference5());
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
      tiempo();
    break;
    case 3:
			// instrucciones 2
      image(inst2, 0, 0);
		break;
    case 4:
			// nivel 2
      levelB.mostrar();
      taylor2.mostrar();
      enemyH.mostrar();
      enemyH.mover();
      enemyH.mover2();
      enemyH.mover3();
      verifyEnemy();
      tiempo();
		break;
    case 5:
			// instrucciones 3
      image(inst3, 0, 0);
		break;
    case 6:
			// nivel 3
      levelC.mostrar();
      taylor3.mostrar();
      enemyKp.mostrar();
      enemyKp.mover();
      enemyKp.mover2();
      //enemyKp.mover3();
      verifyEnemy();
      tiempo();
		break;
    case 7:
			// instrucciones 4
      image(inst4, 0, 0);
		break;
    case 8:
			// nivel 4
      levelD.mostrar();
      taylor4.mostrar();
      enemyKk.mostrar();
      enemyKk.mover();
      //enemyKp.mover3();
      verifyEnemy();
      tiempo();
		break;
    case 9:
			// instrucciones 5
      image(inst5, 0, 0);
		break;
    case 10:
			// nivel 5
      levelE.mostrar();
      taylor5.mostrar();
      enemyS.mostrar();
      enemyS.mover();
      //enemyKp.mover3();
      verifyEnemy();
      tiempo();
		break;
  }
}
  function verifyEnemy() {
    switch (pantalla) {
      case 0:
      break;
      case 2:
        if (dist(taylor.getXPos(), taylor.getYPos(), enemyK.getKPosX(), enemyK.getKPosY()) < 100) {
        taylor.llaveAtrapada = false;
        taylor.llaveAparecida = true;
        taylor.llaveCol = 6;
        taylor.llaveFil = 2;
        taylor.llaveX = (taylor.llaveCol * 100) + 10;
        taylor.llaveY = (taylor.llaveFil * 100) + 10;
        taylor.cdAtrapado = false;
        taylor.cdAparecido = true;
        taylor.cdCol = 0;
        taylor.cdFil = 6;
        taylor.cdX = (taylor.cdCol * 100) + 10;
        taylor.cdY = (taylor.cdFil * 100) + 10;
        taylor.pjCol = 0;
        taylor.pjFil = 0;
        taylor.xPos = (taylor.pjCol * 100);
        taylor.yPos = (taylor.pjFil * 100) + 100;
      }
      if (dist(taylor.getXPos(), taylor.getYPos(), enemyK.getKPosX2(), enemyK.getKPosY2()) < 100) {
        taylor.llaveAtrapada = false;
        taylor.llaveAparecida = true;
        taylor.llaveCol = 6;
        taylor.llaveFil = 2;
        taylor.llaveX = (taylor.llaveCol * 100) + 10;
        taylor.llaveY = (taylor.llaveFil * 100) + 10;
        taylor.cdAtrapado = false;
        taylor.cdAparecido = true;
        taylor.cdCol = 0;
        taylor.cdFil = 6;
        taylor.cdX = (taylor.cdCol * 100) + 10;
        taylor.cdY = (taylor.cdFil * 100) + 10;
        taylor.pjCol = 0;
        taylor.pjFil = 0;
        taylor.xPos = (taylor.pjCol * 100);
        taylor.yPos = (taylor.pjFil * 100) + 100;
      }
      break;
      case 4:
      if (dist(taylor2.getXPos(), taylor2.getYPos(), enemyH.getHPosX(), enemyH.getHPosY()) < 100){
        taylor2.llaveAtrapada = false;
        taylor2.llaveAparecida = true;
        taylor2.llaveCol = 11;
        taylor2.llaveFil = 1;
        taylor2.llaveX = (taylor2.llaveCol * 100);
        taylor2.llaveY = (taylor2.llaveFil * 100);
        taylor2.avionAtrapado = false;
        taylor2.avionAparecido = true;
        taylor2.avionCol = 11;
        taylor2.avionFil = 6;
        taylor2.avionX = (taylor2.avionCol * 100);
        taylor2.avionY = (taylor2.avionFil * 100);
        taylor2.pjCol = 0;
        taylor2.pjFil = 1;
        taylor2.xPos = (taylor2.pjCol * 100);
        taylor2.yPos = (taylor2.pjFil * 100);
      }
      if (dist(taylor2.getXPos(), taylor2.getYPos(), enemyH.getHPosX2(), enemyH.getHPosY2()) < 100){
        taylor2.llaveAtrapada = false;
        taylor2.llaveAparecida = true;
        taylor2.llaveCol = 11;
        taylor2.llaveFil = 1;
        taylor2.llaveX = (taylor2.llaveCol * 100);
        taylor2.llaveY = (taylor2.llaveFil * 100);
        taylor2.avionAtrapado = false;
        taylor2.avionAparecido = true;
        taylor2.avionCol = 11;
        taylor2.avionFil = 6;
        taylor2.avionX = (taylor2.avionCol * 100);
        taylor2.avionY = (taylor2.avionFil * 100);
        taylor2.pjCol = 0;
        taylor2.pjFil = 1;
        taylor2.xPos = (taylor2.pjCol * 100);
        taylor2.yPos = (taylor2.pjFil * 100);
      }
      if (dist(taylor2.getXPos(), taylor2.getYPos(), enemyH.getHPosX3(), enemyH.getHPosY3()) < 100){
        taylor2.llaveAtrapada = false;
        taylor2.llaveAparecida = true;
        taylor2.llaveCol = 11;
        taylor2.llaveFil = 1;
        taylor2.llaveX = (taylor2.llaveCol * 100);
        taylor2.llaveY = (taylor2.llaveFil * 100);
        taylor2.avionAtrapado = false;
        taylor2.avionAparecido = true;
        taylor2.avionCol = 11;
        taylor2.avionFil = 6;
        taylor2.avionX = (taylor2.avionCol * 100);
        taylor2.avionY = (taylor2.avionFil * 100);
        taylor2.pjCol = 0;
        taylor2.pjFil = 1;
        taylor2.xPos = (taylor2.pjCol * 100);
        taylor2.yPos = (taylor2.pjFil * 100);
      }
      break;
      case 6:
      if (dist(taylor3.getXPos(), taylor3.getYPos(), enemyKp.getKPosX(), enemyKp.getKPosY()) < 100){
        taylor3.llaveAtrapada = false;
        taylor3.llaveAparecida = true;
        taylor3.llaveCol = 7;
        taylor3.llaveFil = 2;
        taylor3.llaveX = (taylor3.llaveCol * 100);
        taylor3.llaveY = (taylor3.llaveFil * 100);
        taylor3.gatoAtrapado = false;
        taylor3.gatoAparecido = true;
        taylor3.gatoCol = 11;
        taylor3.gatoFil = 3;
        taylor3.gatoX = (taylor3.gatoCol * 100);
        taylor3.gatoY = (taylor3.gatoFil * 100);
        taylor3.pjCol = 0;
        taylor3.pjFil = 1;
        taylor3.xPos = (taylor2.pjCol * 100);
        taylor3.yPos = (taylor2.pjFil * 100);
      }
      if (dist(taylor3.getXPos(), taylor3.getYPos(), enemyKp.getKPosX2(), enemyKp.getKPosY2()) < 100){
        taylor3.llaveAtrapada = false;
        taylor3.llaveAparecida = true;
        taylor3.llaveCol = 7;
        taylor3.llaveFil = 2;
        taylor3.llaveX = (taylor3.llaveCol * 100);
        taylor3.llaveY = (taylor3.llaveFil * 100);
        taylor3.gatoAtrapado = false;
        taylor3.gatoAparecido = true;
        taylor3.gatoCol = 11;
        taylor3.gatoFil = 3;
        taylor3.gatoX = (taylor3.gatoCol * 100);
        taylor3.gatoY = (taylor3.gatoFil * 100);
        taylor3.pjCol = 0;
        taylor3.pjFil = 1;
        taylor3.xPos = (taylor2.pjCol * 100);
        taylor3.yPos = (taylor2.pjFil * 100);
      }
      break;
      
    
  }
  }

  function tiempo() {

        fill(255);
        textAlign(CENTER,CENTER);
        textSize(70);
        text(time,1300,630);

       if(frameCount % 60 == 0 && time > 0){
      time --;
        }
        if(time == 0){
          text("Game over",width/2,height/2);
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
      //empezar nivel 2
      case 3:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          pantalla = 4;
        }
      break;
      //empezar nivel 3
      case 5:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          pantalla = 6;
        }
      break;
      case 7:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          pantalla = 8;
        }
      break;
      case 9:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          pantalla = 10;
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
      //nivel 2
      case 4:
        taylor2.mover();
        break;
        //nivel 3
      case 6:
        taylor3.mover();
        break;
      case 8:
        taylor4.mover();
        break;
      case 10:
        taylor5.mover();
        break;

  }
}
  


