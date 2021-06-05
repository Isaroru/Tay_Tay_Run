class LevelB{
    constructor(){
        this.mapa2 = [];
        for(let i = 0 ; i < 7 ; i++){
            this.mapa2.push(new Array(12));
        }
        
        for(let fil = 0 ; fil < 7 ; fil++){
            for(let col = 0 ; col < 12 ; col++){
                this.mapa2[fil][col] = 0;
            }
        }
        this.setObstaculos2();
    }
    setObstaculos2(){
        this.mapa2[0][0] = 1;
        this.mapa2[0][1] = 1;
        this.mapa2[0][2] = 1;
        this.mapa2[0][3] = 1;
        this.mapa2[0][4] = 1;
        this.mapa2[0][5] = 1;
        this.mapa2[0][6] = 1;
        this.mapa2[0][7] = 1;
        this.mapa2[0][8] = 1;
        this.mapa2[0][9] = 1;
        this.mapa2[0][10] = 1;
        this.mapa2[0][11] = 1;
        this.mapa2[1][2] = 1;
        this.mapa2[1][3] = 1;
        this.mapa2[1][4] = 1;
        this.mapa2[1][5] = 1;
        this.mapa2[1][6] = 1;
        this.mapa2[1][7] = 1;
        this.mapa2[1][8] = 1;
        this.mapa2[1][9] = 1;
        this.mapa2[2][2] = 1;
        this.mapa2[3][2] = 1;
        this.mapa2[4][2] = 1;
        this.mapa2[4][6] = 1;
        this.mapa2[4][7] = 1;
        this.mapa2[4][8] = 1;
        this.mapa2[4][9] = 1;
        this.mapa2[4][10] = 1;
        this.mapa2[4][11] = 1;
        this.mapa2[5][5] = 1;
        this.mapa2[5][6] = 1;
        this.mapa2[5][7] = 1;
        this.mapa2[5][8] = 1;
    }
    mostrar(){
        image(fondo2, 0, 0);
        image(barra2, 1200, 0);
        /*
        for(let fil = 0 ; fil < 7 ; fil++){
            for(let col = 0 ; col < 12 ; col++){
                if(this.mapa2[fil][col] === 0){
                    fill(255);
                }else if (this.mapa2[fil][col] === 1){
                    fill(0);
                }
                rect(col*100,fil*100,100,100);
            }
        }
        //*/
    }

   getMapReference2(){
       return this.mapa2;
   }
}