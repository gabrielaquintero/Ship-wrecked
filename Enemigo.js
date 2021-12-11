class Personaje {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.x1 = this.x - 65;
        this.x2 = this.x1 + 100;
        this.y1 = this.y;
        this.y2 = this.y + 200;

     }
    

    dibujar(imagen) {
        fill(255, 0, 0);
        image(imagen, this.x-65, this.y, 200, 200);
    }

    vidaPersonaje() { 
        
    }


    mover() {
        let dir;

        if (frameCount % 60 == 0) {
        dir = int(random(0,4));
        }

        switch (dir) {
            case 0:
                this.y--;
                break;
            case 1:
                this.y++;
                break;
            case 3:
                this.x++;
                break;
            case 4:
                this.x--;
                break;
                
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