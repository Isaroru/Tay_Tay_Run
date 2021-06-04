class Kanye{
    constructor(mapReference,kCol,kFil,kPosX,kPosY,kDir, moving){
        this.kCol = kCol;
        this.kFil = kFil;
        this.kPosX = kPosX; 
        this.kPosY = kPosY;
        this.mapReference = mapReference;
        this.kDir = kDir;
        this.moving = moving;

        this.kCol = 11;
        this.kFil = 3;
        this.kPosX = (this.kCol * 100); 
        this.kPosY = (this.kFil * 100);
        this.kDir = 0;
        this.moving = false;
    }

    mostrar(){
        image(kanye, this.kPosX, this.kPosY);
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
        }
        //  this.kDir = int(random(0,2));
        if(this.kPosX <= 0){
            this.kDir = 1;
        }else if(this.kPosX >= 1100){
            this.kDir = 0;
        }
        this.kPosX = (this.kCol * 100); // pixeles
        this.kPosY = (this.kFil * 100); // pixeles
    }
    getKPosX(){
        return this.kPosX;
    }
    setXPos(kPosX){
        this.kPosX = kPosX;
    }
    getKPosY(){
        return this.kPosY;
    }
    setYPos(kPosY){
        this.kPosY = kPosY;
    }
    getKCol(){
        return this.kCol;
    }
    setKCol(pjCol){
        this.kCol = this.kCol;
    }
    getKFil(){
        return this.kFil;
    }
    setKFill(kFil){
        this.kFil = kFil;
    }

    
}