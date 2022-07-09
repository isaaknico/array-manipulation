/**
 * Concat
 * Sirve para fusionar arrays.
 * Es inmutable. No modifica el array original, genera uno nuevo.
 * Al recibir string no lo separa caracter por caracter.
 */

const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

// Con for
const newArray = [...elements]; // Copia el array, no su referencia a memoria.
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
console.log('with for:', newArray); // with for: [  1, 1, 2, 2,  3, 3, 4, 4 ]

// Con concat
const rta = elements.concat(othersElements);
console.log('with concat:', rta); // with concat: [ 1, 1, 2, 2,  3, 3, 4, 4 ]

// Con spread operator
const rta2 = [...elements, ...othersElements]; 
console.log('with ...:', rta2); // with ...: [ 1, 1, 2, 2,  3, 3, 4, 4 ]

// Con spread operator y string(sin ...)
const rta3 = [...elements, 'random'];
console.log('with ... and string:', rta3); // with ... and string: [ 1, 1, 2, 2, 'random' ]

// Problema: Con spread operator y string(con ...) Posible caso donde esperamos un array pero el user envia un string
const rta4 = [...elements, ...'random'];
console.log('with ... and ...string:', rta4); // with ... and ...string: [ 1,   1,   2,   2,   'r', 'a', 'n', 'd', 'o', 'm' ]


// Modificar el array original
elements.push(othersElements); // Toma el array y lo añade al ultimo elemento
console.log('elements', elements); // elements [ 1, 1, 2, 2, [3, 3, 4, 4]]

elements.push(...othersElements); // Toma el array y añade sus elems uno a uno
console.log('elements', elements); // elements [ 1, 1, 2, 2, 3, 3, 4, 4 ]