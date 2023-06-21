var createModal = $("#createModal");
var createAccountBtn = $(".create-account");
var span = document.getElementsByClassName("close")[0];

createAccountBtn.on("click", function () {
  createModal.show();
  console.log("create account clicked");
})

span.onclick = function () {
  createModal.hide();
}


const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#inputEmail3').value.trim();
  const password = document.querySelector('#inputPassword3').value.trim();



  if (email && password) {
    console.log(email + password);
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('You are signed up, now log in!');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupForm);