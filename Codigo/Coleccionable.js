class Coleccionable {
    constructor(x,y,tamaño) {
        this.x = x;
        this.y = y;
        this.x1 = x + tamaño;
        this.y1 = y + tamaño;
        this.tamaño = tamaño;
        this.coleccionado = false;
    }

    dibujar(imagen) {
        if (this.coleccionado === false) {
            fill(this.x, this.y, this.tamaño);
            image(imagen, this.x, this.y, this.tamaño, this.tamaño);
        } else { 
            console.log(this.coleccionado)
        }
    }
    
    getPos() {
        let posiciones = [];
        posiciones.push(this.x, this.y, this.x1, this.y1);
        return posiciones;
    }

    setColeccionado(valor) { 
        this.coleccionado = valor;
    }

    getColeccionado() { 
        return this.coleccionado;
    }
    }
