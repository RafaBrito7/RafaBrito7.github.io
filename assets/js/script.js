document
  .getElementById('btn-submit')
  .addEventListener('click', (e) => console.log('O botão foi clicado!'));

document
  .getElementById('form-login')
  .addEventListener('mouseenter', (e) => console.log('Mouse no formulário'));

document
  .querySelector('#form-login')
  .addEventListener('mouseleave', (e) => console.log('O Mouse está fora'));

document.querySelector('#form-login').addEventListener('submit', (e) => {
  e.preventDefault();

  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;

  let json = {
    email: email,
    password: password,
  };

  /* Conversões de JSON -> String
  let stringJSON = JSON.stringify(json); // Convertendo de JSON para String
  console.log(stringJSON);

  let jsonParse = JSON.parse(stringJSON); // Convertendo de String para JSON
  console.log(jsonParse);
  */

  if (!json.email) {
    console.error('Campo Email Não Preenchido');
  } else if (!json.password) {
    console.error('Campo Password Não Preenchido!');
  } else {
    console.info('Login Realizado!');
  }
});
