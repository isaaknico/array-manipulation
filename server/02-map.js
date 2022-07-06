/**
 * Map
 * Inmutable. No modifica el array original.
 * Retorna un nuevo array con la "transformacion" aplicada.
 * Devuelve el mismo numero de elems.
 */
const letters = ['a', 'b', 'c'];

// Con Map
const newArrayMap = letters.map(item => item + '++');

// Con For
const newArrayFor = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArrayFor.push(element + '++');
}
console.log('original', letters); // original [ 'a', 'b', 'c' ]
console.log('newMap', newArrayMap); // newMap [ 'a++', 'b++', 'c++' ]
console.log('newFor', newArrayFor); // newFor [ 'a++', 'b++', 'c++' ]


/**
 * Playground: multiplica todos los elementos por dos
 */
const nums = [2, 4, 5, 6];

function solution(array) {
    const numsMultiplied = array.map(item => {
        return item * 2;
    });

    return numsMultiplied;
}

console.log(solution(nums));

/* Otra forma
function solution(array) {
	return array.map(num => num * 2);
}; 
console.log(solution([2, 4, 5, 6]));
*/