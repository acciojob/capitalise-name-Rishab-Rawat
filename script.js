//your JS code here. If required.
function convertToUpperCase() {
    const inputField = document.getElementById('fname');
    inputField.value = inputField.value.toUpperCase();
}

// Attach the event listener to the input field
document.getElementById('fname').addEventListener('blur', convertToUpperCase);