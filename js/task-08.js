const form = document.querySelector(".login-form");

form.addEventListener('submit', onForm);

function onForm(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (!email.value || !password.value) {
    return alert("Усі поля повинні бути заповнені");
    };
    
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}
