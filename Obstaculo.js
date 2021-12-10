class Obstaculo {
    constructor(x,y,tamaño) {
        this.x = x;
        this.y = y;
        this.x1 = x + tamaño;
        this.y1 = y + tamaño;
        this.tamaño = tamaño;
    }

        dibujar(imagen) {
            fill(this.x, this.y, this.tamaño);
<<<<<<< HEAD
=======
            square(this.x, this.y, this.tamaño);
>>>>>>> ad06ea94ea6bf7f511f09456b94fdc0a53f15299
            image(imagen, this.x, this.y, this.tamaño, this.tamaño);
    }
    
    getPos() {
        let posiciones = [];
        posiciones.push(this.x, this.y, this.x1, this.y1);
        return posiciones;
    }
    }

    
