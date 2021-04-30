// Consegna:
// 1. chiedi all'utente il cognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var cognomi = [ 'Neri', 'Bianchi', 'Rossi', 'Verdi', 'Gialli'];
var askCogn = prompt('inserisci cognome');
cognomi.push(askCogn);


cognomi.sort();


for (var i = 0; i < cognomi.length; i++) {
    var umano = i + 1;
    // console.log("il numero umano è: " + (i+1) + " " + cognomi[i]);
    console.log("il numero umano è: " + umano + " " + cognomi[i]);
}

