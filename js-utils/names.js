/*
names.js
Crea una funzione che accetta due parametri: firstName, lastName.
La funzione restituisce un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.
*/




// Funzione per esteso
// function generateNames(name, surname) {
//     return {
//         firstName: name,
//         lastName: surname,
//     }
// }


// Funzione con Object compatto dove le Keys dell'oggetto output hanno lo stesso nome dei parametri, per cui non ci sono i ":" con Value a seguire.
function generateNames(firstName, lastName) {
    return {
        firstName,
        lastName,
    }
}


// Funzione inutile creata unicamente per testare il "module.exports" di due elementi tramite OBJECT
function uselessFunction1() {
    console.log('This is a useless function');
}




// EXPORT delle funzioni per utilizzo su altri file tramite OBJECT

module.exports = {
    generateNames,
    uselessFunction1,
};



// TEST della funzione

const param1 = 'Luigi';
const param2 = 'Gagliozzi';

const myNamesResult = generateNames(param1, param2);

console.log('OUTPUT DELLA FUNZIONE NAMES:');
console.log(myNamesResult);
console.log(myNamesResult.firstName);