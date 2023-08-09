// Importamos o Swal da biblioteca sweetalert2
import Swal from 'sweetalert2';

//API BASE URL:
const API_BASE = 'https://akabab.github.io/superhero-api/api/';

//MANIPULACAO EM DOM:
const img = document.querySelector('#img');
const button = document.querySelector('#button');
const name = document.querySelector('#hero');

//numero aleatorio maior que os ids:
function randomId() {
    return Math.floor(Math.random() * 740) + 1;
}

// Adicionando o click:
button.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomId();
  
});