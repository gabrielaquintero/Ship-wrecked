let fondosDePantalla = [];
let obstaculos = [];
let contadorDePantalla = 0;
let botonStart = new Boton(420, 480, 150);
let posBotonStart = botonStart.getPos();
let botonStartInstruccciones = new Boton(220, 820, 150);
let posBotonStartInstruccciones = botonStartInstruccciones.getPos();
let botonInstrucciones = new Boton(420, 640, 150);
let posBotonInstrucciones = botonInstrucciones.getPos();
let personaje = new Personaje(50, 50);




function preload() {
    pantallaInicio = loadImage('assets/inicio.png');
    pantallaInstrucciones = loadImage('assets/instrucciones.png');
    pantallaJuego1 = loadImage('assets/primerTerreno.jpg');
    personajeSkin = loadImage('assets/personaje.png');
    obstaculo1 = loadImage('assets/obstaculo1.png');
    obstaculo2 = loadImage('assets/obstaculo2.png');
    obstaculo3 = loadImage('assets/obstaculo3.png');
}

function setup() {
    createCanvas(1000, 1000);
    fondosDePantalla.push(pantallaInicio);
    fondosDePantalla.push(pantallaInstrucciones);
    fondosDePantalla.push(pantallaJuego1);
    obstaculos.push(obstaculo1);
    obstaculos.push(obstaculo2);
    obstaculos.push(obstaculo3);
    obstaculo1Primer = new Obstaculo(random(50, 650), random(50, 650), random(150, 200));
    obstaculo2Primer = new Obstaculo(random(50, 650), random(50, 650), random(150, 200));
    obstaculo3Primer = new Obstaculo(random(50, 650), random(50, 650), random(150, 200));
    obstaculo4Primer = new Obstaculo(random(50, 650), 850, random(150, 200));
    coleccionable1Primer = new Coleccionable(50, 50, 50);
    numeroRandomObstaculos = 0;
}

function draw() {

    background(255);

    image(fondosDePantalla[contadorDePantalla], 0, 0, 1000, 1000);

    funcionesBotones();

       
    
    if (contadorDePantalla === 2) {
        personaje.dibujar(personajeSkin);
        personaje.mover();
        

        obstaculosPrimerNivel = [];
        obstaculosPrimerNivel.push(obstaculo1Primer);
        obstaculosPrimerNivel.push(obstaculo2Primer);
        obstaculosPrimerNivel.push(obstaculo3Primer);
        obstaculo4Primer.dibujar(obstaculos[2]);
        for (let i = 0; i < obstaculosPrimerNivel.length; i++) {
            
            obstaculosPrimerNivel[i].dibujar(obstaculos[numeroRandomObstaculos])
        }
        
           
        }

    }



 
//Botones para pasar
function mouseClicked() {

    if (contadorDePantalla === 0) {
        distanciasBoton(botonStart, posBotonStart);
        distanciasBoton(botonInstrucciones, posBotonInstrucciones); 
    }
    
  
    if (contadorDePantalla === 1) {
        distanciasBoton(botonStartInstruccciones, posBotonStartInstruccciones);
    }



}

 function distanciasBoton(objeto, arreglo) {
     if (mouseX > arreglo[0] && mouseX < arreglo[1] &&
         mouseY > arreglo[2] && mouseY < arreglo[3]) {
         objeto.setUndido();
        
     }
}



function funcionesBotones() {
    if (botonStart.getUndido() === true) {
        contadorDePantalla = 2;
    }

    if (botonInstrucciones.getUndido() === true) {
        contadorDePantalla = 1;
    }

    if (botonStartInstruccciones.getUndido() === true) {
        contadorDePantalla = 2;
    } 
}


