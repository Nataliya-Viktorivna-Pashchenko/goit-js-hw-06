const loginForm = document.querySelector(".login-form");

const loginHendler = (event) => {
    event.preventDefault();
 const { email, password } = event.currentTarget.elements;
        const info = {
            email: email.value,
            password: password.value,
        };
    if (info.email === '' || info.password === '') {
        alert('Всі поля повинні бути заповнені');
    } else {
        console.log(info);
        loginForm.reset();
    };
};
loginForm.addEventListener("submit", loginHendler);
