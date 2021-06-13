class Scooter{
    constructor(mapReference,sCol,sFil,sPosX,sPosY,sDir, moving,sCol2,sFil2,sPosX2,sPosY2,sDir2,
        sCol3,sFil3,sPosX3,sPosY3,sDir3,sCol4,sFil4,sPosX4,sPosY4,sDir4,sCol5,sFil5,sPosX5,sPosY5,sDir5){
        this.sCol = sCol;
        this.sFil = sFil;
        this.sPosX = sPosX; 
        this.sPosY = sPosY;
        this.mapReference = mapReference;
        this.sDir = sDir;
        this.moving = moving;

        this.sCol2 = sCol2;
        this.sFil2 = sFil2;
        this.sPosX2 = sPosX2; 
        this.sPosY2 = sPosY2;
        this.sDir2 = sDir2;

        this.sCol3 = sCol3;
        this.sFil3 = sFil3;
        this.sPosX3 = sPosX3; 
        this.sPosY3 = sPosY3;
        this.sDir3 = sDir3;

        this.sCol4 = sCol4;
        this.sFil4 = sFil4;
        this.sPosX4 = sPosX4; 
        this.sPosY4 = sPosY4;
        this.sDir4 = sDir4;

        this.sCol5 = sCol5;
        this.sFil5 = sFil5;
        this.sPosX5 = sPosX5; 
        this.sPosY5 = sPosY5;
        this.sDir5 = sDir5;

        this.sCol = 5;
        this.sFil = 3;
        this.sPosX = (this.sCol * 100); 
        this.sPosY = (this.sFil * 100);
        this.sDir = 0;
        this.moving = false;

        this.sCol2 = 11;
        this.sFil2 = 5;
        this.sPosX2 = (this.sCol2 * 100); 
        this.sPosY2 = (this.sFil2 * 100);
        this.sDir2 = 1;

        this.sCol3 = 6;
        this.sFil3 = 4;
        this.sPosX3 = (this.sCol3 * 100); 
        this.sPosY3 = (this.sFil3 * 100);
        this.sDir3 = 1;

        this.sCol4 = 7;
        this.sFil4 = 6;
        this.sPosX4 = (this.sCol4 * 100); 
        this.sPosY4 = (this.sFil4 * 100);
        this.sDir4 = 0;

        this.sCol5 = 8;
        this.sFil5 = 4;
        this.sPosX5 = (this.sCol5 * 100); 
        this.sPosY5 = (this.sFil5 * 100);
        this.sDir5 = 1;
    }

    mostrar(){
        image(scooter, this.sPosX, this.sPosY);
        image(scooter, this.sPosX2, this.sPosY2);
        image(scooter, this.sPosX3, this.sPosY3);
        image(scooter, this.sPosX4, this.sPosY4);
        image(scooter, this.sPosX5, this.sPosY5);
    }
    
    mover() {
        if (frameCount % 20 == 0) {
            this.moveEnemy(this.mapReference);
        }
    }
    mover2() {
        if (frameCount % 30 == 0) {
            this.moveEnemy2(this.mapReference);
        }
    }
    mover3() {
        if (frameCount % 30 == 0) {
            this.moveEnemy3(this.mapReference);
        }
    }
    mover4() {
        if (frameCount % 30 == 0) {
            this.moveEnemy4(this.mapReference);
        }
    }
    mover5() {
        if (frameCount % 30 == 0) {
            this.moveEnemy5(this.mapReference);
        }
    }

    moveEnemy() {
        switch (this.sDir) {
            case 0: // izquierda
                if (this.sCol - 1 >= 0) {
                    if (this.mapReference[this.sFil][this.sCol - 1] === 0) {
                        this.sCol -= 1;
                        this.moving = true;
                    }
                }
                break;
            case 1: // derecha
                if (this.sCol + 1 < 12) {
                    if (this.mapReference[this.sFil][this.sCol + 1] === 0) {
                        this.sCol += 1;
                        this.moving = true;
                    }
                }
                break;
        }
        if(this.sPosX <= 0){
            this.sDir = 1;
        }else if(this.sPosX >= 500){
            this.sDir = 0;
        }
        this.sPosX = (this.sCol * 100);
        this.sPosY = (this.sFil * 100);
    }
    moveEnemy2() {
        switch (this.sDir2) {
            case 0: // arriba
                if (this.sFil2 - 1 >= 0) {
                    if (this.mapReference[this.sFil2 - 1][this.sCol2] === 0) {
                        this.sFil2 -= 1;
                        this.moving = true;
                    }
                }
                break;
            case 1: // abajo
                if (this.sFil2 + 1 < 7) {
                    if (this.mapReference[this.sFil2 + 1][this.sCol2] === 0) {
                        this.sFil2 += 1;
                        this.moving = true;
                    }
                }
                break;
        }
        if(this.sPosY2 <= 200){
            this.sDir2 = 1;
        }else if(this.sPosY2 >= 600){
            this.sDir2 = 0;
        }
        this.sPosX2 = (this.sCol2 * 100);
        this.sPosY2 = (this.sFil2 * 100); 
    }

    moveEnemy3() {
        switch (this.sDir3) {
            case 0: // arriba
                if (this.sFil3 - 1 >= 0) {
                    if (this.mapReference[this.sFil3 - 1][this.sCol3] === 0) {
                        this.sFil3 -= 1;
                        this.moving = true;
                    }
                }
                break;
            case 1: // abajo
                if (this.sFil3 + 1 < 7) {
                    if (this.mapReference[this.sFil3 + 1][this.sCol3] === 0) {
                        this.sFil3 += 1;
                        this.moving = true;
                    }
                }
                break;
        }
        if(this.sPosY3 <= 400){
            this.sDir3 = 1;
        }else if(this.sPosY3 >= 600){
            this.sDir3 = 0;
        }
        this.sPosX3 = (this.sCol3 * 100);
        this.sPosY3 = (this.sFil3 * 100); 
    }
    moveEnemy4() {
        switch (this.sDir4) {
            case 0: // arriba
                if (this.sFil4 - 1 >= 0) {
                    if (this.mapReference[this.sFil4 - 1][this.sCol4] === 0) {
                        this.sFil4 -= 1;
                        this.moving = true;
                    }
                }
                break;
            case 1: // abajo
                if (this.sFil4 + 1 < 7) {
                    if (this.mapReference[this.sFil4 + 1][this.sCol4] === 0) {
                        this.sFil4 += 1;
                        this.moving = true;
                    }
                }
                break;
        }
        if(this.sPosY4 <= 400){
            this.sDir4 = 1;
        }else if(this.sPosY4 >= 600){
            this.sDir4 = 0;
        }
        this.sPosX4 = (this.sCol4 * 100);
        this.sPosY4 = (this.sFil4 * 100); 
    }
    moveEnemy5() {
        switch (this.sDir5) {
            case 0: // arriba
                if (this.sFil5 - 1 >= 0) {
                    if (this.mapReference[this.sFil5 - 1][this.sCol5] === 0) {
                        this.sFil5 -= 1;
                        this.moving = true;
                    }
                }
                break;
            case 1: // abajo
                if (this.sFil5 + 1 < 7) {
                    if (this.mapReference[this.sFil5 + 1][this.sCol5] === 0) {
                        this.sFil5 += 1;
                        this.moving = true;
                    }
                }
                break;
        }
        if(this.sPosY5 <= 400){
            this.sDir5 = 1;
        }else if(this.sPosY5 >= 600){
            this.sDir5 = 0;
        }
        this.sPosX5 = (this.sCol5 * 100);
        this.sPosY5 = (this.sFil5 * 100); 
    }
    
    getSPosX(){
        return this.sPosX;
    }
    setSPosX(sPosX){
        this.sPosX = sPosX;
    }
    getSPosY(){
        return this.sPosY;
    }
    setSPosY(sPosY){
        this.sPosY = sPosY;
    }
    getSCol(){
        return this.sCol;
    }
    setSCol(sCol){
        this.sCol = sCol;
    }
    getSFil(){
        return this.sFil;
    }
    setSFil(sFil){
        this.sFil = sFil;
    }

    getSPosX2(){
        return this.sPosX2;
    }
    setSPosX2(sPosX2){
        this.sPosX2 = sPosX2;
    }
    getSPosY2(){
        return this.sPosY2;
    }
    setSPosY2(sPosY2){
        this.sPosY2 = sPosY2;
    }
    getSCol2(){
        return this.sCol2;
    }
    setSCol2(sCol2){
        this.sCol2 = sCol2;
    }
    getSFil2(){
        return this.sFil2;
    }
    setSFil2(sFil2){
        this.sFil2 = sFil2;
    }
    getSPosX3(){
        return this.sPosX3;
    }
    setSPosX3(sPosX3){
        this.sPosX3 = sPosX3;
    }
    getSPosY3(){
        return this.sPosY3;
    }
    setSPosY3(sPosY3){
        this.sPosY3 = sPosY3;
    }
    getSCol3(){
        return this.sCol3;
    }
    setSCol3(sCol3){
        this.sCol3 = sCol3;
    }
    getSFil3(){
        return this.sFil3;
    }
    setSFil3(sFil3){
        this.sFil3 = sFil3;
    }

    getSPosX4(){
        return this.sPosX4;
    }
    setSPosX4(sPosX4){
        this.sPosX4 = sPosX4;
    }
    getSPosY4(){
        return this.sPosY4;
    }
    setSPosY4(sPosY4){
        this.sPosY4 = sPosY4;
    }
    getSCol4(){
        return this.sCol4;
    }
    setSCol4(sCol4){
        this.sCol4 = sCol4;
    }
    getSFil4(){
        return this.sFil4;
    }
    setSFil4(sFil4){
        this.sFil4 = sFil4;
    }

    getSPosX5(){
        return this.sPosX5;
    }
    setSPosX5(sPosX5){
        this.sPosX5 = sPosX5;
    }
    getSPosY5(){
        return this.sPosY5;
    }
    setSPosY5(sPosY5){
        this.sPosY5 = sPosY5;
    }
    getSCol5(){
        return this.sCol5;
    }
    setSCol5(sCol5){
        this.sCol5 = sCol5;
    }
    getSFil5(){
        return this.sFil5;
    }
    setSFil5(sFil5){
        this.sFil5 = sFil5;
    }
    
}