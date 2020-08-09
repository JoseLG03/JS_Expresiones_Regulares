/*Basicas*/
var expresion1 = new RegExp('abc');

var expresion2 = /abc/;

var parrafo = /abc \/n dfe/;

var expresion3 = /[0-9a-zA-Z]/;

console.log(expresion3.test('Sucedio en el verano de 1998.'));

/*Grupo de caracteres especiales

\d Cualquier número
\w Cualquier número o letra
\s Cualquier espacio en blanco
\D Cualquier caracter que no sea un número
\W Cualquier caracter que no se alfanúmerico
\S Cualquier caracter que no sea un espacio en blanco
.  Cualquier caracter excepto nuevas lineas

*/