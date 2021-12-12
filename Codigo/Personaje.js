class Personaje {
    constructor(x, y,tamaño) {
        this.x = x;
        this.y = y;
        this.x1 = this.x - 65;
        this.x2 = this.x1 + 100;
        this.y1 = this.y;
        this.y2 = this.y + 200;
        this.disparos = [];

     }
    

    dibujar(imagen) {
        fill(255, 0, 0);
        image(imagen, this.x - 65, this.y, 200, 200);
        this.mover();

    }

    vidaPersonaje() { 

    }


    mover() {
            let speed = 3;

        //UP

        if (keyIsDown(87)) {
            this.y -= speed;
        } 
        //DOWN
        if (keyIsDown(83)) {
            this.y += speed;
        } 
        //RIGHT
        if (keyIsDown(68)) {
            this.x += speed;
        } 
        //LEFT
        if (keyIsDown(65)) {
            this.x -= speed; 
            console.log("izquierda");
        } 

    
        return [this.x, this.y]
    
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