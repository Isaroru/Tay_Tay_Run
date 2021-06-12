class Tay4{
    constructor(mapReference,pjCol,pjFil,xPos,yPos,llaveX,llaveY,llaveCol,llaveFil,llaveAtrapada,pajaroX,pajaroY,pajaroCol,pajaroFil,pajaroAtrapado){
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
        this.llaveCol = 8;
        this.llaveFil = 1;
        this.llaveX = (this.llaveCol * 100 + 10);
        this.llaveY = (this.llaveFil * 100 + 10);
        this.llaveAtrapada = false;
        this.llaveAparecida = true;
        //pajaro
        this.pajaroX = pajaroX;
        this.pajaroY = pajaroY;
        this.pajaroCol = pajaroCol;
        this.pajaroFil = pajaroFil;
        this.pajaroAtrapado = pajaroAtrapado;
        this.pajaroCol = 0;
        this.pajaroFil = 6;
        this.pajaroX = (this.pajaroCol * 100 + 10);
        this.pajaroY = (this.pajaroFil * 100 + 10);
        this.pajaroAtrapado = false;
        this.pajaroAparecido = true;

        this.puerta2Aparecido = false;
    }

    mostrar(){
        image(tay4, this.xPos, this.yPos,100,100);
        if (!this.llaveAtrapada) {
            image(llave,this.llaveX,this.llaveY,80,80);
        }
        if(!this.llaveAparecida) {
            image(llave,1250,260,100,100);
        }
        if (!this.pajaroAtrapado) {
            image(pajaro,this.pajaroX,this.pajaroY,80,80);
        }
        if(!this.pajaroAparecido) {
            image(pajaro,1250,430,100,100);
        }
        if(!this.puerta2Aparecido) {
            image(puerta2,594.937,602.301);
        }
    }

    verifyItem(){
        if(dist(this.xPos,this.yPos,this.llaveX,this.llaveY) < 50){
            this.llaveAtrapada = true;
            this.llaveAparecida = false;
            this.puerta2Aparecido = true;
        }
        if(dist(this.xPos,this.yPos,this.pajaroX,this.pajaroY) < 50){
            this.pajaroAtrapado = true;
            this.pajaroAparecido = false;
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