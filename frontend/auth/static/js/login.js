const inputs = document.querySelectorAll('input');
const submit = document.querySelector('.login-submit');

submit.addEventListener('click', (e) => {
  e.preventDefault();

  let user = {
    user: '',
    pass: ''
  }

  inputs.forEach(function (input) { 
    console.log(input.value);
  });
});



