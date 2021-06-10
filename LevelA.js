class LevelA{
    constructor(){
        this.mapa = [];
        for(let i = 0 ; i < 7 ; i++){
            this.mapa.push(new Array(12));
        }
        
        for(let fil = 0 ; fil < 7 ; fil++){
            for(let col = 0 ; col < 12 ; col++){
                this.mapa[fil][col] = 0;
            }
        }
        this.setObstaculos();

        this.time = 120;
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
        image(barra1, 1200, 0);


    
        /*
        for(let fil = 0 ; fil < 7 ; fil++){
            for(let col = 0 ; col < 12 ; col++){
                //this.mapa[fil][col] = 0;
                if(this.mapa[fil][col] === 0){
                    fill(255);
                }else if (this.mapa[fil][col] === 1){
                    fill(0);
                }
                rect(col*100,fil*100,100,100);
            }
        }
        */
    }

   getMapReference(){
       return this.mapa;
   }
}