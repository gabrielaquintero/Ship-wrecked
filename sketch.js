//Variables
let fondosDePantalla = [];
let obstaculos = [];
let coleccionables = [];
let contadorDePantalla = 0;
let botonStart = new Boton(420, 480, 150);
let posBotonStart = botonStart.getPos();
let botonStartInstruccciones = new Boton(220, 820, 150);
let posBotonStartInstruccciones = botonStartInstruccciones.getPos();
let botonInstrucciones = new Boton(420, 640, 150);
let posBotonInstrucciones = botonInstrucciones.getPos();
let personaje = new Personaje(50, 50);




function preload() {
    //Importacion de la imagenes
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
    //Arreglo de fondos de pantalla
    fondosDePantalla.push(pantallaInicio);
    fondosDePantalla.push(pantallaInstrucciones);
    fondosDePantalla.push(pantallaJuego1);

    //Arreglo de obstaculos
    obstaculos.push(obstaculo1);
    obstaculos.push(obstaculo2);
    obstaculos.push(obstaculo3);
    // palmeras
    obstaculo1Primer = new Obstaculo(random(50, 650), random(50, 650), random(150, 200));
    obstaculo2Primer = new Obstaculo(random(50, 650), random(50, 650), random(150, 200));
    obstaculo3Primer = new Obstaculo(random(50, 650), random(50, 650), random(150, 200));
    // Barco
    obstaculo4Primer = new Obstaculo(random(50, 650), 670, random(250, 300));
    // Coleccionable 
    coleccionable1Primer = new Coleccionable(50, 50, 50);
    numeroRandomObstaculos = 0;
    
}

function draw() {

    
    background(255);
    //Imagen de gondo de pantalla que cambia con la variable de contador de pantalla.
    image(fondosDePantalla[contadorDePantalla], 0, 0, 1000, 1000);

    //Funciones de los botones para pasar de pantalla y acertijos
    funcionesBotones();

    //Primer juego.
    primerJuego();
       
    
    
    


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

function primerJuego() { 
    if (contadorDePantalla === 2) {
    
    personaje.dibujar(personajeSkin);
    personaje.mover();
        

    obstaculosPrimerNivel = [];
    obstaculosPrimerNivel.push(obstaculo1Primer);
    obstaculosPrimerNivel.push(obstaculo2Primer);
    obstaculosPrimerNivel.push(obstaculo3Primer);
        
        //Barco
        obstaculo4Primer.dibujar(obstaculos[2]);
        contactoConPersonaje(personaje, obstaculo4Primer.getPos() );
        
        console.log("posiciones: x " + personaje.getX1(), "posiciones: y " + personaje.getY1());
        console.log(obstaculosPrimerNivel[0].getPos());
        console.log("mouseX: "+mouseX + " mouseY:" + mouseY);
    
        for (let i = 0; i < obstaculosPrimerNivel.length; i++) {
            
            obstaculosPrimerNivel[i].dibujar(obstaculos[numeroRandomObstaculos]);
            contactoConPersonaje(personaje, obstaculosPrimerNivel[i].getPos());
            
        }

        
    }   
}

//0 -> limite izquierda
//1 -> limite arriba
//2 -> limite derecha
//3 -> limite abajo

function contactoConPersonaje(posicionesPersonaje, posicionesObjeto) { 

//choque por la dercha
    if (posicionesPersonaje.getX1() > posicionesObjeto[0] + 60 && posicionesPersonaje.getX1() < posicionesObjeto[0] + 160    && posicionesPersonaje.getY1() >= posicionesObjeto[1] - 100
        && posicionesPersonaje.getY1() <= posicionesObjeto[3]-10) { 
       posicionesPersonaje.setX1(posicionesPersonaje.getX1());
    }
}

