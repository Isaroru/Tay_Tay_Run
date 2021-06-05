class Tay2{
    constructor(mapReference,pjCol,pjFil,xPos,yPos,llaveX,llaveY,llaveCol,llaveFil,llaveAtrapada,avionX,avionY,avionCol,avionFil,avionAtrapado){
        this.pjCol = pjCol;
        this.pjFil = pjFil;
        this.xPos = xPos; 
        this.yPos = yPos;
        this.mapReference = mapReference;
        // posición inicial // remover despues para asignarla por nivel
        this.pjCol = 0;
        this.pjFil = 1; 
        this.xPos = (this.pjCol * 100);
        this.yPos = (this.pjFil * 100); 
        //llave
        this.llaveX = llaveX;
        this.llaveY = llaveY;
        this.llaveCol = llaveCol;
        this.llaveFil = llaveFil;
        this.llaveAtrapada = llaveAtrapada;
        this.llaveCol = 11;
        this.llaveFil = 1;
        this.llaveX = (this.llaveCol * 100 + 10);
        this.llaveY = (this.llaveFil * 100 + 10);
        this.llaveAtrapada = false;
        //avion
        this.avionX = avionX;
        this.avionY = avionY;
        this.avionCol = avionCol;
        this.avionFil = avionFil;
        this.avionAtrapado = avionAtrapado;
        this.avionCol = 11;
        this.avionFil = 6;
        this.avionX = (this.avionCol * 100 + 10);
        this.avionY = (this.avionFil * 100 + 10);
        this.avionAtrapado = false;
    }

    mostrar(){
        image(tay2, this.xPos, this.yPos,100,100);
        if (!this.llaveAtrapada) {
            image(llave,this.llaveX,this.llaveY,80,80);
        }
        if (!this.avionAtrapado) {
            image(avion,this.avionX,this.avionY,70,70);
        }
    }

    verifyItem(){
        if(dist(this.xPos,this.yPos,this.llaveX,this.llaveY) < 50){
            this.llaveAtrapada = true;
        }
        if(dist(this.xPos,this.yPos,this.avionX,this.avionY) < 50){
            this.avionAtrapado = true;
        }
    }

    mover(){              
        switch (keyCode) {            
            case LEFT_ARROW: // izquierda
            if (this.pjCol - 1 >= 0) {
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
            this.xPos = (this.pjCol * 100);
            this.yPos = (this.pjFil * 100);
            this.verifyItem();
    }

    getXPos(){
        return this.xPos;
    }
    setXPos(xPos){
        this.xPos = xPos;
    }
    getYPos(){
        return this.yPos;
    }
    setYPos(yPos){
        this.yPos = yPos;
    }
    getPjCol(){
        return this.pjCol;
    }
    setPjCol(pjCol){
        this.pjCol = pjCol;
    }
    getPjFil(){
        return this.pjFil;
    }
    setPjFil(pjFil){
        this.pjFil = pjFil;
    }
    

}