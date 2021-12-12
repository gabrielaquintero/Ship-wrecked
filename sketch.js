//Variables
let fondosDePantalla = [];

// Variables Primer Juego
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
let enemigo1 = new Enemigo(700, 700, 3, 200);
let coleccionable1 = new Coleccionable(600, 600, 100)
let posColeccionable = coleccionable1.getPos();
let pista1 = new Coleccionable(200, 500, 200);
let posPista1 = pista1.getPos();
let muelle1 = new Coleccionable(700, 700, 200);
let posMuelle1 = muelle1.getPos();
let corazones = [];
let mostrarPista1 = false;
 let botonTrivia1 = new Boton(710, 580, 150);
let posBotonTrivia1 = botonTrivia1.getPos();
let modoTrivia1 = false;
let cantidadCorazones = 4;

//Variable Segundo Juego
let obstaculos2 = [];
let coleccionables2 = [];
let mostrarPista2 = false;
let enemigo2 = new Enemigo(700, 700, 4, 300);
let coleccionable2 = new Coleccionable(400, 600, 100)
let posColeccionable2 = coleccionable2.getPos();
let coleccionable2Segundo = new Coleccionable(750, 100, 100)
let posColeccionable2Segundo = coleccionable2Segundo.getPos();
let coleccionable2Tercero = new Coleccionable(750, 400, 300);
let posColeccionable2Tercero = coleccionable2Tercero.getPos();
let muelle2 = new Coleccionable(700, 700, 200);
let posMuelle2 = muelle2.getPos();
let botonTrivia2 = new Boton(780, 480, 150);
let posBotonTrivia2 = botonTrivia2.getPos();
let modoTrivia2 = false;

//Variable Tercer Juego
let mostrarPista3 = false;
let obstaculos3 = [];
let coleccionables3 = [];
let enemigo3 = new Enemigo(500, 500, 4, 400);
let coleccionable3 = new Coleccionable(400, 600, 100)
let posColeccionable3 = coleccionable3.getPos();
let coleccionable3Segundo = new Coleccionable(750, 100, 100)
let posColeccionable3Segundo = coleccionable3Segundo.getPos();
let coleccionable3Tercero = new Coleccionable(750, 400, 300);
let posColeccionable3Tercero = coleccionable3Tercero.getPos();
let muelle3 = new Coleccionable(200, 100, 200);
let posMuelle3 = muelle3.getPos();
let botonTrivia3 = new Boton(200, 630, 150);
let posBotonTrivia3 = botonTrivia3.getPos();
let modoTrivia3 = false;

//Varibale Cuarto Juego
let mostrarPista4 = false;
let obstaculos4 = [];
let coleccionables4 = [];
let enemigo4 = new Enemigo(500, 500, 4, 200);
let coleccionable4 = new Coleccionable(400, 600, 100)
let posColeccionable4 = coleccionable4.getPos();
let coleccionable4Segundo = new Coleccionable(750, 100, 100)
let posColeccionable4Segundo = coleccionable4Segundo.getPos();
let coleccionable4Tercero = new Coleccionable(750, 400, 300);
let posColeccionable4Tercero = coleccionable4Tercero.getPos();
let muelle4 = new Coleccionable(100, 400, 200);
let posMuelle4 = muelle4.getPos();
let botonTrivia4 = new Boton(850, 600, 150);
let posBotonTrivia4 = botonTrivia4.getPos();
let modoTrivia4 = false;




