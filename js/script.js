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
const bottone_email = document.getElementById('bottone-email');

bottone_email.addEventListener('click', function(){

  const email_input = document.getElementById('email-input').value;
  let validation_h1 = document.getElementById('validation-h1'); 

  let emailCheck = false;

  for(let i = 0; i < listaMailAutorizzati.length; i++){
  if(email_input === listaMailAutorizzati[i]){
    emailCheck = true;
  }
  /* else if (!emailCheck){
    emailCheck = false;
  } */
  }

  if(emailCheck === true){
    validation_h1.innerHTML = 'Email valida';
  }
  else if(emailCheck === false){
    validation_h1.innerHTML = 'Email non valida';
  }
})




/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/
const esito = document.getElementById('esito');
const bottone_dadi = document.getElementById('bottone-dadi');

const dadi_container = document.getElementById('dadi-container');

  bottone_dadi.addEventListener('click', function(){
  
    bottone_dadi.style.display = 'none';

    let randomUman = Math.floor(Math.random() * 6 + 1);
    console.log("Numero giocatore", randomUman);
  
    let randomPC = Math.floor(Math.random() * 6 + 1);
    console.log("Numero PC", randomPC);

    esito.classList.add('flex-properties');
  
    if(randomUman > randomPC){
      esito.innerHTML = `<h1 class="mb-5">Hai vinto tu!</h1>
                          <h2> Numero giocatore: ${randomUman}
                          <h2> Numero PC: ${randomPC}`;
    }
    else if(randomUman < randomPC){
      esito.innerHTML = `<h1 class="mb-5">Hai perso!</h1>
                          <h2> Numero giocatore: ${randomUman}
                          <h2> Numero PC: ${randomPC}`;
    }
    else{
      esito.innerHTML = `<h1 class="mb-5">Pari!</h1>
                          <h2> Numero giocatore: ${randomUman}
                          <h2> Numero PC: ${randomPC}`;
    }
    
    const bottone_dadi_ancora = document.getElementById('bottone-dadi-ancora');
    bottone_dadi_ancora.classList.remove('btn-hide');
    bottone_dadi_ancora.addEventListener('click', function(){
      let randomUman = Math.floor(Math.random() * 6 + 1);
      console.log("Numero giocatore", randomUman);
    
      let randomPC = Math.floor(Math.random() * 6 + 1);
      console.log("Numero PC", randomPC);
    
      if(randomUman > randomPC){
        esito.innerHTML = `<h1 class="mb-5">Hai vinto tu!</h1>
                            <h2> Numero giocatore: ${randomUman}
                            <h2> Numero PC: ${randomPC}`;
      }
      else if(randomUman < randomPC){
        esito.innerHTML = `<h1 class="mb-5">Hai perso!</h1>
                            <h2> Numero giocatore: ${randomUman}
                            <h2> Numero PC: ${randomPC}`;
      }
      else{
        esito.innerHTML = `<h1 class="mb-5">Pari!</h1>
                            <h2> Numero giocatore: ${randomUman}
                            <h2> Numero PC: ${randomPC}`;
      }
    })
  })



