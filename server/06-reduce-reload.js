/**
 * Reduce reload 
 * Hace referencia al mismo metodo reduce pero descubriendo mas utilidades.
 */

/**
 * Devolviendo un objeto
 */
/* Pasos a seguir:
-Usamos .reduce en el array original.
-Pasamos como params de la arrow function el acumulador(obj) y el item
    -Definimos lógica del reduce al recorrer Array
    -Si no existe en el acumulador(obj) un atrib igual al item, guarda atrib en obj y le asigna valor 1.
    -Si el atrib ya existe(está repetido) suma 1 al valor del atrib en obj.
    -Retorna obj
-Asignamos como valor inicial un array vacio. */
const items = [1, 3, 2, 3];

// Cuantas veces se repite cada numero
const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] += 1;
    }
    return obj;
}, {}); // Queremos que se trate como obj, entonces enviamos un obj vacio

console.log(rta);
/* Output esperado:
{
    1: 1,
    3: 2,
    2: 1
}*/


/**
 * Combinar reduce con otros metodos como map
 */
const data = [
    { name: "Nicolas", level: "low", },
    { name: "Andrea", level: "medium", },
    { name: "Zulema", level: "hight", },
    { name: "Santiago", level: "low", },
    { name: "Valentina", level: "medium", },
    { name: "Lucia", level: "hight", },
  ];

// Cuantos usuario tiene cada nivel
const usersPerLevel = data
.map(item => item.level) // Crea array de puros niveles [ 'low', 'medium', 'hight', 'low', 'medium', 'hight' ]
.reduce((obj, item) => { // Cuenta los elems por nivel
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] += 1;
    }
    return obj;
}, {});

console.log(usersPerLevel); // { low: 2, medium: 2, hight: 2 }


/**
 * Reto
 * Calcula cuantos elementos hay en cada rango
 * 1-5
 * 6-8
 * 9-10
 * 
 * Output esperado:
 * {
 *     1-5: 4,
 *     6-8: 2,
 *     9-10: 2
 * }
 */
const numbers = [ 1, 3, 4, 5, 6, 8, 9, 10, 11];

const ranges = { '1-5': 0, '6-8': 0, '9-10': 0 };
const rangeCount = numbers 
.reduce((obj, element) => {
    if (element >= 1 && element <= 5) {
        obj['1-5'] += 1;
    } else if (element >= 6 && element <= 8) {
        obj['6-8'] += 1;
    } else if (element >= 9 && element <= 10) {
        obj['9-10'] += 1;
    }

    return obj
}, ranges );
console.log('original numbers', numbers) // original numbers [ 1, 3, 4,  5, 6, 8, 9, 10 ]
console.log('numbers per range', rangeCount); // numbers per range { '1-5': 4, '6-8': 2, '9-10': 2 }

// Forma usando map y reduce
/*
const rangeCountMapReduce = numbers
.map(item => {
    let range = '';
    if (item >= 1 && item <= 5) {
        range = '1-5';
    } else if (item >= 6 && item <= 8) {
        range = '6-8';
    } else if (item >= 9 && item <= 10) {
        range = '9-10';
    } else {
        range = 'other';
    }
    return range;
}) // [ '1-5',  '1-5', '1-5',  '1-5', '6-8',  '6-8', '9-10', '9-10' ]
.reduce((obj, element) => {
    if (!obj[element]) {
        obj[element] = 1;
    } else {
        obj[element] += 1;
    }
    return obj
}, {});
console.log('original numbers', numbers) // original numbers [ 1, 3, 4,  5, 6, 8, 9, 10 ]
console.log('numbers per range', rangeCountMapReduce); // numbers per range { '1-5': 4, '6-8': 2, '9-10': 2 }
*/