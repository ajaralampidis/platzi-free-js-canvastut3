var mainCanvas = document.getElementById("villaplatzi"); //selects main canvas (the only canvas)
var papel = mainCanvas.getContext("2d"); //gets context from canvas

//Objects for the images
var fondo = {  
    url: "tile.png",
    cargaOK: false,
    name: fondo
};
var vaca = {
    url: "vaca.png",
    cargaOK: false,
    name: "vaca"
};
var cerdo = {
    url: "cerdo.png",
    cargaOK: false,
    name: "cerdo"
};
var pollo = {
    url: "pollo.png",
    cargaOK: false,
    name: "pollo"
};

function aleatorio(min, maxi) //random number generator function
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
};

vaca.cantidad = aleatorio(1, 6); //min and max amount of possible cows.
cerdo.cantidad = aleatorio(1, 6); //min and max amount of possible pigs.

console.log("Vaca " + vaca.cantidad + " Cerdo " + cerdo.cantidad + " pollo " + pollo.cantidad)

fondo.imagen = new Image(); //Image is a default js class. It creates an <img>. Param not defined (width, height)
fondo.imagen.src = fondo.url; //referencing the object.property
fondo.imagen.addEventListener("load", cargarFondo); //When the img is loaded the display function is invoked

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", flagVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", flagCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", flagPollo);

function cargarFondo()
{   
    console.log("fondo " + fondo.cargaOK)
    fondo.cargaOK = true; //changes the load flag when dibujar function ends
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
    dibujarAnimalInteractivo(pollo);
    console.log("pollo " + pollo.cargaOK)
};

function dibujar()
{
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0); //drawImage is a default canvas function to load an img
    }

    if (vaca.cargaOK) {
        dibujarAnimal(vaca);
    }

    if (cerdo.cargaOK) {
        dibujarAnimal(cerdo);
    }
}

var registroAnimales = {};

function dibujarAnimal(animal){
    for(var i=0; i < animal.cantidad; i++) // animal.cantidad defines a random amount of img´s loaded
    {   
        var nombre = animal.name;
        var x = aleatorio(0, 7); //random place in x axis
        var y = aleatorio(0, 10); //random place in y axis 0 is min 10 is max
        var x = x * 60; // this creates a grid so that imgs are not overlaped (varx max value*const <= canvas x size)
        var y = y * 40; // this creates a grid so that imgs are not overlaped (varx max value*const <= canvas x size)


        registroAnimales [nombre + i] = {"posx":x, "posy":y}


        papel.drawImage(animal.imagen, x, y); //finaly loads the img (x and y values are randomized as seen above)
    }
}
var xi = 250-40;
var yi = 250-40;
function dibujarAnimalInteractivo(animal){
    papel.drawImage(animal.imagen, xi, yi);
}

document.addEventListener("keydown", moveAnimal)
function moveAnimal(event)
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
    dibujarAnimalInteractivo(pollo);
}
console.log(registroAnimales)