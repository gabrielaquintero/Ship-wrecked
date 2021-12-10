class Boton {

    
    constructor(x,y,largo) {
        this.x = x;
        this.y = y;
        this.undido = false;
        this.largo = largo;
        this.x2 = this.x + largo;
        this.y2 = this.y + largo;
        
    }

    dibujar() {
         fill(255, 0, 0);
        square(this.x, this.y, this.largo);
      
    }

    getPos() {
       
        let arregloPosiciones = [];
        arregloPosiciones.push(this.x);
        arregloPosiciones.push(this.x2);
        arregloPosiciones.push(this.y);
        arregloPosiciones.push(this.y2);
        return arregloPosiciones
    }

    setUndido() {
        this.undido = !this.undido


    }

    getUndido() {
        return this.undido;
    }

    
}

