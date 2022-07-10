/**
 * Flatmap
 * Es un método que primero mapea cada elemento, y después aplana el resultado en un nuevo array.
 * Es idéntico a hacer un map() seguido de un flat() de profundidad 1.
 * Si necesitas hacer un flat de mayor profundidad, es mejor usar los métodos por separado, en lugar de usar flatMap().
 */

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

// Array completo de todos los atribs de usuarios.

// Combinando map y flat
const rta = users.map(item => item.attributes).flat();
console.log('map-flat', rta); // map-flat [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

// Con flatmap
const rta2 = users.flatMap(user => user.attributes);
console.log('flatmap', rta2); // flatmap [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]


/**
 * Reto
 * Obtener en array lineal de las fechas de inicio
 */
const calendars = {
    primaryCalendar: [
        {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
        },
        {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
        },
        {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
        },
    ],
};
const calendarsArray = Object.values(calendars).flat();
const startDatesArray = calendarsArray.map(apointment => apointment.startDate);

console.log(startDatesArray); /* [
    2021-02-01T21:00:00.000Z,
    2021-02-01T23:00:00.000Z,
    2021-02-01T18:00:00.000Z,
    2021-02-01T15:00:00.000Z
  ] */


/**
 * Playground:
 * Calcula el total de palabras en un texto
 */

function solution(lines) {
    return lines.flatMap(line => line.split(' ')).length;
}

console.log(solution([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
])); // 20