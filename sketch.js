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

//puerta niveles
let puerta;
let puerta2;

//tiempo
let time;

//ganaste y perdiste
let ganaste;
let perdiste;

let vida;

let lives;

//booleano para las immg de los corazones
let cor1 = false;
let cor2 = false;
let cor3 = false;

//MINIJUEGOS
let minJ1;
let coche = [];
let posicionX;
let posicionY;
let ganar;

let minJ2;


let minJ3;
let gata;
let pez;
let mer;
let mapaMinij3;

let minJ4;

let minJ5;
let bala;
let MJ5;
let CS;
let CS1;
let CS2;
let CS3;
let CS4;
let CS5;
let CS6;
let CS7;
let cabezaS;

let arriba = false;
let abajo = false;
let derecha = false;
let izquierda = false;

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
  puerta = loadImage('recursos/Puerta.png');
  puerta2 = loadImage('recursos/Puerta2.png');

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

  ganaste = loadImage('recursos/YOU WON.png');
  perdiste = loadImage('recursos/GAME OVER.png');

  vidas = loadImage('recursos/Corazón.png');

  minJ1 = loadImage('recursos/MINIJUEGO1.png');
  car = loadImage('recursos/CARRO.png');
  minJ2 = loadImage('recursos/MINIJUEGO2.png');

  minJ3 = loadImage('recursos/MINIJUEGO3.png');
  gata = loadImage('recursos/gata.png');
  pez = loadImage('recursos/pez.png');

  minJ4 = loadImage('recursos/MINIJUEGO4.png');

  minJ5 = loadImage('recursos/MINIJUEGO5.png');

  cabezaS = loadImage('recursos/scootercabeza.png')

  time = 120;
  lives = 3;
}


function setup() {
  createCanvas(1400, 700);
  pantalla = 0;
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
  mapaMinij3 = new MapaMj3();
  mer = new GataMer(mapaMinij3.getMapReferenceMj3());

  bala = new BalaMinJ5();
  
  
  


  setupMJ1();
  
}

  MJ5 = new MinJ5();
  CS = new CabezaScooter();
  CS1 = new CabezaScooter(130,100);
  CS2 = new CabezaScooter(280,100);
  CS3 = new CabezaScooter(430,100);
  CS4 = new CabezaScooter(580,100);
  CS5 = new CabezaScooter(205,200);
  CS6 = new CabezaScooter(355,200);
  CS7 = new CabezaScooter(505,200);

const CScooters = [CS1,CS2,CS3,CS4,CS5,CS6,CS7];

function draw() {
  background(220);
  pasarNivel();
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
      enemyK.mover2();
      verifyEnemy();
      tiempo();
      corazones();
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
      corazones();
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
      enemyKp.mover3();
      verifyEnemy();
      tiempo();
      corazones();
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
      enemyKk.mover2();
      enemyKk.mover3();
      verifyEnemy();
      tiempo();
      corazones();
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
      enemyS.mover2();
      enemyS.mover3();
      enemyS.mover4();
      enemyS.mover5();
      verifyEnemy();
      tiempo();
      corazones();
		break;
      // perdiste
    case 11:
      image(perdiste,0,0);
    break;
      // ganaste!!!
    case 12:
      image(ganaste,0,0);
    break;
    case 13:
      image(minJ1,0,0);
      drawMJ1();
      
    break;
    case 14:
      image(minJ2,0,0);
    break;
    case 15:
      mapaMinij3.mostrar();
      mer.mostrar();
    break;
    case 16:
      image(minJ4,0,0);
    break;
    case 17:
      image(minJ5,0,0);
      MJ5.mostrarTanque();
      MJ5.moverTanque();
      MJ5.sumarVelDisparo();

  CScooters.forEach(function(mar) {
    
    mar.mostrarCScooter();
    
    MJ5.getCargador().forEach(function(bala, index) {
      if(mar.getVida() > 0 && validarDisparoScooter(mar, bala)) {
        mar.setVida(0);
        MJ5.getCargador().splice(index, 1);
      }
    });
  });

      
    break;
  }
}

