class Kim{
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

        this.kCol = 5;
        this.kFil = 4;
        this.kPosX = (this.kCol * 100); 
        this.kPosY = (this.kFil * 100);
        this.kDir = 0;
        this.moving = false;
    }

    mostrar(){
        image(kim, this.kPosX, this.kPosY);
    }
    
    mover() {
        if (frameCount % 20 == 0) {
            this.moveEnemy(this.mapReference);
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
            case 2: // arriba
                if (this.kFil - 1 >= 0) {
                    if (this.mapReference[this.kFil - 1][this.kCol] === 0) {
                        this.kFil -= 1;
                        this.moving = true;
                    }
                }
                break;
            case 3: // abajo
                if (this.kFil + 1 < 7) {
                    if (this.mapReference[this.kFil + 1][this.kCol] === 0) {
                        this.kFil += 1;
                        this.moving = true;
                    }
                }
                break;
        }
        if (!this.moving){
            this.kDir = int(random(0,4));
        }
        this.kPosX = (this.kCol * 100);
        this.kPosY = (this.kFil * 100);
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