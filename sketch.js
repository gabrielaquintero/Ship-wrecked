//Variables
let fondosDePantalla = [];

// Variables Primer Juego
let obstaculos = [];
let coleccionables = [];
let contadorDePantalla = 3;
let botonStart = new Boton(420, 480, 150);
let posBotonStart = botonStart.getPos();
let botonStartInstruccciones = new Boton(220, 820, 150);
let posBotonStartInstruccciones = botonStartInstruccciones.getPos();
let botonInstrucciones = new Boton(420, 640, 150);
let posBotonInstrucciones = botonInstrucciones.getPos();
let personaje = new Personaje(50, 50);
let enemigo1 = new Enemigo(700, 700, 3);
let coleccionable1 = new Coleccionable(600, 600, 100)
let posColeccionable = coleccionable1.getPos();
let pista1 = new Coleccionable(200, 500, 200);
let posPista1 = pista1.getPos();
let muelle1 = new Coleccionable(700, 700, 200);
let posMuelle1 = muelle1.getPos();
let corazones = [];
let mostrarPista = false;
 let botonTrivia1 = new Boton(710, 580, 150);
let posBotonTrivia1 = botonTrivia1.getPos();
let modoTrivia1 = false;
let cantidadCorazones = 4;

//Variable Segundo Juego
let obstaculos2 = [];
let coleccionables2 = [];
let enemigo2 = new Enemigo(700, 700, 3);
let coleccionable2 = new Coleccionable(600, 600, 200)
let posColeccionable2 = coleccionable2.getPos();
let muelle2 = new Coleccionable(700, 700, 200);
let posMuelle2 = muelle2.getPos();
let botonTrivia2 = new Boton(710, 580, 150);
let posBotonTrivia2 = botonTrivia2.getPos();
let modoTrivia2 = false;





function preload() {
    //Importacion de la imagenes
    muelle = loadImage('assets/muelle.png')
    activaPista = loadImage('assets/activaPista.png')
    pista = loadImage('assets/pista.png')
    objetoColeccionable = loadImage('assets/coleccionable1.png')
    objetoColeccionable2 = loadImage('assets/coleccionable2.png')
    objetoColeccionable3 = loadImage('assets/coleccionable3.png')
    objetoColeccionable4 = loadImage('assets/coleccionable4.png')
    corazon = loadImage('assets/corazon.png')
    pantallaInicio = loadImage('assets/inicio.png');
    pantallaInstrucciones = loadImage('assets/instrucciones.png');
    pantallaJuego1 = loadImage('assets/primerTerreno.jpg');
    pantallaJuego2 = loadImage('assets/segundoTerreno.jpg')
    personajeSkin = loadImage('assets/personaje.png');
    villano1 = loadImage('assets/villano1.png');
    villano2 = loadImage('assets/villano2.png')
    obstaculo1 = loadImage('assets/obstaculo1.png');
    obstaculo2 = loadImage('assets/obstaculo2.png');
    obstaculo3 = loadImage('assets/obstaculo3.png');
    acertijo1 = loadImage('assets/acertijo1.png');
    acertijo2 = loadImage('assets/acertijo2.png');
    acertijo3 = loadImage('assets/acertijo3.png');
    acertijo4 = loadImage('assets/acertijo4.png');
}

function setup() {
    createCanvas(1000, 1000);
    //Arreglo de fondos de pantalla
    fondosDePantalla.push(pantallaInicio);
    fondosDePantalla.push(pantallaInstrucciones);
    fondosDePantalla.push(pantallaJuego1);
    fondosDePantalla.push(pantallaJuego2);

    //Arreglo de obstaculos
    obstaculos.push(obstaculo1);
    obstaculos.push(obstaculo2);
    obstaculos.push(obstaculo3);

    // palmeras juego 1
    obstaculo1Primer = new Obstaculo(300, 150, random(150, 200));
    obstaculo2Primer = new Obstaculo(400, 500, random(150, 200));
    obstaculo3Primer = new Obstaculo(700, 300, random(150, 200));
    // Barco
    obstaculo4Primer = new Obstaculo(20,500, 450);
    // Coleccionable 
    coleccionable1Primer = new Coleccionable(50, 50, 50);

    ////////////////////////////////////////////////////////////////////////////////////////////////

     // palmeras juego 2
    obstaculo1Segundo = new Obstaculo(300, 150, random(150, 200));
    obstaculo2Segundo = new Obstaculo(400, 500, random(150, 200));
    obstaculo3Segundo = new Obstaculo(700, 300, random(150, 200));
    // Barco
    obstaculo4Segundo = new Obstaculo(20,500, 450);
    // Coleccionable 
    coleccionable1Segundo = new Coleccionable(50, 50, 50);

    
}

