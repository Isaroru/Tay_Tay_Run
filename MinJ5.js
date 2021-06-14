class MinJ5{
    constructor(x,y){

        this.x = 390;
        this.y = 600;
        this.cargador = []
        this.velDisparo = 0;


    }
    mostrarTanque(){
        fill(255,0,0);
        noStroke();
        rect(this.x,this.y,40,10);
        rect(this.x + 5, this.y - 5, 30, 5);
        rect(this.x + 15, this.y - 15, 10, 10);
        rect(this.x + 18, this.y - 20, 5 , 5);

        for (let index = 0; index < this.cargador.length; index++) {
        
            this.cargador[index].pintar();
            this.cargador[index].mover();
        }

    }

    moverTanque(){
        if(keyIsPressed){
            switch(key){
                case 'a':
                    this.x -=4;
                    break;
                case 'd':
                    this.x +=4;
                    break;
               case 'l':
                   if(this.velDisparo > 30) {
                        const newBala = new BalaMinJ5(this.x,this.y)
                        this.cargador.push(newBala);
                        this.velDisparo = 0;
                    }
                    break;
            }
        }


    }

    

    

    sumarVelDisparo() {
        this.velDisparo++;
    }

    getCargador() {
        return this.cargador;
    }
	



}