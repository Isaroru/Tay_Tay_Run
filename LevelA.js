class LevelA{
    //[0][0][0][0]
    //[0][1][0][0]   
    //[0][0][1][0]
    //[0][0][0][0]
    
    constructor(){
        this.mapa = [];  
        this.taylor = new Tay();
        for(let i = 0 ; i < 7 ; i++){
            this.mapa.push(new Array(12));
        }
        
        for(let fil = 0 ; fil < 7 ; fil++){
            for(let col = 0 ; col < 12 ; col++){
                this.mapa[fil][col] = 0;
            }
        }
        console.log(this.mapa);
        this.setObstaculos();
    }
    // [fila][col] --> y, x
    setObstaculos(){
        this.mapa[0][0] = 1;
        this.mapa[0][1] = 1;
        this.mapa[0][2] = 1;
        this.mapa[0][3] = 1;
        this.mapa[0][4] = 1;
        this.mapa[0][5] = 1;
        this.mapa[0][6] = 1;
        this.mapa[0][7] = 1;
        this.mapa[0][8] = 1;
        this.mapa[0][9] = 1;
        this.mapa[0][10] = 1;
        this.mapa[0][11] = 1;
        this.mapa[1][2] = 1;
        this.mapa[1][3] = 1;
        this.mapa[1][4] = 1;
        this.mapa[1][7] = 1;
        this.mapa[1][8] = 1;
        this.mapa[1][9] = 1;
        this.mapa[2][3] = 1;
        this.mapa[2][4] = 1;
        this.mapa[2][7] = 1;
        this.mapa[2][8] = 1;
        this.mapa[4][0] = 1;
        this.mapa[4][1] = 1;
        this.mapa[4][2] = 1;
        this.mapa[4][3] = 1;
        this.mapa[4][4] = 1;
        this.mapa[4][5] = 1;
        this.mapa[4][6] = 1;
        this.mapa[4][7] = 1;
        this.mapa[4][8] = 1;
        this.mapa[4][9] = 1;
        this.mapa[4][10] = 1;
        this.mapa[6][3] = 1;
        this.mapa[6][4] = 1;
        this.mapa[6][5] = 1;
        this.mapa[6][6] = 1;
        this.mapa[6][7] = 1;
        this.mapa[6][8] = 1;
        this.mapa[6][9] = 1;
        this.mapa[6][10] = 1;
    }

    mostrar(){
        image(fondo1, 0, 0);
        
        /*for(let fil = 0 ; fil < 7 ; fil++){
            for(let col = 0 ; col < 12 ; col++){
                //this.mapa[fil][col] = 0;
                if(this.mapa[fil][col] === 0){
                    fill(255);
                }else{
                    fill(0);
                }
                rect(col*100,fil*100,100,100);
            }
        }*/
    }

    /*mover(){
        if(keyIsPressed){
            switch (keyCode) {
                case LEFT_ARROW: // izquierda
                if (this.taylor.getPjCol - 1 >= 0) {
                    if (this.mapa[this.taylor.getPjFil][this.taylor.getPjCol - 1] === 0) {
                    this.taylor.getPjCol -= 1;
                    }
                }
                break;
                case RIGHT_ARROW: // derecha
                if (this.taylor.getPjCol + 1 < 12) {
                    if (this.mapa[this.taylor.getPjFil][this.taylor.getPjCol + 1] === 0) {
                    this.taylor.getPjCol += 1;
                    }
                }console.log(RIGHT_ARROW);
                break;
                case UP_ARROW: // arriba
                if (this.taylor.getPjFil - 1 >= 0) {
                    if (this.mapa[this.taylor.getPjFil - 1][this.taylor.getPjCol] === 0) {
                    this.taylor.getPjFil -= 1;
                    }
                }
                break;
                case DOWN_ARROW: // abajo
                if (this.taylor.getPjFil + 1 < 12) {
                    if (this.mapa[this.taylor.getPjFil + 1][this.taylor.getPjCol] === 0) {
                    this.taylor.getPjFil += 1;
                    }
                }
                break;
                }
                this.taylor.getXPos = (this.taylor.getPjCol * 100) + 0;
                this.taylor.getYPos = (this.taylor.getPjFil * 100) + 100;
            }
    }
    */
   getMapReference(){
       return this.mapa;
   }
}