const orders = [
    { customerName: 'Nicolas', total: 60, delivered: true, },
    { customerName: 'Zulema', total: 120, delivered: false, },
    { customerName: 'Santiago', total: 180, delivered: true, },
    { customerName: 'Valentina', total: 240, delivered: true, },
];

/**
 * Usando map para seleccionar solo los datos que necesito
 */
const rta = orders.map(item => item.total);
console.log('rta', rta); // rta [ 60, 120, 180, 240 ]
console.log('original', orders); /* original [
    { customerName: 'Nicolas', total: 60, delivered: true }, 
    { customerName: 'Zulema', total: 120, delivered: false }, 
    { customerName: 'Santiago', total: 180, delivered: true }, 
    { customerName: 'Valentina', total: 240, delivered: true }  ] */


/**
 * Añadiendo nuevo atributo
 * Forma erronea, pues modifica el array original
const rta2 = orders.map(item => {
    item.tax = .19;
    return item;
});
console.log('rta2', rta2); /* rta2 [
    { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
    { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
    { customerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
    { customerName: 'Valentina', total: 240, delivered: true, tax: 0.19 } ]
console.log('original', orders); /* original [
    { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
    { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
    { customerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
    { customerName: 'Valentina', total: 240, delivered: true, tax: 0.19 } ] */
  // Modifica el array original aunque map sea inmutable. 
  // Map hace la modificacion en la ref en memoria del obj del array original, 
  // y ademas retorna la ref en memoria del obj de array original.


/**
 * Añadiendo nuevo atributo sin modificar el array original
 */
// Nos aseguramos de generar un nuevo obj
// No debemos copiar las referencias a memoria, sino, crear un obj nuevo.
const rta3 = orders.map(item => {
    return {
        ...item, // Con spread operator copia los atributos del obj y no la referencia en memoria, en un nuevo obj.
        tax: .19
    };
});

console.log('original', orders); /* original [
    { customerName: 'Nicolas', total: 60, delivered: true }, 
    { customerName: 'Zulema', total: 120, delivered: false }, 
    { customerName: 'Santiago', total: 180, delivered: true }, 
    { customerName: 'Valentina', total: 240, delivered: true }  ] */
console.log('rta3', rta3); /* rta3 [
    { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
    { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
    { customerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
    { customerName: 'Valentina', total: 240, delivered: true, tax: 0.19 } ] */


/**
 * Playground: calcula y agrega nuevas propiedades a un array
 */
const products2 = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
];

function solution(array) {
    let productsWithTaxes = array.map(item => {
        return {
            ...item,
            taxes: parseInt(item.price * .19),
        }
    });

    return productsWithTaxes;
}

console.log(products2);
solution(products2);
/* [
    {name: 'Product 1', price: 1000, stock: 10, taxes: 190}
    {name: 'Product 2', price: 2000, stock: 20, taxes: 380}
] */

/* Otra forma:
function solution(array) {
  // Tu código aquí 👈 
  return array.map(item => {
    return {
      ...item,
      taxes: Math.trunc(0.19 * (item.price))
    };
  });
}; 
*/