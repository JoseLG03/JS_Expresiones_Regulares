/*Basicas*/
var expresion1 = new RegExp('abc');

var expresion2 = /abc/;

var parrafo = /abc \/n dfe/;

var expresion3 = /[0-9a-zA-Z]/;
// [] = Al menos tenemos 1 coincidencia.

//console.log(expresion3.test('Sucedio en el verano de 1998.'));

/*Grupo de caracteres especiales

\d Cualquier número
\w Cualquier número o letra
\s Cualquier espacio en blanco
\D Cualquier caracter que no sea un número
\W Cualquier caracter que no se alfanúmerico
\S Cualquier caracter que no sea un espacio en blanco
.  Cualquier caracter excepto nuevas lineas

*/

//23-02-2020

var expresion4 = /\d\d-\d\d-\d\d\d\d/

//console.log(expresion4.test('23-02-2020'));

var expresion5 = /[^01] /;
// ^Negación dentro de corchetes

//console.log(expresion4.test('0110101010100'));

// + un patrón se va a repetir 1 o mas veces
// * puede repetirse 1 o mas veces pero tambien que puede no estar
// ? puede que este o no este

var expresion6 = /Hola mun?do/;

//console.log(expresion6.test('Hola mundo'));

var expresion7 = /\d{1,2}-\w{1,3}-\d{4} \d{1,2}:\d{1,2}/;

//console.log(expresion7.test('27-jul-2020 11:45'));

var expresion8 = /Hola Mundo/i;

//console.log(expresion8.test('Hola mundo'));

var expresion9 = /Woo+(hoo+)+/i;

//console.log(expresion9.test('woohooohoooohooooohoooohooo'));

var expresion10 = /\d+/.exec('Del año 1988');

//console.log(expresion10);

//console.log("Hasta 1994".match(/\d+/));

var expresion11 = /\bcat\b/;

//console.log(expresion11.test('cat'));

var expresion12 = /pollo|res|pescado/;

//console.log(expresion12.test('El cliente pidio res.'));

// ^ debe estar al principio de la expresion
// $ debe estar al final de la expresion

var expresion13 =/^cualquier|Javascript$/i;

console.log(expresion13.test('Cualquier programa que te imagines puede hacerse con Javascript'));