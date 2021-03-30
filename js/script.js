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
var select = document.getElementById('select');
console.log(select);
console.log (select.value);

document.getElementById("select").addEventListener("change",function(){
    console.log("entro");
    switch(select.value){
        case "1":
            var parola;
            parola = prompt("inserisci la parola da controllare ");
            if  (isPalindromes(parola)) // controlla se la parola è palindroma
                document.getElementById("risultato").innerHTML=(" La parola "+parola+" è palindroma"); // se true è palindroma
            else
                document.getElementById("risultato").innerHTML=(" La parola "+parola+" non è palindroma"); // altrimenti non è palindroma
        break;
        
        case "2": 
                var scelta = prompt("pari o dispari??").trim(); // chiede la scelta tra pari e dispari e pulisce dagli spazi la stringa
                var numero = parseInt (prompt("inserisci numero da 1 a 5")); // inserisce un numero da 1 a 5
                var numeroCPU = random(1,5); //estrae un numero tra 1 e 5
                var somma = numero + numeroCPU; // somma i numeri dei due giocatori
                
                console.log("hai scelto "+scelta," numero "+numero," il computer ha scelto "+numeroCPU," la somma è "+somma);
                console.log( ( isEven(somma) && scelta==='pari') || (!(isEven(somma)) && scelta==='dispari') ? "hai vinto" : "hai perso"); //se la somma è pari e scelta è pari o la somma è dispari e la scelta è dispari scrive hai vinto altrimenti hai perso
        break;

        default: alert("scegli un valore");
    }
    select.value=0;
});





