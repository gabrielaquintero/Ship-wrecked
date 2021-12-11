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
        } 
    
    }

    posPersonaje() {
        let posiciones = [];
        posiciones.push(this.x1);
        posiciones.push(this.x2);
        posiciones.push(this.y1);
        posiciones.push(this.y2);
        return posiciones
    }
}