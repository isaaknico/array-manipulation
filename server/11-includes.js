/**
 * Includes
 * Determina si un elemento está o no dentro de un array, devuelve true
 o false según corresponda.
 * Util para strings y arrays.
 * Recibe como param el elemento a buscar. No recibe un arrow function.
 * Al no trabajar con arrow functions es complicado trabajar con objetos, a menos que pases la ref del obj directamente.
 */
const pets = ['cat', 'dog', 'bat'];

// Con For
let includeInArray = false; // Valor por defecto será false.
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break; // Rompe el ciclo al encontrar el elem
    }
}
console.log('With for:', includeInArray); // With for: true

// Con Includes
const rta = pets.includes('dog');
console.log('With includes:', rta); // With includes: true


/**
 * Playground
 * buscador de palabras con parámetros de búsqueda
 */

function solution(words, query) {
    return words.filter(word => word.includes(query));
}
console.log(solution(["ana", "santi", "nico", "anastasia"], "an")); // [ 'ana', 'santi', 'anastasia' ]
console.log(solution(["ana", "santi", "nico", "anastasia"], "xyz")); // []


// Otro playground
function solution(cards) {
    return cards.includes('AS') ? 'AS' : false;
}

console.log(solution(['diamonds', 'hearts', 'spades', 'AS']));
console.log(solution(['diamonds', 'hearts', 'spades']));