/**
 * Flat
 * Permite aplanar arrays que tienen otros arrays dentro, 
 * como inception: un array dentro de un array, y dentro de ese array hay otro array.
 * Se debe pasar por **parámetro** hasta que **nivel de profundidad** queremos que aplane.
 * Útil al trabajar con matrices.
 */

const matriz = [
    [1,2,3],
    [4,5,6, [1, 2, [1, 2]]],
    [7,8,9]
];

// Con for (Este metodo solo aplana hasta 2 niveles de profundidad)
let newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j]; // Tambien puede asignarse array[j]
        newArray.push(element);
    }
}
console.log('With for:', newArray); // With for: [ 1, 2, 3, 4, 5, 6, [ 1, 2, [ 1, 2 ] ], 7, 8, 9 ]


// Con flat
const rta = matriz.flat(3);
console.log('With flat:', rta); // With flat: [ 1, 2, 3, 4, 5, 6, 1, 2, 1, 2, 7, 8,  9 ]


// Con for - Usando recursividad (mas de 2 niveles de profundidad) 
function flatArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) { 
        const element = array[i]; 

        if (element.length > 1) { 
            newArray.push(...flatArray(element));
        } else {
            newArray.push(element);
        }
    }
    return newArray;
}

console.log('recursive:', flatArray(matriz)); // recursive: [ 1, 2, 3, 4, 5, 6, 1, 2, 1, 2, 7, 8, 9 ]