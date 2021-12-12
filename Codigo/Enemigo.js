class Enemigo {
    constructor(x, y, speed, tamaño) {
        this.x = x;
        this.y = y;
        this.x1 = this.x - 65;
        this.x2 = this.x1 + 100;
        this.y1 = this.y;
        this.y2 = this.y + 200;
        this.dir = 0;
        this.speed = speed;
        this.tamaño = tamaño;

     }
    

    dibujar(imagen) {
        fill(255, 0, 0);
        image(imagen, this.x - 65, this.y, this.tamaño, this.tamaño);
        this.cambiarDireccion();
        this.mover();
    }

    vidaPersonaje() { 
        
    }

    cambiarDireccion() { 
        if (frameCount % 60 == 0) {
            this.dir = int(random(0, 4));
        }
    }


    mover() {
    

        if (this.x > 850) { 
            this.x = 850;
            this.cambiarDireccion();
        }

        if (this.x < 150) { 
            this.x = 150;
            this.cambiarDireccion();
        }

          if (this.y > 850) { 
            this.y = 850;
            this.cambiarDireccion();
        }

        if (this.y < 150) { 
            this.y = 150;
            this.cambiarDireccion();
        }

     
        
        if (this.dir === 0) { 
            this.y += this.speed;
        }

         if (this.dir === 1) { 
            this.y -= this.speed;
        }

        if (this.dir === 2) { 
            this.x+= this.speed * 2;
        }

        if (this.dir === 3) { 
            this.x-= this.speed * 2;
        }

    }

   setX1(x) {
       this.x = x;
    }

    setY1(y) {
       this.y = y;
    }

    getX1() { 
        return this.x +80;
    }

    getY1() { 
        return this.y ;
    }
}