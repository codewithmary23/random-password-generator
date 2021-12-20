// Elements
let inputPassword = document.getElementById('password');
const btnGenerate = document.querySelector('.generate');
const btnCopy = document.querySelector('.copy');

// Functions
function generatePassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 10;
    let password = "";

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);

        inputPassword.value = password;
    }
}

generatePassword();

function copyPassword() {
    let copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0, 999);
    navigator.clipboard.writeText(copyText.value);
}

// Event listeners
btnGenerate.addEventListener('click', generatePassword);

btnCopy.addEventListener('click', copyPassword);