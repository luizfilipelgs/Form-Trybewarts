const logar = document.getElementById('logar');

logar.addEventListener('click', (pv) => {
  pv.preventDefault();
  const login = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  console.log(`email: ${login}`);
  console.log(`senha: ${senha}`);
  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const termo = document.getElementById('agreement');
const enviar = document.getElementById('submit-btn');
enviar.disabled = true;

function termoAceito() {
  if (termo.checked === true) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
}

termo.addEventListener('change', termoAceito);
