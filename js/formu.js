const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//uzpiežot pogu nostrādā funkcija
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

//funkcija pārbauda vai ievadītais ir pareizi uzrakstīts
function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, "Username cannot be blank");
    } else {
        setSuccessFor(username);
    }
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (passwordValue.length < 6) {
        setErrorFor(password, 'Password is less then 6 simbols');
    } else if (!passwordValue.match(/[0-9]/i)) {
        setErrorFor(password, 'Password does not have one letter');
    } else {
        setSuccessFor(password);
    }
    if(password2Value === '') {
        setErrorFor(password2, 'Password Check cannot be blank');
    } else if (passwordValue != password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else {
        setSuccessFor(password2);
    }

}

//funkcija nostrādā ja ir nepareizs, pievieno klassi error un kļūdas ziņa
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

//ja pareizs, peivieno classi success
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}  
//parbauda vai e-pasts ir pareizi uzrakstits
function isEmail(email) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{0,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}