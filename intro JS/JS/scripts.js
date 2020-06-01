console.log("funciona el script.js");

//camelCase palabraPalabra
//underscore palabra_palabra
//pascal case Palabra_Palabra
//3 formas de crear variables var - let - const

// var -> modificable, valor inicial undefined, alcance global dentro de funcion
// let -> modificable
// const -> no modificable, valor inicial undefined, alcance bloque a partir de la linea de la declaración

let mensaje = "don't do dat";
console.log(mensaje);
mensaje = "no digas \"basta\"";
console.log(mensaje);

let primeraParte = "estoy aprendiendo";
let segundaParte = "JavaScript";
console.log(primeraParte + " " + segundaParte);// concatenación (+)

let banda = "Metallica",
    cancion = "Enter Sandman";

console.log(cancion + ", " + banda);

console.log(banda.length);//length <- longitud
//.concat(x) <- concatena, pero no modifica
console.log(banda.concat(" " +  cancion));

console.log(banda.toUpperCase());
console.log(banda.toLowerCase());

//.split()<-
let testSplit = "unas cuantas palabras";
console.log(testSplit.split(" "));
testSplit = "uno, dos, tres, cuatro, cinco";
console.log(testSplit.split(", "));
console.log(testSplit.split());//si no recibe nada, deja un array con un solo string
console.log(testSplit.split(""));//si recibe un string vacio, separa todas las letras
console.log(testSplit.replace("cinco", "te reemplace"));//.replace(que, conque) <- reemplaza cada aparicion de una cadena dentro de otra con el segundo parámetro
console.log(testSplit.replace("Cinco", "te reemplace"));//diferencia mayúsculas
console.log(testSplit.includes("cinco"));//.includs(string) <- verifica si un string incluye el parámetro
console.log(banda.repeat(3));

let numero1 = 20,
    numero2 = 12.5,
    numero3 = 50,
    numero4 = 100,
    numero5 = -10;

console.log(numero1 + numero2);
console.log("20" + numero2);
console.log(Math.round(numero2));//redondea
console.log(Math.floor(numero2));//redondea hacia arriba
console.log(Math.ceil(numero2));//redondea hacia arriba
console.log(Math.sqrt(4));//raiz cuadrada
console.log(Math.pow(2,3));//potencia
console.log(Math.pow(4,1/2));//potencia sirve como raiz
console.log(Math.abs(numero5));//absoluto

console.log(Math.min(1,2,3,4));
console.log(Math.max(1,2,3,4));

let contador = 0;
console.log("contador:", contador);
contador++;
console.log("contador++:", contador);
contador--;
console.log("contador--:", contador);
contador += 5;
console.log("contador += 5:", contador);
contador -= 3;
console.log("contador -= 3:", contador);
contador *= 4;
console.log("contador *= 4:", contador);
contador /= 2;
console.log("contador /= 2:", contador);

let numeroA = 50,
    numeroB = "10",
    numeroC = "tres";

console.log(numeroA + numeroB);
console.log(numeroA - numeroB);

console.log(Number(numeroB) + numeroA);
console.log(parseInt(numeroB) + numeroA);
console.log(parseInt("20.2"));
console.log(parseFloat("22.5"));
console.log(Number("22.5"));
console.log(Number(numeroC));//NaN = Not a Number
console.log(123456.123456.toFixed(2));//.toFixed(1) redondea en el decimal indicado

console.log(Number("123456.123456").toFixed(2));//.toFixed(1) solo funciona con números


console.log(String(123456));//de número a string
console.log(String(123456).length);//length solo funcina para arreglos o strings.
console.log(true);
console.log(String(true));

//tipos de dato
console.log(typeof "un string");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof console);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof [1,2,3]);
console.log(typeof NaN);

let unObjeto = {
    nombre: "Federico",
    apellido: "Lamas",
    edad: 24
}

console.log(unObjeto);

let unArreglo = [1,2,3,4];
console.log(typeof unArreglo);
console.log("un arreglo:", unArreglo);
console.log("un elemento:", unArreglo[2])
console.log("lenght =", unArreglo.length);

let meses = ["enero", "febrero", "marzo"];
meses[3] = "abril";//modificando se pueede agregar un elemento
meses.push("mayo");//.push(1) agrega un elemento al final del arreglo
console.log(meses);
meses.unshift("diciembre anterior");//.unshift(1) agrega un elemento al inicio del arreglo
console.log(meses);
meses.push("septibmre");
meses.pop();//.pop() borra el último elemento
console.log(meses);
meses.shift();//.shift() borra el primer elemento
console.log(meses);
meses.push("septibmre");
meses.push("septibmre");
meses.push("junio");
meses.push("julio");
meses.splice(5,2);//splice(desde,cuanto) elimina desde la posicion DESDE una cantidad CUANTO
console.log(meses);

