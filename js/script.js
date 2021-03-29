/*
Esercizio di oggi: Palidroma e Pari e Dispari
nome repo: js-paliedispari
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari
e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli
Scriviamo sempre con commenti i passaggi che vogliamo fare 2.
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
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


var parola;
parola = prompt("inserisci la parola da controllare ");
if  (isPalindromes(parola))
    console.log(" La parola "+parola+" è palindroma");
else
    console.log(" La parola "+parola+" non è palindroma");
