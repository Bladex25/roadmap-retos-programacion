//! - Crea un comentario en el código y coloca la URL del sitio web oficial del
//!     lenguaje de programación que has seleccionado.

// Web oficial de documentacion javascripts : https://developer.mozilla.org/es/docs/Web/JavaScript


//! - Representa las diferentes sintaxis que existen de crear comentarios
//!     en el lenguaje (en una línea, varias...).


// en javascript existen dos tipos de comentarios:

// de una sola linea que es el que se esta llevando en esta linea <----------

/** y el de multiples lineas
   tambien utilizado para realizar
   lo que se conoce como jsDoc y documentar que realiza el codigo.
   
   como por el ejemplo los parametros que recibe una funcion o que tipo de datos espera.
*/

 //! Crea una variable (y una constante si el lenguaje lo soporta).

var name = jose;
const surName = colmenares;

//! - Crea variables representando todos los tipos de datos primitivos
//!   del lenguaje (cadenas de texto, enteros, booleanos...).
// number
var number = 3;

// string

var js = 'JavaScripts';

//  Biginit

var big = 8838438599340320423009993248883424324n;

// undefined

var end ;

// null
var sinValor = null;

//boolean

var verdad = false;

// symbol


var simbolo = Symbol('valor unico');


//!- Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"

console.log(`hola ${js}`);