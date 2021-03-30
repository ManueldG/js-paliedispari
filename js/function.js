
/**
 * funzione che verifica se una stringa è palindroma
 * @param {string} word 
 * @returns boolean
 */

function isPalindromes(word) {
    word = word.toLowerCase().trim(); // porta la stringa in minuscolo e toglie gli spazi
    var risp=0;
    var len = word.length; // legge la lunghezza della stringa
    console.log(word);

    for(var i = 0; i < len/2; i++) // cicla la lunghezza della stringa/2 non c'è bisogno di scorrerla tutta
        if (word[i] != word[len-1-i]){ // compara la lettera in posizione i con la lettera della posizione complementare
            console.log("i: "+i+" lettera "+word[i]+" lettera "+word[(len-1-i)]);
            risp=false;
        }            
        else{
            risp=true;
        }            
        return risp;        
}


/**
 * estrae un numero compreso tra min e max
 * @param {valore minimo} min 
 * @param {valore massimo} max 
 * @returns number
 */

 function random(min, max) {
    return Math.floor(Math.random()*(max-min+1)+(min));// ritorna un numero random compreso tra min e max e approsimato  
}

/**
 * controlla se un numero è pari
 * @param {number} numero 
 * @returns 1 se pari 0 se dispari
 */
function isEven(numero){
    return (!((numero)%2)); // ritorna il valore negato di modulo di 2 
}
 