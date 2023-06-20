const createFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#inputName3').value.trim();
  const email = document.querySelector('#inputEmail3').value.trim();
  const password = document.querySelector('#inputPassword3').value.trim();

  if (name && email && password) {
    console.log(name + email + password);
    // Not sure if I need to change /api/users/login
    const response = await fetch('/api/users/create', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Account successfully created!')
      document.location.replace('/');
    } else {
      alert('Failed to create account');
    }
  }
};

document
  .querySelector('.create-form')
  .addEventListener('submit', createFormHandler);
