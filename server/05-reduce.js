/**
 * Reduce
 * Toma un array y lo reduce a un solo valor.
 * No devuelve otro array. 
 * Se utiliza para hacer cálculos, ejemplo: una suma total de las ventas
 * Recibe dos param:
 * - Una arrow function con dos params:
 *      - El acumulador
 *      - El elemento recorrido
 * - El estado inicial del acumulador.
 */
const totals = [1, 2, 3, 4];

// Con For
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum); // 10

// Con Reduce
const rta = totals.reduce((sum, item) => sum + item, 0);
console.log(rta); // 10


/**
 * Playground
 * Calcula la suma total de elementos en un array
 */

function solution(numbers) {
    return numbers.reduce((sum, item) => sum + item, 0);
}

console.log(solution([1, 1, 1])); // 3
console.log(solution([2, 4, 8])); // 14