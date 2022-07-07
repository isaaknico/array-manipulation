/**
 * Every
 * Devuelve true o false si TODOS los elementos cumplen la condicion.
 */
const numbers = [1, 30, 39, 29, 10, 13];

// Con For
let rta = true; // For va a desmentir
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) { // Si solo uno es mayor
        rta = false;
    }
}
console.log('With For:', rta);

// Con Every
const rta2 = numbers.every(item => item <= 40); // Evalua que sean menores a 40
console.log('With Every:', rta2);


/**
 * Reto
 * Evalua que todos los jugadores sean menores de 15 años.
 */
const team = [
    { name: "Nicolas", age: 12, },
    { name: "Andrea", age: 8, },
    { name: "Zulema", age: 2, },
    { name: "Santiago", age: 18, },
];

const isBelowThreshold = team.every(item => item.age < 15);
console.log('is Below Threshold:', isBelowThreshold); // is Below Threshold: true


/**
 * Playground:
 * Retorna un booleano si todos los elementos son pares
 */
function solution(numbers) {
    return numbers.every(elem => elem % 2 === 0);
}

console.log(solution([2, 4, 6, 8, 10]));
console.log(solution([1, 3, 5, 7, 10, 11]));
console.log(solution([1, 3, 5]));