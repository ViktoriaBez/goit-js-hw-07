const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    
    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
        }

   event.preventDefault();
   console.log(`Email: ${email}, Password: ${password} `);
   form.reset();  
});