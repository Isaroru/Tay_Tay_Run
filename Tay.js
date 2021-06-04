class Tay{
    constructor(mapReference,pjCol,pjFil,xPos,yPos,llaveX,llaveY,llaveCol,llaveFil,llaveAtrapada,cdX,cdY,cdCol,cdFil,cdAtrapado){
        this.pjCol = pjCol;
        this.pjFil = pjFil;
        this.xPos = xPos; 
        this.yPos = yPos;
        this.mapReference = mapReference;
        // posición inicial // remover despues para asignarla por nivel
        this.pjCol = 0;
        this.pjFil = 0; 
        this.xPos = (this.pjCol * 100) + 0;
        this.yPos = (this.pjFil * 100) + 100; 
        //llave
        this.llaveX = llaveX;
        this.llaveY = llaveY;
        this.llaveCol = llaveCol;
        this.llaveFil = llaveFil;
        this.llaveAtrapada = llaveAtrapada;
        this.llaveCol = 6;
        this.llaveFil = 2;
        this.llaveX = (this.llaveCol * 100 + 10);
        this.llaveY = (this.llaveFil * 100 + 10);
        this.llaveAtrapada = false;
        //cd
        this.cdX = cdX;
        this.cdY = cdY;
        this.cdCol = cdCol;
        this.cdFil = cdFil;
        this.cdAtrapado = cdAtrapado;
        this.cdCol = 0;
        this.cdFil = 6;
        this.cdX = (this.cdCol * 100 + 10);
        this.cdY = (this.cdFil * 100 + 10);
        this.cdAtrapado = false;
    }

    mostrar(){
        image(tay1, this.xPos, this.yPos);
        if (!this.llaveAtrapada) {
            image(llave,this.llaveX,this.llaveY,80,80);
        }
        if (!this.cdAtrapado) {
            image(cd,this.cdX,this.cdY,80,80);
        }
    }

    verifyItem(){
        if(dist(this.xPos,this.yPos,this.llaveX,this.llaveY) < 50){
            this.llaveAtrapada = true;
        }
        if(dist(this.xPos,this.yPos,this.cdX,this.cdY) < 50){
            this.cdAtrapado = true;
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
            this.xPos = (this.pjCol * 100) + 0;
            this.yPos = (this.pjFil * 100) + 0;
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
    setPjFill(pjFil){
        this.pjFil = pjFil;
    }
    

}