/*--- This file for client-side validation ---*/

(function() {
  const form = document.querySelector('form');
  const username = document.querySelector('input[name=username]');
  const password = document.querySelector('input[name=password]');
  const confPassword = document.querySelector('input[name=confPassword]');
  const submitBtn = document.querySelector('input[type=submit]');
  const errorMessage = document.querySelector('span');

  submitBtn.disabled = true;
  errorMessage.style.visibility = 'hidden';

  form.oninput = () => {
    if (username.value !== '' && password.value !== '' && confPassword.value !== '') {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }

    if (password.value === confPassword.value) {
      errorMessage.style.visibility = 'hidden';
    }
  };

  submitBtn.addEventListener('click', e => {
    e.preventDefault();
    if (password.value != confPassword.value) {
      errorMessage.style.visibility = 'visible ';
    } else {
      setTimeout(() => {
        window.location = '/login';
      }, 1200);
    }
  });
})();
