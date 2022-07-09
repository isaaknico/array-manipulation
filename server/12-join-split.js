/**
 * Join
 * Une todos los elementos de un array en una cadena y devuelve esta cadena. 
 * Podemos pasarle cualquier elemento como separador que deseemos.
 */

const elements = ['Fire', 'Air', 'Water'];

// Con for
const separator = '--';
let rtaFinal = '';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator; 
}
console.log('With for:', rtaFinal); // With for: Fire--Air--Water--

// Con for sin separador en ultimo elem
let rtaFinal2 = '';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    const lastElem = elements.length - 1;
    if (index == 0 || index == lastElem) {
        rtaFinal2 = rtaFinal2 + element; 
    } else {
        rtaFinal2 = rtaFinal2 + element + separator; 
    }
}
console.log('With for2:', rtaFinal2); // With for2: Fire--Air--Water

// Con join
const rta = elements.join('--');
console.log('With join:', rta); // With join: Fire--Air--Water

// Ejemplo palindromo
const word = 'Arepera'

const palindrome = (word) => {
  // Lo que hace dividir, voltear y luego unirlo con el join...
	return word.split('').reverse().join('').toLocaleLowerCase()

};

console.log(palindrome(word)) // arepera

/**
 * Split
 * Divide un objeto de tipo String en un array de cadenas mediante la separación de la cadena en sub-cadenas.
 * Recibe como argumento un patrón(expresion regular, caracter, etc) para separar en elems el array.
 */
const title = 'Curso de manipulación de arrays';

const urlFinal = title.split(' ') // Cada espacio genera un elem del array: [ 'Curso', 'de', 'manipulación', 'de', 'arrays' ]
.join('-') // Une los elems del array generado usando '-' como separador: Curso-de-manipulación-de-arrays
.toLowerCase() // Pasa todo a minusculas: curso-de-manipulación-de-arrays
console.log(urlFinal); // curso-de-manipulación-de-arrays


/**
 * Playground
 * Construye URLs a partir de strings
 */

function solution(title) {
    return title
        .split(' ')
        .join('-')
        .toLowerCase();
}

console.log(solution("La forma de correr Python"));
console.log(solution("La API para nunca parar de aprender"));
console.log(solution("Curso de arrays"));