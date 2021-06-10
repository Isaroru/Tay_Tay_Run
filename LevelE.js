class LevelE{
    constructor(){
        this.mapa5 = [];
        for(let i = 0 ; i < 7 ; i++){
            this.mapa5.push(new Array(12));
        }
        
        for(let fil = 0 ; fil < 7 ; fil++){
            for(let col = 0 ; col < 12 ; col++){
                this.mapa5[fil][col] = 0;
            }
        }
        this.setObstaculos5();
    }
    setObstaculos5(){
        this.mapa5[0][0] = 1;
        this.mapa5[0][1] = 1;
        this.mapa5[0][2] = 1;
        this.mapa5[0][3] = 1;
        this.mapa5[0][4] = 1;
        this.mapa5[0][5] = 1;
        this.mapa5[0][6] = 1;
        this.mapa5[0][7] = 1;
        this.mapa5[0][8] = 1;
        this.mapa5[0][9] = 1;
        this.mapa5[0][10] = 1;
        this.mapa5[0][11] = 1;
        this.mapa5[1][2] = 1;
        this.mapa5[1][3] = 1;
        this.mapa5[1][4] = 1;
        this.mapa5[1][5] = 1;
        this.mapa5[1][10] = 1;
        this.mapa5[2][6] = 1;
        this.mapa5[2][7] = 1;
        this.mapa5[2][8] = 1;
        this.mapa5[2][10] = 1;
        this.mapa5[3][6] = 1;
        this.mapa5[3][7] = 1;
        this.mapa5[3][8] = 1;
        this.mapa5[3][10] = 1;
        this.mapa5[4][10] = 1;
        this.mapa5[5][0] = 1;
        this.mapa5[5][1] = 1;
        this.mapa5[5][2] = 1;
        this.mapa5[5][3] = 1;
        this.mapa5[5][10] = 1;
        this.mapa5[6][0] = 1;
        this.mapa5[6][1] = 1;
        this.mapa5[6][2] = 1;
        this.mapa5[6][3] = 1;
    }
    mostrar(){
        image(fondo5, 0, 0);
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

   getMapReference5(){
       return this.mapa5;
   }
}