function draw() {

    
    background(255);
    //Imagen de gondo de pantalla que cambia con la variable de contador de pantalla.
    image(fondosDePantalla[contadorDePantalla], 0, 0, 1000, 1000);

    //Funciones de los botones para pasar de pantalla y acertijos
    funcionesBotones();

    //Primer juego.
    if (contadorDePantalla === 2) { 
    primerJuego();
    }

    if (contadorDePantalla === 3) { 
    segundoJuego();
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
    
    if (contadorDePantalla === 2 && modoTrivia1 === true) { 
        distanciasBoton(botonTrivia1, posBotonTrivia1);
    }



}

//Funcion para calcular la distacia del mouse a los botones.
 function distanciasBoton(objeto, arreglo) {
     if (mouseX > arreglo[0] && mouseX < arreglo[1] &&
         mouseY > arreglo[2] && mouseY < arreglo[3]) {
         objeto.setUndido();
        
     }
}

//Funciones para dar instrucciones a botones
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

    if (botonTrivia1.getUndido() === true && modoTrivia1 === true) { 
        contadorDePantalla = 3;
        cantidadCorazones = 4;
    }
}


//Funcion ejecuta el primer juego
function primerJuego() { 

  

    if (contadorDePantalla === 2) {

        personaje.dibujar(personajeSkin);
        contactoConPista(personaje, posPista1, pista, pista1);
        contactoConMuelle(personaje, posMuelle1);
        
        if (mostrarPista === false) { 
            enemigo1.dibujar(villano1);
        enemigo1.mover();
        dañoAPersonaje(personaje, enemigo1, 4);
        coleccionable1.dibujar(objetoColeccionable);
            pista1.dibujar(activaPista)
            muelle1.dibujar(muelle);

        
    obstaculosPrimerNivel = [];
    obstaculosPrimerNivel.push(obstaculo1Primer);
    obstaculosPrimerNivel.push(obstaculo2Primer);
    obstaculosPrimerNivel.push(obstaculo3Primer);
        
        //Barco
        obstaculo4Primer.dibujar(obstaculos[2]);
        contactoConPersonaje(personaje, obstaculo4Primer.getPos());
        contactoConPersonaje(enemigo1, obstaculo4Primer.getPos());
            contactoConColeccionable(personaje, posColeccionable, coleccionable1);
            
        
    
        for (let i = 0; i < obstaculosPrimerNivel.length; i++) {
            
            obstaculosPrimerNivel[i].dibujar(obstaculos[0]);
            contactoConPersonaje(personaje, obstaculosPrimerNivel[i].getPos());
            contactoConPersonaje(enemigo1, obstaculosPrimerNivel[i].getPos());
            
        }
        }
    
        if (modoTrivia1 === true) { 
            console.log("activadoooooo")
            image(acertijo1, 0, 0, 1000, 1000);
        }

        
    }   
}

