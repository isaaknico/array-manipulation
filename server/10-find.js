/**
 * Find
 * Retorna solo el primer elemento del array que cumpla con la condicional.
 * Si no encuentra ninguno devuelve undefined.
 */

const numbers = [1, 30, 49, 29, 10, 13];

// Con For
let rta = undefined; // Si no encuentra el elem devuelve undefined
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
        rta = element;
        break; // Detiene el recorrido al encontrar la primer coincidencia
    }
}
console.log('With For:', rta); // 30

// Con find
const rta2 = numbers.find(item => item === 30);
console.log('With Find:', rta2); // 30

// Buscando en objetos dentro de array
const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];
const rta3 = products.find(item => item.id === '🍔');
console.log('find: Elem with id = burger:', rta3); // Hamburguer: { name: 'Burger', price: 23, id: '🍔' }


/**
 * FindIndex
 * Devuelve la posicion en el array del elemento que cumpla la condición.
 * Devuelve -1 si no encuentra el elem.
 * No devuelve el elemento solo la posicion o -1.
 */
const rta4 = products.findIndex(item => item.id === '🍔');
console.log('findIndex: Position of elem with i d= burger:', rta4); // Position of elem with i d= burger: 1