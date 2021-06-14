class GataMer{
    constructor(mapReference,mCol,mFil,mPosX,mPosY,pezX,pezY,pezCol,pezFil,pezAtrapado,pezCol2,pezFil2,pezPosX2,pezPosY2,pezAtrapado2,
        pezCol3,pezFil3,pezPosX3,pezPosY3,pezAtrapado3,pezCol4,pezFil4,pezPosX4,pezPosY4,pezAtrapado4,pezCol5,pezFil5,pezPosX5,pezPosY5,pezAtrapado5){
        //gata
        this.mCol = mCol;
        this.mFil = mFil;
        this.mPosX = mPosX; 
        this.mPosY = mPosY;
        this.mapReference = mapReference;
        this.mCol = 1;
        this.mFil = 3; 
        this.mPosX = (this.mCol * 100);
        this.mPosY = (this.mFil * 100); 
        //pez
        this.pezX = pezX;
        this.pezY = pezY;
        this.pezCol = pezCol;
        this.pezFil = pezFil;
        this.pezAtrapado = pezAtrapado;

        this.pezCol2 = pezCol2;
        this.pezFil2 = pezFil2;
        this.pezPosX2 = pezPosX2; 
        this.pezPosY2 = pezPosY2;
        this.pezAtrapado2 = pezAtrapado2;

        this.pezCol3 = pezCol3;
        this.pezFil3 = pezFil3;
        this.pezPosX3 = pezPosX3; 
        this.pezPosY3 = pezPosY3;
        this.pezAtrapado3 = pezAtrapado3;

        this.pezCol4 = pezCol4;
        this.pezFil4 = pezFil4;
        this.pezPosX4 = pezPosX4; 
        this.pezPosY4 = pezPosY4;
        this.pezAtrapado4 = pezAtrapado4;

        this.pezCol5 = pezCol5;
        this.pezFil5 = pezFil5;
        this.pezPosX5 = pezPosX5; 
        this.pezPosY5 = pezPosY5;
        this.pezAtrapado5 = pezAtrapado5;

        this.pezCol = 3;
        this.pezFil = 1;
        this.pezPosX = (this.pezCol * 100 + 15); 
        this.pezPosY = (this.pezFil * 100 + 15);
        this.pezAtrapado = false;

        this.pezCol2 = 2;
        this.pezFil2 = 4;
        this.pezPosX2 = (this.pezCol2 * 100 + 15); 
        this.pezPosY2 = (this.pezFil2 * 100 + 15);
        this.pezAtrapado2 = false;

        this.pezCol3 = 4;
        this.pezFil3 = 2;
        this.pezPosX3 = (this.pezCol3 * 100 + 15); 
        this.pezPosY3 = (this.pezFil3 * 100 + 15);
        this.pezAtrapado3 = false;

        this.pezCol4 = 5;
        this.pezFil4 = 5;
        this.pezPosX4 = (this.pezCol4 * 100 + 15); 
        this.pezPosY4 = (this.pezFil4 * 100 + 15);
        this.pezAtrapado4 = false;

        this.pezCol5 = 6;
        this.pezFil5 = 3;
        this.pezPosX5 = (this.pezCol5 * 100 + 15); 
        this.pezPosY5 = (this.pezFil5 * 100 + 15);
        this.pezAtrapado5 = false;
    }

    mostrar(){
        image(gata, this.mPosX, this.mPosY,100,100);
        if (!this.pezAtrapado){
            image (pez, this.pezPosX,this.pezPosY,70,70);    
        }
        if (!this.pezAtrapado2){
            image (pez, this.pezPosX2,this.pezPosY2,70,70);   
        }
        if (!this.pezAtrapado3){
            image (pez, this.pezPosX3,this.pezPosY3,70,70);   
        }
        if (!this.pezAtrapado4){
            image (pez, this.pezPosX4,this.pezPosY4,70,70);   
        }
        if (!this.pezAtrapado5){
            image (pez, this.pezPosX5,this.pezPosY5,70,70);   
        }
    }

    verifyItem(){
        if(dist(this.mPosX,this.mPosY,this.pezPosX,this.pezPosY) < 50){
            this.pezAtrapado = true;
        }
        if(dist(this.mPosX,this.mPosY,this.pezPosX2,this.pezPosY2) < 50){
            this.pezAtrapado2 = true;
        }
        if(dist(this.mPosX,this.mPosY,this.pezPosX3,this.pezPosY3) < 50){
            this.pezAtrapado3 = true;
        }
        if(dist(this.mPosX,this.mPosY,this.pezPosX4,this.pezPosY4) < 50){
            this.pezAtrapado4 = true;
        }
        if(dist(this.mPosX,this.mPosY,this.pezPosX5,this.pezPosY5) < 50){
            this.pezAtrapado5 = true;
        }
    }

    mover(){              
        switch (keyCode) {            
            case LEFT_ARROW: // izquierda
            if (this.mCol - 1 >= 0) {
                if (this.mapReference[this.mFil][this.mCol - 1] === 0) {
                this.mCol -= 1;
                }
            }
            break;
            case RIGHT_ARROW: // derecha
            if (this.mCol + 1 < 12) {
                if (this.mapReference[this.mFil][this.mCol + 1] === 0) {
                this.mCol += 1;
                }
            }
            break;
            case UP_ARROW: // arriba
            if (this.mFil - 1 >= 0) {
                if (this.mapReference[this.mFil - 1][this.mCol] === 0) {
                this.mFil -= 1;
                }
            }
            break;
            case DOWN_ARROW: // abajo
            if (this.mFil + 1 < 7) {
                if (this.mapReference[this.mFil + 1][this.mCol] === 0) {
                this.mFil += 1;
                }
            }
            break;
            }
            this.mPosX = (this.mCol * 100);
            this.mPosY = (this.mFil * 100);
            this.verifyItem();
    }

    getMPosX(){
        return this.mPosX;
    }
    setMPosX(mPosX){
        this.mPosX = mPosX;
    }
    getMPosY(){
        return this.yPos;
    }
    setMPosY(mPosY){
        this.mPosY = mPosY;
    }
    getMCol(){
        return this.mCol;
    }
    setMCol(mCol){
        this.mCol = mCol;
    }
    getMFil(){
        return this.mFil;
    }
    setMFil(mFil){
        this.mFil = mFil;
    }

    getPezPosX(){
        return this.pezPosX;
    }
    setPezPosX(pezPosX){
        this.pezPosX = pezPosX;
    }
    getPezPosY(){
        return this.pezPosY;
    }
    setPezPosY(pezPosY){
        this.pezPosY = pezPosY;
    }
    getPezCol(){
        return this.pezCol;
    }
    setPezCol(pezCol){
        this.pezCol = pezCol;
    }
    getPezFil(){
        return this.pezFil;
    }
    setPezFil(pezFil){
        this.pezFil = pezFil;
    }    

    getPezPosX2(){
        return this.pezPosX2;
    }
    setPezPosX2(pezPosX2){
        this.pezPosX2 = pezPosX2;
    }
    getPezPosY2(){
        return this.pezPosY2;
    }
    setPezPosY2(pezPosY2){
        this.pezPosY2 = pezPosY2;
    }
    getPezCol2(){
        return this.pezCol2;
    }
    setPezCol2(pezCol2){
        this.pezCol2 = pezCol2;
    }
    getPezFil2(){
        return this.pezFil2;
    }
    setPezFil2(pezFil2){
        this.pezFil2 = pezFil2;
    }   

    getPezPosX3(){
        return this.pezPosX3;
    }
    setPezPosX3(pezPosX3){
        this.pezPosX3 = pezPosX3;
    }
    getPezPosY3(){
        return this.pezPosY3;
    }
    setPezPosY3(pezPosY3){
        this.pezPosY3 = pezPosY3;
    }
    getPezCol3(){
        return this.pezCol3;
    }
    setPezCol3(pezCol3){
        this.pezCol3 = pezCol3;
    }
    getPezFil3(){
        return this.pezFil3;
    }
    setPezFil3(pezFil3){
        this.pezFil3 = pezFil3;
    }   

    getPezPosX4(){
        return this.pezPosX;
    }
    setPezPosX4(pezPosX4){
        this.pezPosX = pezPosX4;
    }
    getPezPosY4(){
        return this.pezPosY4;
    }
    setPezPosY4(pezPosY4){
        this.pezPosY4 = pezPosY4;
    }
    getPezCol4(){
        return this.pezCol4;
    }
    setPezCol4(pezCol4){
        this.pezCol4 = pezCol4;
    }
    getPezFil4(){
        return this.pezFil4;
    }
    setPezFil4(pezFil4){
        this.pezFil4 = pezFil4;
    }   

    getPezPosX5(){
        return this.pezPosX5;
    }
    setPezPosX5(pezPosX5){
        this.pezPosX5 = pezPosX5;
    }
    getPezPosY5(){
        return this.pezPosY5;
    }
    setPezPosY5(pezPosY5){
        this.pezPosY5 = pezPosY5;
    }
    getPezCol5(){
        return this.pezCol5;
    }
    setPezCol5(pezCol5){
        this.pezCol5 = pezCol5;
    }
    getPezFil5(){
        return this.pezFil5;
    }
    setPezFil5(pezFil5){
        this.pezFil5 = pezFil5;
    }
}