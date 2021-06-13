class LevelD{
    constructor(){
        this.mapa4 = [];
        for(let i = 0 ; i < 7 ; i++){
            this.mapa4.push(new Array(12));
        }
        
        for(let fil = 0 ; fil < 7 ; fil++){
            for(let col = 0 ; col < 12 ; col++){
                this.mapa4[fil][col] = 0;
            }
        }
        this.setObstaculos4();
    }
    setObstaculos4(){
        this.mapa4[0][0] = 1;
        this.mapa4[0][1] = 1;
        this.mapa4[0][2] = 1;
        this.mapa4[0][3] = 1;
        this.mapa4[0][4] = 1;
        this.mapa4[0][5] = 1;
        this.mapa4[0][6] = 1;
        this.mapa4[0][7] = 1;
        this.mapa4[0][8] = 1;
        this.mapa4[0][9] = 1;
        this.mapa4[0][10] = 1;
        this.mapa4[0][11] = 1;
        this.mapa4[1][1] = 1;
        this.mapa4[1][2] = 1;
        this.mapa4[1][3] = 1;
        this.mapa4[1][4] = 1;
        this.mapa4[1][9] = 1;
        this.mapa4[1][10] = 1;
        this.mapa4[1][11] = 1;
        this.mapa4[2][1] = 1;
        this.mapa4[2][3] = 1;
        this.mapa4[2][4] = 1;
        this.mapa4[2][6] = 1;
        this.mapa4[2][7] = 1;
        this.mapa4[2][9] = 1;
        this.mapa4[2][10] = 1;
        this.mapa4[2][11] = 1;
        this.mapa4[3][2] = 1;
        this.mapa4[3][6] = 1;
        this.mapa4[3][7] = 1;
        this.mapa4[3][9] = 1;
        this.mapa4[3][10] = 1;
        this.mapa4[3][11] = 1;
        this.mapa4[4][6] = 1;
        this.mapa4[4][7] = 1;
        this.mapa4[5][0] = 1;
        this.mapa4[5][1] = 1;
        this.mapa4[5][2] = 1;
        this.mapa4[5][3] = 1;
        this.mapa4[5][4] = 1;
        }
    
    mostrar(){
        image(fondo4, 0, 0);
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

   getMapReference4(){
       return this.mapa4;
   }
}