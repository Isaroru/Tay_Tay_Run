class MapaMj3{
    constructor(){
        this.mapaMj3 = [];
        for(let i = 0 ; i < 6 ; i++){
            this.mapaMj3.push(new Array(7));
        }
        
        for(let fil = 0 ; fil < 6 ; fil++){
            for(let col = 0 ; col < 7 ; col++){
                this.mapaMj3[fil][col] = 0;
            }
        }
        this.setObstaculosMj3()
    }
    setObstaculosMj3(){
        this.mapaMj3[0][0] = 1;
        this.mapaMj3[0][1] = 1;
        this.mapaMj3[0][2] = 1;
        this.mapaMj3[0][3] = 1;
        this.mapaMj3[0][4] = 1;
        this.mapaMj3[0][5] = 1;
        this.mapaMj3[0][6] = 1;
        this.mapaMj3[0][7] = 1;
        this.mapaMj3[1][0] = 1;
        this.mapaMj3[2][0] = 1;
        this.mapaMj3[3][0] = 1;
        this.mapaMj3[4][0] = 1;
        this.mapaMj3[5][0] = 1;
    }
    mostrar(){
        image(minJ3, 0, 0);
    }
    getMapReferenceMj3(){
        return this.mapaMj3;
    }
}