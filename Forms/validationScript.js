const form = document.querySelector('form');
const inputField = document.querySelector('#inputField');

form.addEventListener('submit', function (event) {
    if (!validateInput(inputField.value)) {
        event.preventDefault();
    } else {
        alert('Form submitted');
    }
});

function validateInput(inputValue) {
    const regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(inputValue)) {
        displayError('Input may only be letters and numbers.');
        return false;
    } else {
        clearError();
        return true;
    }
}

function displayError(message) {
    let errorMessage = document.querySelector('#errorMessage');
    if (!errorMessage) {
        errorMessage = document.createElement('div');
        errorMessage.id = 'errorMessage';
        form.appendChild(errorMessage);
    }
    errorMessage.textContent = message;
}

function clearError() {
    const errorMessage = document.querySelector('#errorMessage');
    if (errorMessage) {
        errorMessage.textContent = '';
    }
}