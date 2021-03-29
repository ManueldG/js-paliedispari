
/**
 * funzione che verifica se una stringa è palindroma
 * @param {string} word 
 * @returns boolean
 */

function isPalindromes(word) {
    var risp=0;
    var len = word.length;
    console.log(len);

    for(var i = 0; i < len/2; i++) 
        if (word[i] != word[len-1-i]){
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
    return Math.floor(Math.random()*(max-min)+(min));
}

/**
 * controlla se un numero è pari
 * @param {numero da controllare } numero 
 * @returns 1 se pari 0 se dispari
 */
function isEven(numero){
    return (!((numero)%2));
}
 