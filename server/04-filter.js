/**
 * Filter
 * Filtra el array original en base a una condición, los que la cumplan estaran en el nuevo array creado.
 * Inmutable.
 * El nuevo array creado solamente puede contener:
 * - cero coincidencias
 * - todas coincidencias
 * - algunas coincidencias
 * - Pero Nunca más coincidencias que el tamaño del array original.
 * Nota: Si tenemos muchos objs como en una bd es mejor dejar ese filtrado al lenguaje de bd.
*/
const words = ["spray", "limit", "elite", "exuberant"];

// Con For
const newArrayFor = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArrayFor.push(item);
    }
}

console.log('original', words);
console.log('newArrayFor', newArrayFor);

// Con Filter
const rta = words.filter(item => item.length >= 6 )

console.log('original', words);
console.log('newArrayFilter', rta);

// Filter ejemplos
const orders = [
    { customerName: 'Nicolas', total: 60, delivered: true, },
    { customerName: 'Zulema', total: 120, delivered: false, },
    { customerName: 'Santiago', total: 180, delivered: true, },
    { customerName: 'Valentina', total: 240, delivered: true, },
    { customerName: 'Nicolas', total: 2322, delivered: false, },
];

// Añade al array las ordenes entregadas y un total mayor a 100.
const rta3 = orders.filter(item => item.delivered && item.total >= 100); 
console.log('rta3', rta3);

// Añade al array las ordenes cuyo nombre de comprador incluya el texto pasado por param
const search = (query) => {
    return orders.filter(item => { 
        return item.customerName.includes(query);
    });
};
console.log(search('Ni')); /* [ 
    { customerName: 'Nicolas', total: 60, delivered: true },
    { customerName: 'Nicolas', total: 2322, delivered: false } ] */
console.log(search('ni')); // []


/**
 * Reto
 * Si fuera un array de objetos con name, lastName y age 
 * ¿Cómo harías el método para que el buscador encuentre coincidencias con cualquiera de esos atributos?
 */
const users = [
    { name: 'Isaak', lastName: 'Nico', age: 25 },
    { name: 'Zulema', lastName: 'Zuli', age: 28 },
    { name: 'Santiago', lastName: 'saanti', age: 23 },
    { name: 'Valentina', lastName: 'Valen', age: 26 },
];

const fullSearch = (query) => {
    return users.filter(item => {
        return item.name.includes(query) ||
            item.lastName.includes(query) ||
            item.age == query;
    });
}

console.log(fullSearch('saa')); /* [
  { name: 'Isaak', lastName: 'Nico', age: 25 },
  { name: 'Santiago', lastName: 'saanti', age: 23 } ] */


/**
 * Playground
 * Retorna solo palabras de 4 letras o más
 */
function solution(array) {
    return array.filter(item => item.length >= 4);
}

console.log(solution(['amor', 'sol', 'piedra', 'día'])); // [ 'amor', 'piedra' ]