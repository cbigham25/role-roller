const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#inputEmail3').value.trim();
  const password = document.querySelector('#inputPassword3').value.trim();

  if (email && password) {
    console.log(email + password);
    // Not sure if I need to change /api/users/login
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

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
