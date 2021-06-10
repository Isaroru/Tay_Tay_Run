class Tay3{
    constructor(mapReference,pjCol,pjFil,xPos,yPos,llaveX,llaveY,llaveCol,llaveFil,llaveAtrapada,gatoX,gatoY,gatoCol,gatoFil,gatoAtrapado){
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
        this.llaveCol = 7;
        this.llaveFil = 2;
        this.llaveX = (this.llaveCol * 100 + 10);
        this.llaveY = (this.llaveFil * 100 + 10);
        this.llaveAtrapada = false;
        //gato
        this.gatoX = gatoX;
        this.gatoY = gatoY;
        this.gatoCol = gatoCol;
        this.gatoFil = gatoFil;
        this.gatoAtrapado = gatoAtrapado;
        this.gatoCol = 11;
        this.gatoFil = 3;
        this.gatoX = (this.gatoCol * 100 + 10);
        this.gatoY = (this.gatoFil * 100 + 10);
        this.gatoAtrapado = false;
    }

    mostrar(){
        image(tay3, this.xPos, this.yPos,100,100);
        if (!this.llaveAtrapada) {
            image(llave,this.llaveX,this.llaveY,80,80);
        }
        if (!this.gatoAtrapado) {
            image(gato,this.gatoX,this.gatoY,80,80);
        }
    }

    verifyItem(){
        if(dist(this.xPos,this.yPos,this.llaveX,this.llaveY) < 50){
            this.llaveAtrapada = true;
        }
        if(dist(this.xPos,this.yPos,this.gatoX,this.gatoY) < 50){
            this.gatoAtrapado = true;
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