function preload() {
    //Importacion de la imagenesdsdwada
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
    pantallaJuego2 = loadImage('assets/segundoTerreno.jpg');
    pantallaJuego3 = loadImage('assets/tercerTerreno.jpg');
    pantallaJuego4 = loadImage('assets/cuartoTerreno.jpg');
    personajeSkin = loadImage('assets/personaje.png');
    villano1 = loadImage('assets/villano1.png');
    villano2 = loadImage('assets/villano2.png');
    villano3 = loadImage('assets/villano3.png');
    villano4 = loadImage('assets/villano4.png');
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
    fondosDePantalla.push(pantallaJuego3);
    fondosDePantalla.push(pantallaJuego4);

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



    ////////////////////////////////////////////////////////////////////////////////////////////////

     // rocas juego 2
    obstaculo1Segundo = new Obstaculo(600, 150, random(150, 250));
    obstaculo2Segundo = new Obstaculo(600, 430, random(150, 250));
    obstaculo3Segundo = new Obstaculo(200, 300, random(150, 250));
    obstaculo4Segundo = new Obstaculo(500, 300, random(150, 250));
    // Barco
    obstaculo5Segundo = new Obstaculo(20,500, 450);



    ////////////////////////////////////////////////////////////////////////////////////////////////

     // rocas juego 2
    obstaculo1Tercero = new Obstaculo(600, 150, random(150, 250));
    obstaculo2Tercero = new Obstaculo(600, 430, random(150, 250));
    obstaculo3Tercero = new Obstaculo(200, 300, random(150, 250));
    obstaculo4Tercero= new Obstaculo(500, 300, random(150, 250));
    // Barco
    obstaculo5Tercero = new Obstaculo(20, 500, 450);
    
     ////////////////////////////////////////////////////////////////////////////////////////////////

     // rocas juego 2
    obstaculo1Cuarto = new Obstaculo(600, 150, random(150, 250));
    obstaculo2Cuarto = new Obstaculo(600, 430, random(150, 250));
    obstaculo3Cuarto = new Obstaculo(200, 300, random(150, 250));
    obstaculo4Cuarto= new Obstaculo(500, 300, random(150, 250));
    // Barco
    obstaculo5Cuarto = new Obstaculo(20,500, 450);
    
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

    if (contadorDePantalla === 4) { 
    tercerJuego();
    }

    if (contadorDePantalla === 5) {
        cuartoJuego();
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
    
    if (contadorDePantalla === 2 && modoTrivia1 === true ) { 
        distanciasBoton(botonTrivia1, posBotonTrivia1);
        personaje.setX1(100);
        personaje.setY1(100);
    }

    if (contadorDePantalla === 3 && modoTrivia2 === true) { 
        distanciasBoton(botonTrivia2, posBotonTrivia2);
    }

    if (contadorDePantalla === 4 && modoTrivia3 === true) { 
        distanciasBoton(botonTrivia3, posBotonTrivia3);
    }

    if (contadorDePantalla === 5 && modoTrivia4 === true) { 
        distanciasBoton(botonTrivia4, posBotonTrivia4);
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
        botonStart.setUndido();
    }

    if (botonInstrucciones.getUndido() === true) {
        contadorDePantalla = 1;
        botonInstrucciones.setUndido();
    }

    if (botonStartInstruccciones.getUndido() === true) {
        contadorDePantalla = 2;
        botonStartInstruccciones.setUndido();
    }

    if (botonTrivia1.getUndido() === true && modoTrivia1 === true && contadorDePantalla === 2) {

        contadorDePantalla = 3;
        cantidadCorazones = 4;
        botonTrivia1.setUndido();
    }

    if (botonTrivia2.getUndido() === true && modoTrivia2 === true && contadorDePantalla === 3) {
        contadorDePantalla = 4;
        cantidadCorazones = 4;
        botonTrivia2.setUndido();


    }

    if (botonTrivia3.getUndido() === true && modoTrivia3 === true && contadorDePantalla === 4) {
        contadorDePantalla = 5;
        cantidadCorazones = 4;
        botonTrivia3.setUndido();
    }

    if (botonTrivia4.getUndido() === true && modoTrivia4 === true && contadorDePantalla === 5) {
        contadorDePantalla = 0;
        cantidadCorazones = 4;
        botonTrivia4.setUndido();

       if (contadorDePantalla === 2) { 
    primerJuego();
    }

    if (contadorDePantalla === 3) { 
    segundoJuego();
    }

    if (contadorDePantalla === 4) { 
    tercerJuego();
    }

    if (contadorDePantalla === 5) {
        cuartoJuego();
    }
    }

}


//Funcion ejecuta el primer juego
function primerJuego() { 

    if(cantidadCorazones === 0) {
        contadorDePantalla = 2;
        cantidadCorazones = 4;
    }

    if (modoTrivia1 === true) { 
        modoTrivia1 = false
    }

    if (mostrarPista1 === true) { 
        mostrarPista1 = false
    }

    if (contadorDePantalla === 2) {

        personaje.dibujar(personajeSkin);
        contactoConPista(personaje, posPista1, pista, pista1);
        contactoConMuelle(personaje, posMuelle1);
        
        if (mostrarPista1 === false) { 
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
    
        if (modoTrivia1 === true && botonTrivia1.getUndido() === false ) { 
            image(acertijo1, 0, 0, 1000, 1000);
        }

        
    }   
}

function segundoJuego() { 

    if(cantidadCorazones === 0) {
        contadorDePantalla = 2;
        cantidadCorazones = 4;
    }

     if (modoTrivia2 === true) { 
        modoTrivia2 = false
    }

    if (mostrarPista2 === true) { 
        mostrarPista2 = false
    }

    if (contadorDePantalla === 3) { 
        personaje.dibujar(personajeSkin);
        personaje.mover();
        
        contactoConMuelle2(personaje, posMuelle2);
        
        if (mostrarPista2 === false) { 
        enemigo2.dibujar(villano2);
        enemigo2.mover();
        dañoAPersonaje(personaje, enemigo2, 4);
        muelle2.dibujar(muelle);    
        

        
    obstaculosSegundoNivel = [];
    obstaculosSegundoNivel.push(obstaculo1Segundo);
    obstaculosSegundoNivel.push(obstaculo2Segundo);
    obstaculosSegundoNivel.push(obstaculo3Segundo);
    obstaculosSegundoNivel.push(obstaculo4Segundo);
            
        
        //Barco
        obstaculo4Primer.dibujar(obstaculos[2]);
        contactoConPersonaje(personaje, obstaculo5Segundo.getPos());
            contactoConPersonaje(enemigo2, obstaculo5Segundo.getPos());
            
        coleccionable2.dibujar(objetoColeccionable2);
        coleccionable2Segundo.dibujar(objetoColeccionable);
        coleccionable2Tercero.dibujar(objetoColeccionable3);
            contactoConColeccionable(personaje, posColeccionable2, coleccionable2);
            contactoConColeccionable(personaje, posColeccionable2Segundo, coleccionable2Segundo);
            contactoConColeccionable(personaje, posColeccionable2Tercero, coleccionable2Tercero);
            
        
    
        for (let i = 0; i < obstaculosSegundoNivel.length; i++) {
            
           obstaculosSegundoNivel[i].dibujar(obstaculos[1]);
            contactoConPersonaje(personaje, obstaculosSegundoNivel[i].getPos());
            contactoConPersonaje(enemigo2, obstaculosSegundoNivel[i].getPos());
            
        }
        }
    
        
        if (modoTrivia2 === true) { 
            console.log("comida")
            image(acertijo2, 0, 0, 1000, 1000);
        }

        
    }   
}

function tercerJuego() { 

    if(cantidadCorazones === 0) {
        contadorDePantalla = 2;
        cantidadCorazones = 4;
    }

     if (modoTrivia3 === true) { 
        modoTrivia3 = false
    }

    if (mostrarPista3 === true) { 
        mostrarPista3 = false
    }

    if (contadorDePantalla === 4) { 
        personaje.dibujar(personajeSkin);
        personaje.mover();
        
        contactoConMuelle3(personaje, posMuelle3);
        
        if (mostrarPista3 === false) { 
        enemigo3.dibujar(villano3);
        enemigo3.mover();
        dañoAPersonaje(personaje, enemigo3, 4);
        muelle3.dibujar(muelle);    
        

        
    obstaculosTercerNivel = [];
    obstaculosTercerNivel.push(obstaculo1Tercero);
    obstaculosTercerNivel.push(obstaculo2Tercero);
    obstaculosTercerNivel.push(obstaculo3Tercero);
    obstaculosTercerNivel.push(obstaculo4Tercero);
            
        
        //Barco
        obstaculo4Primer.dibujar(obstaculos[2]);
        contactoConPersonaje(personaje, obstaculo5Tercero.getPos());
        contactoConPersonaje(enemigo3, obstaculo5Tercero.getPos());
            
        coleccionable3.dibujar(objetoColeccionable2);
        coleccionable3Segundo.dibujar(objetoColeccionable);
        coleccionable3Tercero.dibujar(objetoColeccionable3);
            contactoConColeccionable(personaje, posColeccionable3, coleccionable3);
            contactoConColeccionable(personaje, posColeccionable3Segundo, coleccionable3Segundo);
            contactoConColeccionable(personaje, posColeccionable3Tercero, coleccionable3Tercero);
            
        
    
        for (let i = 0; i < obstaculosTercerNivel.length; i++) {
            
           obstaculosTercerNivel[i].dibujar(obstaculos[1]);
            contactoConPersonaje(personaje, obstaculosTercerNivel[i].getPos());
            contactoConPersonaje(enemigo3, obstaculosTercerNivel[i].getPos());
            
        }
        }
    
        if (modoTrivia3 === true) { 
            image(acertijo3, 0, 0, 1000, 1000);
        }

        
    }   
}

function cuartoJuego() {

      if(cantidadCorazones === 0) {
        contadorDePantalla = 2;
        cantidadCorazones = 4;
    }

     if (modoTrivia4 === true) { 
        modoTrivia4 = false
    }

    if (mostrarPista4 === true) { 
        mostrarPista4 = false
    }

    if (contadorDePantalla === 5) {
        personaje.dibujar(personajeSkin);
        personaje.mover();
        
        contactoConMuelle4(personaje, posMuelle4);
        
        if (mostrarPista4 === false) {
            enemigo4.dibujar(villano4);
            enemigo4.mover();
            dañoAPersonaje(personaje, enemigo4, 4);
            muelle4.dibujar(muelle);
        

        
            obstaculosCuartoNivel = [];
            obstaculosCuartoNivel.push(obstaculo1Cuarto);
            obstaculosCuartoNivel.push(obstaculo2Cuarto);
            obstaculosCuartoNivel.push(obstaculo3Cuarto);
            obstaculosCuartoNivel.push(obstaculo4Cuarto);
            
        
            //Barco
            obstaculo4Primer.dibujar(obstaculos[2]);
            contactoConPersonaje(personaje, obstaculo5Cuarto.getPos());
            contactoConPersonaje(enemigo4, obstaculo5Cuarto.getPos());
            
            coleccionable4.dibujar(objetoColeccionable2);
            coleccionable4Segundo.dibujar(objetoColeccionable);
            coleccionable4Tercero.dibujar(objetoColeccionable3);
            contactoConColeccionable(personaje, posColeccionable4, coleccionable4);
            contactoConColeccionable(personaje, posColeccionable4Segundo, coleccionable4Segundo);
            contactoConColeccionable(personaje, posColeccionable4Tercero, coleccionable4Tercero);
            
        
    
            for (let i = 0; i < obstaculosCuartoNivel.length; i++) {
            
                obstaculosCuartoNivel[i].dibujar(obstaculos[0]);
                contactoConPersonaje(personaje, obstaculosCuartoNivel[i].getPos());
                contactoConPersonaje(enemigo4, obstaculosCuartoNivel[i].getPos());
            
            }
        }
    
        if (modoTrivia4 === true) {
            image(acertijo4, 0, 0, 1000, 1000);
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
        mostrarPista1 = true;
    } else { 
        mostrarPista1 = false;
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

function restablecerColeccionable(coleccionable) { 
        //choque por la dercha
    if (coleccionable.getColeccionado === true) { 
        coleccionable.setColeccionado(false);
    }
}

//Funcion contacto con muelle
function contactoConMuelle(posicionesPersonaje, posicionesObjeto) { 
    if (posicionesPersonaje.getX1() > posicionesObjeto[0] + 60 && posicionesPersonaje.getX1() < posicionesObjeto[0] + 160 && posicionesPersonaje.getY1() >= posicionesObjeto[1] - 100
        && posicionesPersonaje.getY1() <= posicionesObjeto[3] - 10) {
        console.log("marino")
        modoTrivia1 = true;
        mostrarPista1 = true;
    } 
}

//Funcion contacto con muelle segundo juego.
function contactoConMuelle2(posicionesPersonaje, posicionesObjeto) { 
    if (posicionesPersonaje.getX1() > posicionesObjeto[0] + 60 && posicionesPersonaje.getX1() < posicionesObjeto[0] + 160 && posicionesPersonaje.getY1() >= posicionesObjeto[1] - 100
        && posicionesPersonaje.getY1() <= posicionesObjeto[3] - 10) {

        modoTrivia2 = true;
        mostrarPista2 = true;
        console.log("contacto1");
    } 
}

//Funcion contacto con muelle tercer juego.
function contactoConMuelle3(posicionesPersonaje, posicionesObjeto) { 
    if (posicionesPersonaje.getX1() > posicionesObjeto[0] + 60 && posicionesPersonaje.getX1() < posicionesObjeto[0] + 160 && posicionesPersonaje.getY1() >= posicionesObjeto[1] - 100
        && posicionesPersonaje.getY1() <= posicionesObjeto[3] - 10) {
        
        console.log("modo Trivia 3 " + modoTrivia3)
    console.log(" modo poista 3 " + mostrarPista3)
        modoTrivia3 = true;
        mostrarPista3 = true;

    } 
}

function contactoConMuelle4(posicionesPersonaje, posicionesObjeto) { 
    if (posicionesPersonaje.getX1() > posicionesObjeto[0] + 60 && posicionesPersonaje.getX1() < posicionesObjeto[0] + 160 && posicionesPersonaje.getY1() >= posicionesObjeto[1] - 100
        && posicionesPersonaje.getY1() <= posicionesObjeto[3] - 10) {
        
        modoTrivia4 = true
        mostrarPista4 = true;

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

