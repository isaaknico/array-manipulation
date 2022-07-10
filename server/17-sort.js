/**
 * Sort
 * Permite hacer ordenamiento dentro de los array.
 * Es mutable.
 * Cada vez que lo apliques va a cambiar el orden del array original.
 * Formas de ordenar:
 * - Por defecto: ordena en orden casi alfabético usando la table del código ASCII
 * - Personalizado: indicando el ordenamiento con arrow function.
 *      - Enviamos siempre 2 params, los necesita para comparar quien es mas grande que otro, etc.
 */

// Ordenar palabras
const months = ["March", "Jan", "Feb", "Dec"];
months.sort(); // Ordena por defecto Alf según ASCII
console.log(months); // [ 'Dec', 'Feb', 'Jan', 'March' ]


// Ordenar numeros
const numbers = [1, 30, 4, 21, 100000];
// Ordena por defecto según ASCII
// numbers.sort(); 
// console.log(numbers); // [ 1, 100000, 21, 30, 4 ]

// Ordena por peso como entero (pasando arrow funct)
// numbers.sort((a,b) => a - b); // De menor a mayor
// console.log(numbers); // [ 1, 4, 21, 30, 100000 ]
numbers.sort((a,b) => b - a); // De mayor a menor 
console.log(numbers); // [ 100000, 30, 21, 4, 1 ]


// Ordenar palabras con caracteres raros & navegadores antiguos
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
// Ordena por defecto según ASCII
words.sort();
console.log(words); /* [
    'adieu',
    'banana',
    'café',
    'communiqué',
    'premier',
    'réservé',
    'éclair'
  ] */

// Sort por defecto para navegadores no modernos o vers. de node no actualizadas
// Debes retornar en tu arrow funct una comparacion con la configuración de idioma en donde correrá el código
words.sort((a,b) => a.localeCompare(b));
console.log(words);
 

// Ordenar objetos
// Debemos indicar el atributo por el cual queremos ordenar.
// En la arrow function cada 'a','b' será un objeto.
const orders = [
     {
         customerName: "Nicolas",
         total: 600,
         delivered: true,
     },
     {
         customerName: "Zulema",
         total: 120,
         delivered: false,
     },
     {
         customerName: "Santiago",
         total: 1840,
         delivered: true,
     },
     {
         customerName: "Valentina",
         total: 240,
         delivered: true,
     },
     {
        customerName: "Valentina22",
        total: 2,
        delivered: true,
    },
];

// Ordenar por total (por peso numerico pasando arrow funct)
orders.sort((a,b) => a.total - b.total); // De menor a mayor
console.log(orders); /* [
    { customerName: 'Zulema', total: 120, delivered: false },
    { customerName: 'Valentina', total: 240, delivered: true },
    { customerName: 'Nicolas', total: 600, delivered: true },
    { customerName: 'Santiago', total: 1840, delivered: true }
  ] */


/**
 * Reto
 * Ordenar fechas de mas recientes a mas antiguas
 * (Antes agrega fechas a array orders).
 */

const ordersWithDates = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: {
            startDate: new Date(2021, 1, 1, 10), //01/01/2021 10:00 am
            endDate: new Date(2021, 1, 1, 11), // 11:00 am
            title: "Cita de trabajo",
        },
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: {
            startDate: new Date(2021, 1, 1, 15), // 03:00 pm
            endDate: new Date(2021, 1, 1, 15, 30), // 03:30 pm
            title: "Cita con mi jefe",
        },
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: {
            startDate: new Date(2021, 1, 1, 20), // 08:00 pm
            endDate: new Date(2021, 1, 1, 21), // 09:00 pm
            title: "Cena",
        },
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: {
            startDate: new Date(2021, 1, 1, 08), // 08:00 am
            endDate: new Date(2021, 1, 1, 09), // 09:00 am
            title: "Almuerzo",
        },
    },
];
ordersWithDates.sort((a, b) => a.date.startDate - b.date.startDate);
console.log(ordersWithDates); /* [
    {
      customerName: 'Valentina',
      total: 240,
      delivered: true,
      date: {
        startDate: 2021-02-01T14:00:00.000Z,
        endDate: 2021-02-01T15:00:00.000Z,
        title: 'Almuerzo'
      }
    },
    {
      customerName: 'Nicolas',
      total: 600,
      delivered: true,
      date: {
        startDate: 2021-02-01T16:00:00.000Z,
        endDate: 2021-02-01T17:00:00.000Z,
        title: 'Cita de trabajo'
      }
    },
    {
      customerName: 'Zulema',
      total: 120,
      delivered: false,
      date: {
        startDate: 2021-02-01T21:00:00.000Z,
        endDate: 2021-02-01T21:30:00.000Z,
        title: 'Cita con mi jefe'
      }
    },
    {
      customerName: 'Santiago',
      total: 1840,
      delivered: true,
      date: {
        startDate: 2021-02-02T02:00:00.000Z,
        endDate: 2021-02-02T03:00:00.000Z,
        title: 'Cena'
      }
    }
  ] */