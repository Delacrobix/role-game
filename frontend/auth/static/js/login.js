const inputs = document.querySelectorAll('input');
const submit = document.querySelector('.login-submit');

submit.addEventListener('click', (e) => {
  e.preventDefault();

  postUser();
});

async function postUser(){
  let user = getFormData();

  const response = await fetch('/auth/login/verify', {
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
    password: ''
  }

  let i = 0;
  let user_keys = Object.keys(user);

  inputs.forEach(function(input) { 
    user[user_keys[i]] = input.value.toLowerCase();
    console.log(user_keys[i]);
    i++;
  });

  return user;
}