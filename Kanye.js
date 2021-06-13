class Kanye{
    constructor(mapReference,kCol,kFil,kPosX,kPosY,kDir, moving,kCol2,kFil2,kPosX2,kPosY2,kDir2, moving2){
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
        this.moving2 = moving2;

        this.kCol = 11;
        this.kFil = 3;
        this.kPosX = (this.kCol * 100); 
        this.kPosY = (this.kFil * 100);
        this.kDir = 0;
        this.moving = false;

        this.kCol2 = 2;
        this.kFil2 = 5;
        this.kPosX2 = (this.kCol2 * 100); 
        this.kPosY2 = (this.kFil2 * 100);
        this.kDir2 = 3;
        this.moving2 = false;
    }

    mostrar(){
        image(kanye, this.kPosX, this.kPosY);
        image(kanye, this.kPosX2, this.kPosY2);
    }
    
    mover() {
        if (frameCount % 20 == 0) {
            this.moveEnemy(this.mapReference);
        }
    }
    mover2() {
        if (frameCount % 40 == 0) {
            this.moveEnemy2(this.mapReference);
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
        if(this.kPosX <= 0){
            this.kDir = 1;
        }else if(this.kPosX >= 1100){
            this.kDir = 0;
        }
        this.kPosX = (this.kCol * 100);
        this.kPosY = (this.kFil * 100);
    }
    moveEnemy2() {
        switch (this.kDir2) {
            case 0: // arriba
                if (this.kFil2 - 1 >= 0) {
                    if (this.mapReference[this.kFil2 - 1][this.kCol2] === 0) {
                        this.kFil2 -= 1;
                        this.moving = true;
                    }
                }
                break;
            case 1: // abajo
                if (this.kFil2 + 1 < 7) {
                    if (this.mapReference[this.kFil2 + 1][this.kCol2] === 0) {
                        this.kFil2 += 1;
                        this.moving = true;
                    }
                }
                break;
        }
        if(this.kPosY2 <=500){
            this.kDir2 = 1;
        }else if(this.kPosY2 >= 600){
            this.kDir2 = 0;
        }
        this.kPosX2 = (this.kCol2 * 100);
        this.kPosY2 = (this.kFil2 * 100); 
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