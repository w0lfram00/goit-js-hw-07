const refs = {
    loginForm: document.querySelector('form')
}


refs.loginForm.addEventListener('submit', handleLoginSubmit);

function handleLoginSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (!email || !password) alert('All form fields must be filled in');
    else {
        console.log({ email, password });
        form.reset();
    }
}