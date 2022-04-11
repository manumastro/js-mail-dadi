/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati),
stampa un messaggio appropriato sull’esito del controllo.
*/


const listaMailAutorizzati =[
  "domenico.agostino@gmail.com",
  "mihai.badia@gmail.com",
  "riccardo.becattini@gmail.com",
  "manuel.benini@gmail.com",
  "bruno.bernardini@gmail.com",
  "guido.buono@gmail.com",
  "pierluigi.cancellaro@gmail.com",
  "francesco.cataletto@gmail.com",
  "stefano.cravotta@gmail.com",
  "giovanni.crispino@gmail.com",
  "giancarlo.croce@gmail.com"
];

const emailInput = prompt("Inserire l'Email");
console.log(emailInput);

let emailCheck = false;

for(let i = 0; i < listaMailAutorizzati.length; i++){
  if(emailInput === listaMailAutorizzati[i]){
    emailCheck = true;
  }
  else if (!emailCheck){
    emailCheck = false;
  }
}

if(emailCheck === true){
  console.log("autorizzazione concessa");
}
else if(emailCheck === false){
  console.log("autorizzazione non concessa");
}


/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/
























/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/
