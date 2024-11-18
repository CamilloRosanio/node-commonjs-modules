/*
people.js
Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri.
All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies.
*/




// Dichiarazione del PATH (built-in)
const path = require('path');


// Dichiarazione dei PATH di NAMES e HOBBIES
const namesPath = path.join(__dirname, 'names.js');
const hobbiesPath = path.join(__dirname, 'hobbies.js');



// Dichiarazione delle funzioni di NAMES e HOBBIES
/*
La funzione generateNames è stata importata tramite DESTRUCTURING escludendo l'altra.
Se le avessi volute entrambe, avrei utilizzato questa sintassi che rende l'intero OBJECT dell'EXPORT
const names = require(namesPath);
*/

const { generateNames } = require(namesPath);
const generateHobbies = require(hobbiesPath);



// Dichiarazione della funzione che sfrutta le due funzioni importate

const personName = 'Gianni';
const personLastName = 'Garbuglio';

function generatePeople() {

    const firstName = generateNames(personName, personLastName).firstName;
    const lastName = generateNames(personName, personLastName).lastName;
    const hobbies = generateHobbies('pallacanestro', 'motocross', 'paracadutismo', 'gatti', 'pizza');

    const person = {
        firstName: firstName,
        lastName: lastName,
        hobbies: hobbies,
    }

    return person;
}



// TEST della funzione

// console.log('OUTPUT DELLE FUNZIONI COMBINATE:');
// console.log(generatePeople());
// console.log(generatePeople().hobbies[0]);



// EXPORT della singola funzione per utilizzo su altri file senza la creazione di un OBJECT

module.exports = generatePeople;