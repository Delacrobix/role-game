const inputs = document.querySelectorAll('input');
const submit = document.querySelector('.login-submit');
const password_input = document.querySelector('.login-password');

submit.addEventListener('click', (e) => {
  e.preventDefault();

  postRegister();
});


password_input.addEventListener('keyup', (e) => {
  let password = password_input.value;
  let alert_text = document.querySelector('.alert-text');

  alert_text.style.display = 'block';
  
  if(password.length < 8) {
    alert_text.innerHTML = 'The password must be at least 8 characters';
  } else {
    alert_text.style.display = 'none';

    if(!haveNumber(password)){
      alert_text.style.display = 'block';
      alert_text.innerHTML = 'The password must contain at least digit';
    }
    
    if(!haveUpper(password)){
      alert_text.style.display = 'block';
      alert_text.innerHTML = 'The password must contain at least one letter in upper case';
    }
  }
});

function haveUpper(password) {
  for(let i = 0; i < password.length; i++) {
    if(isUpper(password.charAt(i))){
      return true;
    }
  }
}

function isUpper(char) {
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