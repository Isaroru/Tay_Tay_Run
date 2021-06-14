class CabezaScooter{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.vida = 1;



    }

    mostrarCScooter(x,y){
        if(this.vida > 0){

            image(cabezaS,this.x,this.y);

            /*stroke(255, 0, 0);
			strokeWeight(5);
			point(this.x + 30, this.y);
			point(this.x + 30, this.y+90)
			point(this.x+85, this.y)
			noStroke()*/
        }


    }

    getX(){
		return this.x;
	}

	getY(){
		return this.y;
	}

	setVida(vida){
		this.vida = vida;
	}

	getVida(){
		return this.vida;
	}

}