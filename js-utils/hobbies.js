/*
hobbies.js
Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree.
La funzione restituisce un oggetto con una proprietà hobbies, che è un array di hobby.
Esporta la funzione dal file.
*/


// La CONSEGNA prevede solo 3 PARAMETRI, ma in questo caso usiamo i "..." per specificare il REST ovvero un numero indefinito di PARAMETRI.
function generateHobbies(...hobbies) {
    let outputArray = [];
    
    for (let x=0; x < hobbies.length; x++) {
    
        if ((typeof hobbies[x]) == 'object') {
            let inputArray = hobbies[x];
        
            for (let i=0; i < inputArray.length; i++) {
                let currentHobby = inputArray[i];

                outputArray.push(currentHobby);
        }
        } else if ((typeof hobbies[x]) == 'string') {
            outputArray.push(hobbies[x]);
        }
    }
    
    return outputArray;
}



// EXPORT della singola funzione per utilizzo su altri file senza la creazione di un OBJECT

module.exports = generateHobbies;



// TEST della funzione

// Test con ARRAY
// const testInput = ['calcio', 'disegno', 'nuvole', 'funghi'];

// const myHobbiesResult = generateHobbies(testInput);

// Test con STRINGS
// const myHobbiesResult = generateHobbies('calcio', 'disegno', 'nuvole', 'funghi');

// OUTPUT
// console.log('OUTPUT DELLA FUNZIONE HOBBIES:');
// console.log(myHobbiesResult);
