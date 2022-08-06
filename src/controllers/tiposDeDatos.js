const objeto = {
  nombre: "luis",
  apellido: "villa",
  nombreCompleto() {
    console.log(this.nombre);
  },
};

objeto.nombreCompleto();

function comprar(compra) {
  console.log("la compra fue exitosa");
  return compra;
}

let reciboAlgo = comprar("arroz");
console.log(reciboAlgo);

//funcion nombre
function nombreCom(nombre, apellido) {
  return nombre + " " + apellido;
}

let nombreCompleto = nombreCom("luis", "villa");
console.log(nombreCompleto);

nombreCompleto = nombreCom("juan", "perez");

console.log(nombreCompleto);

// funcion tipo flecha

let funcionFlecha = () => {
  // codigo a ejecutar
  console.log("funcion flecha funciona");
  return "flecha";
};
let recuperaDato = funcionFlecha();
console.log(recuperaDato);

const funcionSimple = () =>
  console.log("Esto es posible porque solo tiene una linea de codigo");
funcionSimple();

//funcion flecha con un solo parametro no necesita los ()
const funcionEsperaParam = (texto) => console.log(texto);
funcionEsperaParam("Pasamos un argumento a la funcion flecha");

const funcionSumar = (num1, num2) => num1 + num2;
console.log(funcionSumar(8, 8));

// regresar objeto

const regresarObjeto = () => ({ nombre: "camilo", apellido: "Correa" });

console.log(regresarObjeto());

//funciones colback porque recibe como parametro una funcion

function compraar(art1,art2,funcion){
    art1=65;
    art2=70;
  let  gastado= art1+art2
    funcion (gastado);
}

function imprimir(mensaje){
console.log('compramos leche y pan - gastamos: '+ mensaje)

}

compraar('pan','leche',imprimir)

