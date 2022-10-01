const inputs = document.querySelectorAll('input');
const submit = document.querySelector('.login-submit');
const password_input = document.querySelector('.login-password');

submit.addEventListener('click', (e) => {
  e.preventDefault();

  postRegister();
});

/*
  * Lógica que verifica que la contraseña cumpla con tener
  * - Almenos un numero
  * - Almenos una letra mayúscula
*/
password_input.addEventListener('keyup', (e) => {
  let password = password_input.value;
  let alert_text = document.querySelector('.alert-text');
  let message = 'The password must be:';

  alert_text.style.display = 'block';

  submit.disabled = false;
  
  if(password.length < 8) {
    message += '<br>' + '- at least 8 characters'
    alert_text.innerHTML = message;

    submit.disabled = true;
  } else {
    alert_text.style.display = 'none';

    if(!haveNumber(password)){
      alert_text.style.display = 'block';
      message += '<br>' + '- contain at least digit';

      submit.disabled = true;
      alert_text.innerHTML = message;
    }
    
    if(!haveCapitalLetter(password)){
      alert_text.style.display = 'block';
      message += '<br>' + '- contain at least one capital letter';

      submit.disabled = true;
      alert_text.innerHTML = message;
    }
  }
});

function haveCapitalLetter(password) {
  for(let i = 0; i < password.length; i++) {
    if((isCapitalLetter(password.charAt(i))) && (isNaN(password.charAt(i)))){
      return true;
    }
  }
}

function isCapitalLetter(char) {
  return (char == char.toUpperCase())
}

function haveNumber(password){
  for(let i = 0; i < password.length; i++) {
    if(!isNaN(password.charAt(i))){
      return true;
    }
  }
}

async function postRegister(){
  let user = getFormData();

  const response = await fetch('/auth/register/save-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json());

  console.log(response);
}

function getFormData(){
  let user = {
    user: '',
    email: '',
    password: ''
  }

  let i = 0;
  let user_keys = Object.keys(user);

  inputs.forEach(function (input) { 
    user[user_keys[i]] = input.value.toLowerCase();
    i++;
  });

  return user;
}