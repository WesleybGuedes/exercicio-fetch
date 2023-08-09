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
  // Fazer o fetch utilizando a API_BASE e o id gerado na function

  fetch(`${API_BASE}/id/${id}.json`)
  // Depois tem que extrair o objeto com a função .json()
    .then((result) => result.json())
    .then((data) => {
      // Uma vez extraído, coloca as infos nas constantes criadas:
      img.src = data.images.xs;
      name.innerHTML = data.name;
    })
// Caso haja erro, nós tratamos o mesmo com o .catch()
.catch((error) => Swal.fire({
  // Aqui, estou usando a biblioteca SweetAlert2 importada no comeco do proj:
  title: 'Hero not found',
  text: error.message,
  icon: 'error',
  confirmButtonText: 'Cool',
}));
});
