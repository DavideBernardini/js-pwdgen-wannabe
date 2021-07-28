// nome utente
var firstname = prompt('inserisci il tuo nome');
// cognome utente
var surname = prompt('inserisci il tuo cognome');
//colore preferito
var color = prompt('inserisci il tuo colore preferito');
// creazione password
var password = firstname + surname + color;
// Aggiunta password al documento
document.getElementById('yourpassword').innerHTML += password + 40;