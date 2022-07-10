/**
 * Metodos mutables
 * - push(): Muta el array al que agrega un elem.
 * - splice(): Muta el array eliminando elementos. Requiere 2 parámetros:
 *      - la ubicacion del elem (no el id)
 *      - cuantos elems quiero eliminar a partir de esa ubicación
 */

// Eliminar elem de un array
const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10)); // ----------

// Nota: Elimina el product del array original una vez agregado al nuevo array.
const productIndex = products.findIndex(item => item.id === '🍔'); // 1
if (productIndex !== -1) { // Si devuelve -1 significa que no encontró el elem
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}
console.log("products", products); /* products [ 
    { title: 'Pizza', price: 121, id: '🍕' },  
    { title: 'Hot cakes', price: 121, id: '🥞' } 
  ] */
console.log("myProducts", myProducts); // myProducts [ { title: 'Burger', price: 121, id: '🍔' } ]
console.log("-".repeat(10)); // ----------


// Reto 1: Elimina el producto(en un nuevo array) sin modificar el array original 
const productsR = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProductsR = [];
const newProducts = [...productsR];

const productIndex2 = productsR.findIndex(item => item.id === '🍔'); // 1
if (productIndex2 !== -1) { // Si devuelve -1 significa que no encontró el elem
    myProductsR.push(productsR[productIndex2]);
    newProducts.splice(productIndex2, 1);
}
console.log("products", productsR); /* products [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' }
  ] */
console.log("newProducts", newProducts); /* newProducts [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Hot cakes', price: 121, id: '🥞' }
  ] */
console.log("myProducts", myProductsR); // myProducts [ { title: 'Burger', price: 121, id: '🍔' } ]
console.log("-".repeat(10)); // ----------


// Update elem de un array
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicious'
    }
}

// Nota: Modifica el elem en el array original
const productIndexV2 = productsV2.findIndex(item => item.id === '🥞');
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2], // Respeta lo que ya habia en esa posicioón
    ...update.changes, // Aplica cambios
};
console.log(productsV2); /* [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    {
      title: 'Hot cakes',
      price: 200,
      id: '🥞',
      description: 'delicious'
    }
  ] */


// Reto 2: Realiza la modificacion(en un nuevo array) sin modificar el array original.
const productsR2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const updateR2 = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicious'
    }
}
const productIndexR2 = productsR2.findIndex(item => item.id === '🥞');
const newProductsR2 = [...productsR2];
newProductsR2[productIndexR2] = {
    ...newProductsR2[productIndexR2],
    ...updateR2.changes,
};
console.log('productsR2:',productsR2); /* productsR2: [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' }
  ] */
console.log('newProductsUpdateR2:', newProductsR2); /* newProductsUpdateR2: [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    {
      title: 'Hot cakes',
      price: 200,
      id: '🥞',
      description: 'delicious'
    }
  ] */