function validarDisparoScooter(mar, bala) {
  if(mar.getX()+30 < bala.getX() && mar.getX()+85 > bala.getX()
  && mar.getY()-10 < bala.getY() && mar.getY()+90 > bala.getY()) {
    return true;
  }
  return false;
}

  function verifyEnemy() {
    switch (pantalla) {
      case 0:
      break;
      case 2:
        if (dist(taylor.getXPos(), taylor.getYPos(), enemyK.getKPosX(), enemyK.getKPosY()) < 100) {
        taylor.llaveAtrapada = false;
        taylor.llaveAparecida = true;
        taylor.puertaAparecido = false;
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

        //contador de vidas
        lives -= 1;
        console.log(lives);
          if(lives == 0){
            pantalla = 11;
          }
      }
      if (dist(taylor.getXPos(), taylor.getYPos(), enemyK.getKPosX2(), enemyK.getKPosY2()) < 100) {
        taylor.llaveAtrapada = false;
        taylor.llaveAparecida = true;
        taylor.puertaAparecido = false;
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

        //contador de vidas
        lives -= 1;
        console.log(lives);
          if(lives == 0){
            pantalla = 11;
          }
      }
      break;
      case 4:
      if (dist(taylor2.getXPos(), taylor2.getYPos(), enemyH.getHPosX(), enemyH.getHPosY()) < 100){
        taylor2.llaveAtrapada = false;
        taylor2.llaveAparecida = true;
        taylor2.puerta2Aparecido = false;
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

        //contador de vidas
        lives -= 1;
        console.log(lives);
          if(lives == 0){
            pantalla = 11;
          }
      }
      if (dist(taylor2.getXPos(), taylor2.getYPos(), enemyH.getHPosX2(), enemyH.getHPosY2()) < 100){
        taylor2.llaveAtrapada = false;
        taylor2.llaveAparecida = true;
        taylor2.puerta2Aparecido = false;
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

        //contador de vidas
        lives -= 1;
        console.log(lives);
          if(lives == 0){
            pantalla = 11;
          }
      }
      if (dist(taylor2.getXPos(), taylor2.getYPos(), enemyH.getHPosX3(), enemyH.getHPosY3()) < 100){
        taylor2.llaveAtrapada = false;
        taylor2.llaveAparecida = true;
        taylor2.puerta2Aparecido = false;
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

        //contador de vidas
        lives -= 1;
        console.log(lives);
          if(lives == 0){
            pantalla = 11;
          }
      }
      break;
      case 6:
      if (dist(taylor3.getXPos(), taylor3.getYPos(), enemyKp.getKPosX(), enemyKp.getKPosY()) < 100){
        taylor3.llaveAtrapada = false;
        taylor3.llaveAparecida = true;
        taylor3.puerta2Aparecido = false;
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
        taylor3.xPos = (taylor3.pjCol * 100);
        taylor3.yPos = (taylor3.pjFil * 100);

        //contador de vidas
        lives -= 1;
        console.log(lives);
          if(lives == 0){
            pantalla = 11;
          }
      }
      if (dist(taylor3.getXPos(), taylor3.getYPos(), enemyKp.getKPosX2(), enemyKp.getKPosY2()) < 100){
        taylor3.llaveAtrapada = false;
        taylor3.llaveAparecida = true;
        taylor3.puerta2Aparecido = false;
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
        taylor3.xPos = (taylor3.pjCol * 100);
        taylor3.yPos = (taylor3.pjFil * 100);

        //contador de vidas
        lives -= 1;
        console.log(lives);
          if(lives == 0){
            pantalla = 11;
          }
      }
      if (dist(taylor3.getXPos(), taylor3.getYPos(), enemyKp.getKPosX3(), enemyKp.getKPosY3()) < 100){
        taylor3.llaveAtrapada = false;
        taylor3.llaveAparecida = true;
        taylor3.puerta2Aparecido = false;
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
        taylor3.xPos = (taylor3.pjCol * 100);
        taylor3.yPos = (taylor3.pjFil * 100);

        //contador de vidas
        lives -= 1;
        console.log(lives);
          if(lives == 0){
            pantalla = 11;
          }
      }
      break;
      case 8:
        if (dist(taylor4.getXPos(), taylor4.getYPos(), enemyKk.getKPosX(), enemyKk.getKPosY()) < 100){
          taylor4.llaveAtrapada = false;
          taylor4.llaveAparecida = true;
          taylor4.puerta2Aparecido = false;
          taylor4.llaveCol = 8;
          taylor4.llaveFil = 1;
          taylor4.llaveX = (taylor4.llaveCol * 100+10);
          taylor4.llaveY = (taylor4.llaveFil * 100+10);
          taylor4.pajaroAtrapado = false;
          taylor4.pajaroAparecido = true;
          taylor4.pajaroCol = 0;
          taylor4.pajaroFil = 6;
          taylor4.pajaroX = (taylor4.pajaroCol * 100+10);
          taylor4.pajaroY = (taylor4.pajaroFil * 100+10);
          taylor4.pjCol = 0;
          taylor4.pjFil = 1;
          taylor4.xPos = (taylor4.pjCol * 100);
          taylor4.yPos = (taylor4.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 11;
            }
        }
        if (dist(taylor4.getXPos(), taylor4.getYPos(), enemyKk.getKPosX2(), enemyKk.getKPosY2()) < 100){
          taylor4.llaveAtrapada = false;
          taylor4.llaveAparecida = true;
          taylor4.puerta2Aparecido = false;
          taylor4.llaveCol = 8;
          taylor4.llaveFil = 1;
          taylor4.llaveX = (taylor4.llaveCol * 100+10);
          taylor4.llaveY = (taylor4.llaveFil * 100+10);
          taylor4.pajaroAtrapado = false;
          taylor4.pajaroAparecido = true;
          taylor4.pajaroCol = 0;
          taylor4.pajaroFil = 6;
          taylor4.pajaroX = (taylor4.pajaroCol * 100+10);
          taylor4.pajaroY = (taylor4.pajaroFil * 100+10);
          taylor4.pjCol = 0;
          taylor4.pjFil = 1;
          taylor4.xPos = (taylor4.pjCol * 100);
          taylor4.yPos = (taylor4.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 11;
            }
        }
        if (dist(taylor4.getXPos(), taylor4.getYPos(), enemyKk.getKPosX3(), enemyKk.getKPosY3()) < 100){
          taylor4.llaveAtrapada = false;
          taylor4.llaveAparecida = true;
          taylor4.puerta2Aparecido = false;
          taylor4.llaveCol = 8;
          taylor4.llaveFil = 1;
          taylor4.llaveX = (taylor4.llaveCol * 100+10);
          taylor4.llaveY = (taylor4.llaveFil * 100+10);
          taylor4.pajaroAtrapado = false;
          taylor4.pajaroAparecido = true;
          taylor4.pajaroCol = 0;
          taylor4.pajaroFil = 6;
          taylor4.pajaroX = (taylor4.pajaroCol * 100+10);
          taylor4.pajaroY = (taylor4.pajaroFil * 100+10);
          taylor4.pjCol = 0;
          taylor4.pjFil = 1;
          taylor4.xPos = (taylor4.pjCol * 100);
          taylor4.yPos = (taylor4.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 11;
            }
        }
      break;
      case 10:
        if (dist(taylor5.getXPos(), taylor5.getYPos(), enemyS.getSPosX(), enemyS.getSPosY()) < 100){
          taylor5.llaveAtrapada = false;
          taylor5.llaveAparecida = true;
          taylor5.puerta2Aparecido = false;
          taylor5.llaveCol = 7;
          taylor5.llaveFil = 1;
          taylor5.llaveX = (taylor5.llaveCol * 100+10);
          taylor5.llaveY = (taylor5.llaveFil * 100+10);
          taylor5.cdAtrapado = false;
          taylor5.cdAparecido = true;
          taylor5.cdCol = 11;
          taylor5.cdFil = 2;
          taylor5.cdX = (taylor5.cdCol * 100+10);
          taylor5.cdY = (taylor5.cdFil * 100+10);
          taylor5.pjCol = 0;
          taylor5.pjFil = 1;
          taylor5.xPos = (taylor5.pjCol * 100);
          taylor5.yPos = (taylor5.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 11;
            }
        }
        if (dist(taylor5.getXPos(), taylor5.getYPos(), enemyS.getSPosX2(), enemyS.getSPosY2()) < 100){
          taylor5.llaveAtrapada = false;
          taylor5.llaveAparecida = true;
          taylor5.puerta2Aparecido = false;
          taylor5.llaveCol = 7;
          taylor5.llaveFil = 1;
          taylor5.llaveX = (taylor5.llaveCol * 100+10);
          taylor5.llaveY = (taylor5.llaveFil * 100+10);
          taylor5.cdAtrapado = false;
          taylor5.cdAparecido = true;
          taylor5.cdCol = 11;
          taylor5.cdFil = 2;
          taylor5.cdX = (taylor5.cdCol * 100+10);
          taylor5.cdY = (taylor5.cdFil * 100+10);
          taylor5.pjCol = 0;
          taylor5.pjFil = 1;
          taylor5.xPos = (taylor5.pjCol * 100);
          taylor5.yPos = (taylor5.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 11;
            }
        }
        if (dist(taylor5.getXPos(), taylor5.getYPos(), enemyS.getSPosX3(), enemyS.getSPosY3()) < 100){
          taylor5.llaveAtrapada = false;
          taylor5.llaveAparecida = true;
          taylor5.puerta2Aparecido = false;
          taylor5.llaveCol = 7;
          taylor5.llaveFil = 1;
          taylor5.llaveX = (taylor5.llaveCol * 100+10);
          taylor5.llaveY = (taylor5.llaveFil * 100+10);
          taylor5.cdAtrapado = false;
          taylor5.cdAparecido = true;
          taylor5.cdCol = 11;
          taylor5.cdFil = 2;
          taylor5.cdX = (taylor5.cdCol * 100+10);
          taylor5.cdY = (taylor5.cdFil * 100+10);
          taylor5.pjCol = 0;
          taylor5.pjFil = 1;
          taylor5.xPos = (taylor5.pjCol * 100);
          taylor5.yPos = (taylor5.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 11;
            }
        }
        if (dist(taylor5.getXPos(), taylor5.getYPos(), enemyS.getSPosX4(), enemyS.getSPosY4()) < 100){
          taylor5.llaveAtrapada = false;
          taylor5.llaveAparecida = true;
          taylor5.puerta2Aparecido = false;
          taylor5.llaveCol = 7;
          taylor5.llaveFil = 1;
          taylor5.llaveX = (taylor5.llaveCol * 100+10);
          taylor5.llaveY = (taylor5.llaveFil * 100+10);
          taylor5.cdAtrapado = false;
          taylor5.cdAparecido = true;
          taylor5.cdCol = 11;
          taylor5.cdFil = 2;
          taylor5.cdX = (taylor5.cdCol * 100+10);
          taylor5.cdY = (taylor5.cdFil * 100+10);
          taylor5.pjCol = 0;
          taylor5.pjFil = 1;
          taylor5.xPos = (taylor5.pjCol * 100);
          taylor5.yPos = (taylor5.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 11;
            }
        }
        if (dist(taylor5.getXPos(), taylor5.getYPos(), enemyS.getSPosX5(), enemyS.getSPosY5()) < 100){
          taylor5.llaveAtrapada = false;
          taylor5.llaveAparecida = true;
          taylor5.puerta2Aparecido = false;
          taylor5.llaveCol = 7;
          taylor5.llaveFil = 1;
          taylor5.llaveX = (taylor5.llaveCol * 100+10);
          taylor5.llaveY = (taylor5.llaveFil * 100+10);
          taylor5.cdAtrapado = false;
          taylor5.cdAparecido = true;
          taylor5.cdCol = 11;
          taylor5.cdFil = 2;
          taylor5.cdX = (taylor5.cdCol * 100+10);
          taylor5.cdY = (taylor5.cdFil * 100+10);
          taylor5.pjCol = 0;
          taylor5.pjFil = 1;
          taylor5.xPos = (taylor5.pjCol * 100);
          taylor5.yPos = (taylor5.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 11;
            }
        }
      break;
  }
  }

  xCorazones = 1000;
  yCorazones = 10;

  function corazones() {
    if(!cor1 && lives == 3){
      image(vidas,xCorazones + 100,yCorazones,50,50);
    }
    if(!cor2 && lives == 3 || lives == 2){
      image(vidas,xCorazones + 50,yCorazones,50,50);

    }
    if(!cor3 && lives == 3 || lives == 2 || lives == 1){
      image(vidas,xCorazones,yCorazones,50,50);
    }
  }

  function tiempo() {
        fill(255);
        textAlign(CENTER,CENTER);
        textSize(70);
        text(time,1300,630);

       if(frameCount % 60 == 0 && time >= 0){
      time --;
        }
        if(time == 0){
          pantalla = 11;
    }
  }

  function setupMJ1(){
    frameRate(60);

  ganar = false;

  posicionX = 120;
  posicionY = 340;

  for (let i = 0; i < 4; i++) {


    coche.push(new Array(3));


    for (let j = 0; j < 3; j++) {

      if (i === 0 || i === 2) {

        coche[i][j] = new cocheMinJ1(240 + (100 * i), 50 + (200 * j), 2);

      }
      if (i === 1 || i === 3) {

        coche[i][j] = new cocheMinJ1(240 + (100 * i), 800 - (200 * j), 1);


      }
    }
  }
  }

  function drawMJ1() {
  
    if (ganar === false) {
  
  
      pintarFondo();
      for (let i = 0; i < 4; i++) {
  
        for (let j = 0; j < 3; j++) {
  
          coche[i][j].mostrar();
        }
      }
  
      personajeMJ1();
  
  
    }
    if (ganar === true) {
      if (mouseIsPressed) {
        ganar = false;
      }
  
    }
  }

  function pintarFondo() {


    /*fill(107,124,125);
    rect(0,260, 80);
  
    fill(107,124,125);
    rect(200, 50, 424, 600);*/
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 7; j++) {
        fill(255);
  
        rect(300 + (100 * i), 70 + (85 * j), 10, 40);
  
  
      }
  
    }
    rect(300 - 100, 50, 5, 590);
    rect(300 + (100 * 3), 50, 5, 590);
  }

  function personajeMJ1() {

    image(tay1,posicionX,posicionY,60,60);
    /*if (arriba) {
      posicionY -= 10;
    }
    if (abajo) {
      posicionY += 10;
    }
  
    if (izquierda) {
      posicionX -= 10;
    }
    if (derecha) {
      posicionX += 10;
    }*/

    if(keyIsPressed){
    switch (key) {
      case "w":
      case "W":
        posicionY -= 2;
        break;
      case "s":
      case "S":
        posicionY += 2;
        break;
  
      case "a":
      case "A":
        posicionX -= 2;
        break;
      case "d":
      case "D":
        posicionX += 2;
        break;
  
    }
  }
  
    contactoMJ1();
  
    if (posicionX > 600) {
        pantalla = 3;
    }
  }

  function contactoMJ1() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
  
        if (posicionY  > coche[i][j].getRefCar() && posicionY < coche[i][j].getRefCar() + 40) {
          if (posicionX  > 110 + (100 * i) && posicionX < 150 + (100 * i)) {
  
            posicionX = 120;
            posicionY = 340;
  
          }
        }
      }
    }
  }


  function mostrarMJ5() {
    
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
      //empezar nivel 4
      case 7:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          pantalla = 8;
        }
      break;
      //empezar nivel 5
      case 9:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          pantalla = 10;
        }
      break;
      //volver a empezar porque perdió
      case 11:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          //reiniciar juego
          pantalla = 0;
          lives = 3;
          time = 120;
          taylor.llaveAtrapada = false ;
          taylor.cdAtrapado = false;
          taylor.cdAparecido = true;
          taylor.llaveAparecida = true;
          taylor.puertaAparecido = false;
          taylor.pjCol = 0;
          taylor.pjFil = 1;
          taylor.xPos = (taylor.pjCol * 100);
          taylor.yPos = (taylor.pjFil * 100);

          taylor2.llaveAtrapada = false;
          taylor2.avionAtrapado = false;
          taylor2.avionAparecido = true;
          taylor2.llaveAparecida = true;
          taylor2.puerta2Aparecido = false;
          taylor2.pjCol = 0;
          taylor2.pjFil = 1;
          taylor2.xPos = (taylor2.pjCol * 100);
          taylor2.yPos = (taylor2.pjFil * 100);

          taylor3.llaveAtrapada = false;
          taylor3.gatoAtrapado = false;
          taylor3.gatoAparecido = true;
          taylor3.llaveAparecida = true;
          taylor3.puerta2Aparecido = false;
          taylor3.pjCol = 0;
          taylor3.pjFil = 1;
          taylor3.xPos = (taylor3.pjCol * 100);
          taylor3.yPos = (taylor3.pjFil * 100);

          taylor4.llaveAtrapada = false;
          taylor4.pajaroAtrapado = false;
          taylor4.llaveAparecida = true;
          taylor4.puerta2Aparecido = false;
          taylor4.pajaroAparecido = true;
          taylor4.pjCol = 0;
          taylor4.pjFil = 1;
          taylor4.xPos = (taylor4.pjCol * 100);
          taylor4.yPos = (taylor4.pjFil * 100);

          taylor5.llaveAtrapada = false ;
          taylor5.cdAtrapado = false;
          taylor5.cdAparecido = true;
          taylor5.llaveAparecida = true;
          taylor5.puerta2Aparecido = false;
          taylor5.pjCol = 0;
          taylor5.pjFil = 1;
          taylor5.xPos = (taylor5.pjCol * 100);
          taylor5.yPos = (taylor5.pjFil * 100);
        }
      break;
    //volver a empezar porque ganó
      case 12:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          //reiniciar juego
          pantalla = 0;
          lives = 3;
          time = 120;
          taylor.llaveAtrapada = false ;
          taylor.cdAtrapado = false;
          taylor.cdAparecido = true;
          taylor.llaveAparecida = true;
          taylor.puertaAparecido = false;
          taylor.pjCol = 0;
          taylor.pjFil = 1;
          taylor.xPos = (taylor.pjCol * 100);
          taylor.yPos = (taylor.pjFil * 100);

          taylor2.llaveAtrapada = false;
          taylor2.avionAtrapado = false;
          taylor2.avionAparecido = true;
          taylor2.llaveAparecida = true;
          taylor2.puerta2Aparecido = false;
          taylor2.pjCol = 0;
          taylor2.pjFil = 1;
          taylor2.xPos = (taylor2.pjCol * 100);
          taylor2.yPos = (taylor2.pjFil * 100);

          taylor3.llaveAtrapada = false;
          taylor3.gatoAtrapado = false;
          taylor3.gatoAparecido = true;
          taylor3.llaveAparecida = true;
          taylor3.puerta2Aparecido = false;
          taylor3.pjCol = 0;
          taylor3.pjFil = 1;
          taylor3.xPos = (taylor3.pjCol * 100);
          taylor3.yPos = (taylor3.pjFil * 100);

          taylor4.llaveAtrapada = false;
          taylor4.pajaroAtrapado = false;
          taylor4.llaveAparecida = true;
          taylor4.puerta2Aparecido = false;
          taylor4.pajaroAparecido = true;
          taylor4.pjCol = 0;
          taylor4.pjFil = 1;
          taylor4.xPos = (taylor4.pjCol * 100);
          taylor4.yPos = (taylor4.pjFil * 100);

          taylor5.llaveAtrapada = false ;
          taylor5.cdAtrapado = false;
          taylor5.cdAparecido = true;
          taylor5.llaveAparecida = true;
          taylor5.puerta2Aparecido = false;
          taylor5.pjCol = 0;
          taylor5.pjFil = 1;
          taylor5.xPos = (taylor5.pjCol * 100);
          taylor5.yPos = (taylor5.pjFil * 100);
        }
      break;
      case 14:
        if (dist(mouseX, mouseY, 450, 350) < 100) {
          pantalla = 5;
        }
      break;
      case 16:
        if (dist(mouseX, mouseY, 250, 350) < 100) {
          pantalla = 9;
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
        //nivel 4
      case 8:
        taylor4.mover();
        break;
        //nivel 5
      case 10:
        taylor5.mover();
        break;
      case 13:
        //minijuego1
        break;
        //minijuego3
      case 15:
        mer.mover();
        break;
        
  }
}


