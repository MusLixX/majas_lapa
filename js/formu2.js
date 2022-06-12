
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

//uzpiežot pogu nostrādā funkcija
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

//funkcija pārbauda vai ievadītais ir pareizi uzrakstīts
function checkInputs() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, "Username cannot be blank");
    } else {
        setSuccessFor(username);
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