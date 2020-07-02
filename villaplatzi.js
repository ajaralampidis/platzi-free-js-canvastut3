/***************/
/*  VARIABLES  */
/***************/

var mainCanvas = document.getElementById("villaplatzi"); //selects main canvas (the only canvas)
var papel = mainCanvas.getContext("2d"); //gets context from canvas

// moving object position
var xi = 250-40;
var yi = 250-40;

/**************/
/*  OBJETOS   */
/**************/
var fondo = 
{  
    url: "tile.png",
    cargaOK: false,
    name: fondo
};
var vaca = 
{
    url: "vaca.png",
    cargaOK: false,
    name: "vaca"
};
var cerdo = 
{
    url: "cerdo.png",
    cargaOK: false,
    name: "cerdo"
};
var pollo = 
{
    url: "pollo.png",
    cargaOK: false,
    name: "pollo"
};

var interactivo = 
{
    url: "interactivo.png",
    cargaOK: false,
    name: "interactivo"
};

var registroAnimales = {};

/**************/
/* FUNCIONES  */
/**************/

function aleatorio(min, maxi) //random number generator function
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
};
function cargarFondo() // change flag and draw the object
{   
    console.log("fondo " + fondo.cargaOK)
    fondo.cargaOK = true; 
    dibujar();
    console.log("fondo " + fondo.cargaOK)
};

function flagVaca()
{
    console.log("vaca " + vaca.cargaOK)
    vaca.cargaOK = true
    dibujar();
    console.log("vaca " + vaca.cargaOK)
};

function flagCerdo()
{
    console.log("cerdo " + cerdo.cargaOK)
    cerdo.cargaOK = true
    dibujar();
    console.log("cerdo " + cerdo.cargaOK)
};

function flagPollo()
{
    console.log("pollo " + pollo.cargaOK)
    pollo.cargaOK = true
    dibujar();
    console.log("pollo " + pollo.cargaOK)
};

function flagInteractivo()
{
    interactivo.cargaOK = true
    dibujarAnimalInteractivo(interactivo);
};

function dibujarAnimal(animal)
{
    for(var i=0; i < animal.cantidad; i++) // animal.cantidad is a random number
    {   
        var nombre = animal.name;
        var x = aleatorio(0, 7); //random place in x axis
        var y = aleatorio(0, 10); //random place in y axis 0 is min 10 is max
        var x = x * 60; // this creates a grid so that imgs are not overlaped (varx max value*const <= canvas x size)
        var y = y * 40; // this creates a grid so that imgs are not overlaped (varx max value*const <= canvas x size)
        registroAnimales[nombre + i] = {"posx":x, "posy":y, "type":animal} // stores the position and type of each animal drawn
        papel.drawImage(animal.imagen, x, y); //finaly loads the img (x and y values are randomized as seen above)
    }
}

function dibujar() // draw the canvas for the first time
{
    if (fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOK)
    {
        dibujarAnimal(vaca);
    }

    if (cerdo.cargaOK)
    {
        dibujarAnimal(cerdo);
    }

    if (pollo.cargaOK)
    {
        dibujarAnimal(pollo);
    }
}

function drawStored() // Draw the image when chicken is moved to clean the previous one.
{
    papel.drawImage(fondo.imagen, 0, 0);

    for (let animal in registroAnimales)
    {
        var storedAnimal = registroAnimales[animal]["type"];
        var storedX = registroAnimales[animal]["posx"];
        var storedY = registroAnimales[animal]["posy"];
        papel.drawImage(storedAnimal.imagen, storedX, storedY);
    }
}

function dibujarAnimalInteractivo(animal) // Draw the chcicken
{
    papel.drawImage(animal.imagen, xi, yi);
}

function moveAnimal(event)  // change chicken position with arrow keys. 
{
    if (event.keyCode == 40) { //down
        yi += 10;
    }
    if (event.keyCode == 38) { //up
        yi -= 10;
    }
    if (event.keyCode == 37) { //left
        xi -= 10;
    }
    if (event.keyCode == 39) { //right
        xi += 10;
    }
    drawStored();
    dibujarAnimalInteractivo(interactivo);
}

/*****************/
/*  "The Code"   */
/*****************/

vaca.cantidad = aleatorio(1, 6); //min and max (random) amount of cows. This stores the value in the animal object
cerdo.cantidad = aleatorio(1, 6); //min and max (random) amount of pigs. This stores the value in the animal object
pollo.cantidad = aleatorio(1, 6); //min and max (random) amount of chickens. This stores the value in the animal object

console.log("Vaca " + vaca.cantidad + " Cerdo " + cerdo.cantidad + " pollo " + pollo.cantidad); 

fondo.imagen = new Image(); 
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo); // Waits for the img to load. Then the function is invoked

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", flagVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", flagCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", flagPollo);

interactivo.imagen = new Image();
interactivo.imagen.src = interactivo.url;
interactivo.imagen.addEventListener("load", flagInteractivo);


document.addEventListener("keydown", moveAnimal)  // Moves the chicken when arrowkeys are pressed

