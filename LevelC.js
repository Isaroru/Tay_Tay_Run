class LevelC{
    constructor(){
        this.mapa3 = [];
        for(let i = 0 ; i < 7 ; i++){
            this.mapa3.push(new Array(12));
        }
        
        for(let fil = 0 ; fil < 7 ; fil++){
            for(let col = 0 ; col < 12 ; col++){
                this.mapa3[fil][col] = 0;
            }
        }
        this.setObstaculos3();
    }
    setObstaculos3(){
        this.mapa3[0][0] = 1;
        this.mapa3[0][1] = 1;
        this.mapa3[0][2] = 1;
        this.mapa3[0][3] = 1;
        this.mapa3[0][4] = 1;
        this.mapa3[0][5] = 1;
        this.mapa3[0][6] = 1;
        this.mapa3[0][7] = 1;
        this.mapa3[0][8] = 1;
        this.mapa3[0][9] = 1;
        this.mapa3[0][10] = 1;
        this.mapa3[0][11] = 1;
        this.mapa3[1][1] = 1;
        this.mapa3[1][3] = 1;
        this.mapa3[1][4] = 1;
        this.mapa3[1][5] = 1;
        this.mapa3[1][7] = 1;
        this.mapa3[1][8] = 1;
        this.mapa3[1][9] = 1;
        this.mapa3[1][10] = 1;
        this.mapa3[1][11] = 1;
        this.mapa3[2][8] = 1;
        this.mapa3[3][1] = 1;
        this.mapa3[3][3] = 1;
        this.mapa3[3][4] = 1;
        this.mapa3[3][5] = 1;
        this.mapa3[3][7] = 1;
        this.mapa3[3][8] = 1;
        this.mapa3[4][8] = 1;
        this.mapa3[5][0] = 1;
        this.mapa3[5][1] = 1;
        this.mapa3[5][2] = 1;
        this.mapa3[5][8] = 1;
        this.mapa3[6][0] = 1;
        this.mapa3[6][1] = 1;
        this.mapa3[6][2] = 1;
    }
    mostrar(){
        image(fondo3, 0, 0);
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

   getMapReference3(){
       return this.mapa3;
   }
}