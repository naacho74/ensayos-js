let cadena =  'Hola-Mundo desde JAVA ';
console.log(typeof cadena);// tipo de dato
console.log(cadena.length);//medida de la cadena, 


console.log(cadena[5]);
console.log(cadena[cadena.length-1]);

// objeto String
let cadena2 = new String('TeXtO CoN MaYuScUlA y MiNusCuLa');
console.log(typeof cadena2);
console.log(cadena2);


console.log(cadena.charAt(1));
console.log(cadena2.toLowerCase());// devuelve en minuscula
console.log(cadena2.toUpperCase());// devuelve en mayuscula

let saludo = 'Hola-Mundo'
console.log(saludo.indexOf('Hola')) //me avisa en que posicion del indice  comienza la primera palabra de la busqueda 
console.log((saludo +'compliquemos el asunto').indexOf('asun'))
