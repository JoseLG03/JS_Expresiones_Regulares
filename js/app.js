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
// ^Negación 

console.log(expresion4.test('0110101010100'));

// + un patrón se va a repetir 1 o mas veces
// * puede repetirse 1 o mas veces pero tambien que puede no estar