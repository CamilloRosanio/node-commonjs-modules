/************************************************
# CONSEGNA
************************************************/

/*
esercizio di oggi: commonjs-modules
nome repo: node-commonjs-modules

Lavoriamo con i moduli commonjs esportando e importando valori e funzioni. Segui questi tre step creando i rispettivi files:

names.js
Crea una funzione che accetta due parametri: firstName, lastName.
La funzione restituisce un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.

hobbies.js
Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree.
La funzione restituisce un oggetto con una proprietà hobbies, che è un array di hobby.
Esporta la funzione dal file.

people.js
Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri.
All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies.
*/






/************************************************
# SVOLGIMENTO
************************************************/

// Dichiarazione del PATH (built-in)
const path = require('path');
const generatePeople = require('./js-utils/people');

// IMPORT della funzione generatePeople
const peoplePath = path.join(__dirname, 'js-utils', 'people.js');


// Richiamo della funzione importata:
console.log('RISULTATO FINALE:');
console.log(generatePeople());
console.log(generatePeople().firstName);
console.log(generatePeople().hobbies[2]);





