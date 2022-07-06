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