function pasarNivel(){
  switch (pantalla) {
    case 0:
      break;
    //nivel 1
    case 2:
      if(taylor.llaveAtrapada ==true && taylor.cdAtrapado==true){
        pantalla = 13;
      }
      break;
    //nivel 2
    case 4:
      if(taylor2.llaveAtrapada ==true && taylor2.avionAtrapado==true){
        pantalla = 14;
      }
      break;
      //nivel 3
    case 6:
      if(taylor3.llaveAtrapada ==true && taylor3.gatoAtrapado==true){
        pantalla = 15;
      }
      break;
      //nivel 4
    case 8:
      if(taylor4.llaveAtrapada ==true && taylor4.pajaroAtrapado==true){
        pantalla = 16;
      }
      break;
      //nivel 5
    case 10:
      if(taylor5.llaveAtrapada ==true && taylor5.cdAtrapado==true){
        pantalla = 17;
      }
      break;
    case 15:
      if(mer.pezAtrapado == true && mer.pezAtrapado2 == true && mer.pezAtrapado3 == true
        && mer.pezAtrapado4 == true && mer.pezAtrapado5 == true){
        pantalla = 7;
      }
      break;
    case 17:
      /*if(CScooters == ){

        pantalla = 12;
      }*/


      
      break;
  }
}
  


