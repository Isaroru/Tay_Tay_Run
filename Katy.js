class Katy{
    constructor(mapReference,kCol,kFil,kPosX,kPosY,kDir, moving,kCol2,kFil2,kPosX2,kPosY2,kDir2,kCol3,kFil3,kPosX3,kPosY3,kDir3){
        this.kCol = kCol;
        this.kFil = kFil;
        this.kPosX = kPosX; 
        this.kPosY = kPosY;
        this.mapReference = mapReference;
        this.kDir = kDir;
        this.moving = moving;

        this.kCol2 = kCol2;
        this.kFil2 = kFil2;
        this.kPosX2 = kPosX2; 
        this.kPosY2 = kPosY2;
        this.kDir2 = kDir2;

        this.kCol3 = kCol3;
        this.kFil3 = kFil3;
        this.kPosX3 = kPosX3; 
        this.kPosY3 = kPosY3;
        this.kDir3 = kDir3;

        this.kCol = 7;
        this.kFil = 2;
        this.kPosX = (this.kCol * 100); 
        this.kPosY = (this.kFil * 100);
        this.kDir = 0;
        this.moving = false;

        this.kCol2 = 0;
        this.kFil2 = 4;
        this.kPosX2 = (this.kCol2 * 100); 
        this.kPosY2 = (this.kFil2 * 100);
        this.kDir2 = 1;

        this.kCol3 = 9;
        this.kFil3 = 2;
        this.kPosX3 = (this.kCol3 * 100); 
        this.kPosY3 = (this.kFil3 * 100);
        this.kDir3 = 1;
    }

    mostrar(){
        image(katy, this.kPosX, this.kPosY);
        image(katy, this.kPosX2, this.kPosY2);
        image(katy, this.kPosX3, this.kPosY3);
    }
    
    mover() {
        if (frameCount % 20 == 0) {
            this.moveEnemy(this.mapReference);
        }
    }

    mover2() {
        if (frameCount % 20 == 0) {
            this.moveEnemy2(this.mapReference);
        }
    }
    mover3() {
        if (frameCount % 20 == 0) {
            this.moveEnemy3(this.mapReference);
        }
    }
    

    moveEnemy() {
        switch (this.kDir) {
            case 0: // izquierda
                if (this.kCol - 1 >= 0) {
                    if (this.mapReference[this.kFil][this.kCol - 1] === 0) {
                        this.kCol -= 1;
                        this.moving = true;
                    }
                }
                break;
            case 1: // derecha
                if (this.kCol + 1 < 12) {
                    if (this.mapReference[this.kFil][this.kCol + 1] === 0) {
                        this.kCol += 1;
                        this.moving = true;
                    }
                }
                break;
        }
        if(this.kPosX >= 700){
            this.kDir = 0;
        }else if(this.kPosX <= 0){
            this.kDir = 1;
        }
        this.kPosX = (this.kCol * 100);
        this.kPosY = (this.kFil * 100);
    }

    moveEnemy2() {
        switch (this.kDir2) {
            case 0: // izquierda
                if (this.kCol2 - 1 >= 0) {
                    if (this.mapReference[this.kFil2][this.kCol2 - 1] === 0) {
                        this.kCol2 -= 1;
                        this.moving = true;
                    }
                }
                break;
            case 1: // derecha
                if (this.kCol2 + 1 < 12) {
                    if (this.mapReference[this.kFil2][this.kCol2 + 1] === 0) {
                        this.kCol2 += 1;
                        this.moving = true;
                    }
                }
                break;
        }
        
        if(this.kPosX2 <= 0){
            this.kDir2 = 1;
        }else if(this.kPosX2 >= 700){
            this.kDir2 = 0;
        }
        this.kPosX2 = (this.kCol2 * 100);
        this.kPosY2 = (this.kFil2 * 100);
    }
    moveEnemy3() {
        switch (this.kDir3) {
            case 0: // arriba
                if (this.kFil3 - 1 >= 0) {
                    if (this.mapReference2[this.kFil3 - 1][this.kCol3] === 0) {
                        this.kFil3 -= 1;
                        this.moving = true;
                    }
                }
                break;
            case 1: // abajo
                if (this.kFil3 + 1 < 7) {
                    if (this.mapReference2[this.kFil3 + 1][this.kCol3] === 0) {
                        this.kFil3 += 1;
                        this.moving = true;
                    }
                }
                break;
        }
        if(this.kPosY3 <= 200){
            this.kDir3 = 1;
        }else if(this.kPosY3 >= 600){
            this.kDir3 = 0;
        }
        this.kPosX3 = (this.kCol3 * 100);
        this.kPosY3 = (this.kFil3 * 100); 
    }

    getKPosX(){
        return this.kPosX;
    }
    setKPosX(kPosX){
        this.kPosX = kPosX;
    }
    getKPosY(){
        return this.kPosY;
    }
    setKPosY(kPosY){
        this.kPosY = kPosY;
    }
    getKCol(){
        return this.kCol;
    }
    setKCol(kCol){
        this.kCol = kCol;
    }
    getKFil(){
        return this.kFil;
    }
    setKFil(kFil){
        this.kFil = kFil;
    }

    getKPosX2(){
        return this.kPosX2;
    }
    setKPosX2(KPosX2){
        this.kPosX2 = kPosX2;
    }
    getKPosY2(){
        return this.kPosY2;
    }
    setKPosY2(kPosY2){
        this.kPosY2 = kPosY2;
    }
    getKCol2(){
        return this.kCol2;
    }
    setKCol2(kCol2){
        this.kCol2 = kCol2;
    }
    getKFil2(){
        return this.kFil2;
    }
    setKFil2(kFil2){
        this.kFil2 = kFil2;
    }
    

    
}