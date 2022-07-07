/**
 * Some
 * Devuelve true o false si almenos un elem cumple la condición.
 * Solo imprime true o false.
 * Si alguno cumple regresa: True, si ninguno cumple con la condicion regresa: False
 */

/**
 * Hay al menos un numero par?
 */
 const numbers = [1, 2, 3, 4];

// Con For
let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rta = true;
        break; // Si encuentra alguno no es necesario seguir iterando.
    }
}
console.log('With for',rta); // true

// Con Some
const rta2 = numbers.some( item => item % 2 === 0);
console.log('With some', rta2); // true


/**
 * Hay al menos una orden entregada?
 */
const orders = [
    { customerName: 'Nicolas', total: 60, delivered: true, },
    { customerName: 'Zulema', total: 120, delivered: false, },
    { customerName: 'Santiago', total: 180, delivered: true, },
    { customerName: 'Valentina', total: 240, delivered: true, },
    { customerName: 'Nicolas', total: 2322, delivered: false, },
];

const ordersDelivered = orders.some(order => order.delivered);
console.log(ordersDelivered); // true


/**
 * Agendar cita sin que se cruce con citas existente
 * Hay al menos una cita ya programada que se cruce con mi nueva cita a programar?
 */
const dates = [
    {
      startDate: new Date(2021, 1, 1, 10), //01/01/2021 10:00 am
      endDate: new Date(2021, 1, 1, 11), // 11:00 am
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15), // 03:00 pm
      endDate: new Date(2021, 1, 1, 15, 30), // 03:30 pm
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20), // 08:00 pm
      endDate: new Date(2021, 1, 1, 21), // 09:00 pm
      title: "Cena",
    },
];

// Nueva fecha de cita a agendar
const newApointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30)
}

const newApointment2 =  {
    startDate: new Date(2021, 1, 1, 8), // 08:00 am
    endDate: new Date(2021, 1, 1, 9, 30) // 09:30 am
}

// Importa funcion de date-fns (Necesario instalar dependencia en proyecto)
var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

// Funcion que valida si la fecha ingresada se sobrepone
const isOverlap = (newDate) => {
    return dates.some(date => { // Recorre array de fechas
        return areIntervalsOverlapping( // Compara cada fecha recorrida con la fecha a agendar. Devuelve true o false.
            { start: date.startDate, end: date.endDate }, // Fecha recorrida
            { start: newDate.startDate, end: newDate.endDate } // Fecha a agendar
        )
    })
}

console.log('isOverlap', isOverlap(newApointment)); // isOverlap true
console.log('isOverlap', isOverlap(newApointment2)); // isOverlap false


/**
 * Playground
 * ¿al menos 1 de los números es par?
 */
function solution(numbers) {
    return numbers.some(item => item % 2 === 0);
}

console.log(solution([1, 3, 5, 7, 10, 11])); // true
console.log(solution([1, 3, 5])); // false