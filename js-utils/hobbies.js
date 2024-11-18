/*
hobbies.js
Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree.
La funzione restituisce un oggetto con una proprietà hobbies, che è un array di hobby.
Esporta la funzione dal file.
*/


// La CONSEGNA prevede solo 3 PARAMETRI, ma in questo caso usiamo i "..." per specificare il REST ovvero un numero indefinito di PARAMETRI.
function generateHobbies(...hobbies) {
    return outputArray = hobbies;
}



// EXPORT della singola funzione per utilizzo su altri file senza la creazione di un OBJECT

module.exports = generateHobbies;



// TEST della funzione

// const myHobbiesResult = generateHobbies('calcio', 'disegno', 'nuvole', 'funghi');

// console.log('OUTPUT DELLA FUNZIONE HOBBIES:');
// console.log(myHobbiesResult);
