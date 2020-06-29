var mainCanvas = document.getElementById("villaplatzi"); //selects main canvas (the only canvas)
var papel = mainCanvas.getContext("2d"); //gets context from canvas

//Objects for the images
var fondo = {  
    url: "tile.png",
    cargaOK: false
};
var vaca = {
    url: "vaca.png",
    cargaOK: false
};
var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};
var pollo = {
    url: "pollo.png",
    cargaOK: false
};

function aleatorio(min, maxi) //random number generator function
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
};

var cantidadVaca = aleatorio(1, 2); //min and max amount of possible cows.
var cantidadCerdo = aleatorio(1, 2); //min and max amount of possible pigs.
var cantidadPollo = aleatorio(1, 2); //min and max amount of possible chcikens.

console.log("Vaca " + cantidadVaca + " Cerdo " + cantidadCerdo + " pollo " + cantidadPollo)

fondo.imagen = new Image(); //Image is a default js class. It creates an <img>. Param not defined (width, height)
fondo.imagen.src = fondo.url; //referencing the object.property
fondo.imagen.addEventListener("load", cargarFondo); //When the img is loaded the display function is invoked

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{   
    fondo.cargaOK = true; //changes the load flag when dibujar function ends
    console.log("fondo " + fondo.cargaOK)
    papel.drawImage(fondo.imagen, 0, 0); //drawImage is a default canvas function to load an img
};

function cargarVacas()
{
    console.log("vaca " + vaca.cargaOK)
    dibujar(vaca); //function used by all imgs except fondo
    console.log("vaca " + vaca.cargaOK)
};

function cargarCerdos()
{
    console.log("cerdo " + cerdo.cargaOK)
    dibujar(cerdo); //function used by all imgs except fondo
    console.log("cerdo " + cerdo.cargaOK)
};

function cargarPollos()
{
    console.log("pollo " + pollo.cargaOK)
    dibujar(pollo); //function used by all imgs except fondo
    console.log("pollo " + pollo.cargaOK)
};

function dibujar(animal)
{
    //  VACA
    if(fondo.cargaOK && animal == vaca) //it uses previous element flag to start
    {
        for(var v=0; v < cantidadVaca; v++) // cantidadVaca defines a random amount of img´s loaded
        {   
            console.log(v)
            var x = aleatorio(0, 7); //random place in x axis
            var y = aleatorio(0, 10); //random place in y axis 0 is min 10 is max
            var x = x * 60; // this creates a grid so that imgs are not overlaped (varx max value*const <= canvas x size)
            var y = y * 40; // this creates a grid so that imgs are not overlaped (varx max value*const <= canvas x size)
            papel.drawImage(vaca.imagen, x, y); //finaly loads the img (x and y values are randomized as seen above)
        };
        vaca.cargaOK = true; //changes flag when dibujar function ends
    };

    //  CERDO
    if(vaca.cargaOK && animal == cerdo) //it uses previous element flag to start
    {
        for(var v=0; v < cantidadCerdo; v++) 
        {   
            console.log(v)
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 10); 
            var x = x * 60;
            var y = y * 40;
            papel.drawImage(cerdo.imagen, x, y); 
        };
        cerdo.cargaOK = true; //changes flag when dibujar function ends
    };

    //  POLLO
    if(cerdo.cargaOK && animal == pollo) //it uses previous element flag to start
    {
        for(var v=0; v < cantidadPollo; v++) 
        {   
            console.log(v)
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 10); 
            var x = x * 60;
            var y = y * 40;
            papel.drawImage(pollo.imagen, x, y); 
        };
        pollo.cargaOK = true; //changes flag when dibujar function ends
    };
    
};