function segundoJuego() { 

    if (contadorDePantalla === 3) { 
        personaje.dibujar(personajeSkin);
        personaje.mover();
        
        contactoConMuelle(personaje, posMuelle2);
        
        if (mostrarPista === false) { 
        enemigo2.dibujar(villano2);
        enemigo2.mover();
        dañoAPersonaje(personaje, enemigo2, 4);
        coleccionable2.dibujar(objetoColeccionable2);
        muelle2.dibujar(muelle);    
        

        
    obstaculosSegundoNivel = [];
    obstaculosSegundoNivel.push(obstaculo1Segundo);
    obstaculosSegundoNivel.push(obstaculo2Primer);
    obstaculosSegundoNivel.push(obstaculo3Primer);
        
        //Barco
        obstaculo4Primer.dibujar(obstaculos[2]);
        contactoConPersonaje(personaje, obstaculo4Primer.getPos());
        contactoConPersonaje(enemigo2, obstaculo4Primer.getPos());
            contactoConColeccionable(personaje, posColeccionable2, coleccionable2);
            
        
    
        for (let i = 0; i < obstaculosSegundoNivel.length; i++) {
            
           obstaculosSegundoNivel[i].dibujar(obstaculos[1]);
            contactoConPersonaje(personaje, obstaculosSegundoNivel[i].getPos());
            contactoConPersonaje(enemigo2, obstaculosSegundoNivel[i].getPos());
            
        }
        }
    
        if (modoTrivia2 === true) { 
            console.log("activadoooooo")
            image(acertijo1, 0, 0, 1000, 1000);
        }

        
    }   
    }


//Funcion contacto con personaje y obstaculos
function contactoConPersonaje(posicionesPersonaje, posicionesObjeto) { 

//choque por la dercha
    if (posicionesPersonaje.getX1() > posicionesObjeto[0] + 60 && posicionesPersonaje.getX1() < posicionesObjeto[0] + 160    && posicionesPersonaje.getY1() >= posicionesObjeto[1] - 100
        && posicionesPersonaje.getY1() <= posicionesObjeto[3]-10) { 
       posicionesPersonaje.setX1(posicionesPersonaje.getX1());
    }
}

//Funcion contacto con personaje y pista
function contactoConPista(posicionesPersonaje, posicionesObjeto, pista, coleccionable) {
    if (posicionesPersonaje.getX1() > posicionesObjeto[0] + 60 && posicionesPersonaje.getX1() < posicionesObjeto[0] + 160 && posicionesPersonaje.getY1() >= posicionesObjeto[1] - 100
        && posicionesPersonaje.getY1() <= posicionesObjeto[3] - 10) {
        image(pista, 0, 0, 1000, 1000);
        coleccionable.setColeccionado(true);
        mostrarPista = true;
    } else { 
        mostrarPista = false;
    }
}

//Funcion contacto con el personaje y el collecionable
function contactoConColeccionable(posicionesPersonaje, posicionesObjeto, coleccionable) { 

//choque por la dercha
    if (posicionesPersonaje.getX1() > posicionesObjeto[0] + 60 && posicionesPersonaje.getX1() < posicionesObjeto[0] + 160    && posicionesPersonaje.getY1() >= posicionesObjeto[1] - 100
        && posicionesPersonaje.getY1() <= posicionesObjeto[3]-10) { 
        coleccionable.setColeccionado(true);
    }
}

//Funcion contacto con muelle
function contactoConMuelle(posicionesPersonaje, posicionesObjeto) { 
    if (posicionesPersonaje.getX1() > posicionesObjeto[0] + 60 && posicionesPersonaje.getX1() < posicionesObjeto[0] + 160 && posicionesPersonaje.getY1() >= posicionesObjeto[1] - 100
        && posicionesPersonaje.getY1() <= posicionesObjeto[3] - 10) {
        modoTrivia1 = true;
        mostrarPista = true;
    } 
}



//Funcion daño al personaje
function dañoAPersonaje(posicionesPersonaje, posicionesEnemigo) { 

    if (posicionesPersonaje.getX1() > posicionesEnemigo.getX1() - 100  && posicionesPersonaje.getX1() < posicionesEnemigo.getX1() + 90
        && posicionesPersonaje.getY1() >= posicionesEnemigo.getY1() - 100
        && posicionesPersonaje.getY1() <= posicionesEnemigo.getY1()) { 
        
        cantidadCorazones -= 1;
        posicionesPersonaje.setX1(150);
        posicionesPersonaje.setY1(150);
    }

    let primerCorazon = 600;
    for (let i = 0; i < cantidadCorazones; i++) { 
        image(corazon, primerCorazon, 50, 50, 50)
        primerCorazon += 100;
    }
}

