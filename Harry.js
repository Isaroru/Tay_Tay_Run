class Harry{
    constructor(mapReference2,hCol,hFil,hPosX,hPosY,hDir, moving,hCol2,hFil2,hPosX2,hPosY2,hCol3,hFil3,hPosX3,hPosY3){
        this.hCol = hCol;
        this.hFil = hFil;
        this.hPosX = hPosX; 
        this.hPosY = hPosY;
        this.mapReference2 = mapReference2;
        this.hDir = hDir;
        this.moving = moving;

        this.hCol2 = hCol2;
        this.hFil2 = hFil2;
        this.hPosX2 = hPosX2; 
        this.hPosY2 = hPosY2;

        this.hCol3 = hCol3;
        this.hFil3 = hFil3;
        this.hPosX3 = hPosX3; 
        this.hPosY3 = hPosY3;

        this.hCol = 0;
        this.hFil = 5;
        this.hPosX = (this.hCol * 100); 
        this.hPosY = (this.hFil * 100);
        this.hDir = 1;
        this.moving = false;

        this.hCol2 = 11;
        this.hFil2 = 2;
        this.hPosX2 = (this.hCol2 * 100); 
        this.hPosY2 = (this.hFil2 * 100);
        this.hDir2 = 0;

        this.hCol3 = 3;
        this.hFil3 = 2;
        this.hPosX3 = (this.hCol3 * 100); 
        this.hPosY3 = (this.hFil3 * 100);
        this.hDir3 = 1;
    }

    mostrar(){
        image(harry, this.hPosX, this.hPosY,100,100);
        image(harry, this.hPosX2, this.hPosY2,100,100);
        image(harry, this.hPosX3, this.hPosY3,100,100);
    }
    
    mover() {
        if (frameCount % 20 == 0) {
            this.moveEnemy(this.mapReference2);
        }
    }
    mover2(){
        if (frameCount % 20 == 0) {
            this.moveEnemy2(this.mapReference2);
        }
    }
    mover3(){
        if (frameCount % 20 == 0) {
            this.moveEnemy3(this.mapReference2);
        }
    }
    

    moveEnemy() {
        switch (this.hDir) {
            case 0: // izquierda
                if (this.hCol - 1 >= 0) {
                    if (this.mapReference2[this.hFil][this.hCol - 1] === 0) {
                        this.hCol -= 1;
                        this.moving = true;
                    }
                }
                break;
            case 1: // derecha
                if (this.hCol + 1 < 12) {
                    if (this.mapReference2[this.hFil][this.hCol + 1] === 0) {
                        this.hCol += 1;
                        this.moving = true;
                    }
                }
                break;
        }
        if(this.hPosX <= 0){
            this.hDir = 1;
        }else if(this.hPosX >= 400){
            this.hDir = 0;
        }
        this.hPosX = (this.hCol * 100); // pixeles
        this.hPosY = (this.hFil * 100); // pixeles
    }
    moveEnemy2() {
        switch (this.hDir2) {
            case 0: // izquierda
                if (this.hCol2 - 1 >= 0) {
                    if (this.mapReference2[this.hFil2][this.hCol2 - 1] === 0) {
                        this.hCol2 -= 1;
                        this.moving = true;
                    }
                }
                break;
            case 1: // derecha
                if (this.hCol2 + 1 < 12) {
                    if (this.mapReference2[this.hFil2][this.hCol2 + 1] === 0) {
                        this.hCol2 += 1;
                        this.moving = true;
                    }
                }
                break;
        }
        if(this.hPosX2 <= 300){
            this.hDir2 = 1;
        }else if(this.hPosX2 >= 1100){
            this.hDir2 = 0;
        }
        this.hPosX2 = (this.hCol2 * 100);
        this.hPosY2 = (this.hFil2 * 100);
    }

    moveEnemy3() {
        switch (this.hDir3) {
            case 0: // arriba
                if (this.hCol3 - 1 >= 0) {
                    if (this.mapReference2[this.hFil3 - 1][this.hCol3] === 0) {
                        this.hFil3 -= 1;
                        this.moving = true;
                    }
                }
                break;
            case 1: // abajo
                if (this.hCol3 + 1 < 7) {
                    if (this.mapReference2[this.hFil3 + 1][this.hCol3] === 0) {
                        this.hFil3 += 1;
                        this.moving = true;
                    }
                }
                break;
        }
        if(this.hPosY3 <= 300){
            this.hDir3 = 1;
        }else if(this.hPosY3 >= 500){
            this.hDir3 = 0;
        }
        this.hPosX3 = (this.hCol3 * 100);
        this.hPosY3 = (this.hFil3 * 100); 
    }
    getHPosX(){
        return this.hPosX;
    }
    setHPosX(hPosX){
        this.hPosX = hPosX;
    }
    getHPosY(){
        return this.hPosY;
    }
    setHPosY(hPosY){
        this.hPosY = hPosY;
    }
    getHCol(){
        return this.hCol;
    }
    setHCol(hCol){
        this.hCol = hCol;
    }
    getHFil(){
        return this.hFil;
    }
    setHFil(hFil){
        this.hFil = hFil;
    }

    getHPosX2(){
        return this.hPosX2;
    }
    setHPosX2(hPosX2){
        this.hPosX2 = hPosX2;
    }
    getHPosY2(){
        return this.hPosY2;
    }
    setHPosY2(hPosY2){
        this.hPosY2 = hPosY2;
    }
    getHCol2(){
        return this.hCol2;
    }
    setHCol2(hCol2){
        this.hCol2 = hCol2;
    }
    getHFil2(){
        return this.hFil2;
    }
    setHFil2(hFil2){
        this.hFil2 = hFil2;
    }

    getHPosX3(){
        return this.hPosX3;
    }
    setHPosX3(hPosX3){
        this.hPosX3 = hPosX3;
    }
    getHPosY3(){
        return this.hPosY3;
    }
    setHPosY3(hPosY3){
        this.hPosY3 = hPosY3;
    }
    getHCol3(){
        return this.hCol3;
    }
    setHCol3(hCol3){
        this.hCol3 = hCol3;
    }
    getHFil3(){
        return this.hFil3;
    }
    setHFil3(hFil3){
        this.hFil3 = hFil3;
    }
    

    
}