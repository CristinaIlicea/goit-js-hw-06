const textInput = document.querySelector(".validation-input");
const dataLength = document.querySelector(".data-length");

function validateForm() {
    let form = document.getElementById('validation-input');
    for (var i=0; i< validation-input.length; i++) {
        if(validation-input.length <= dataLength) {
            alert("Please enter 6 symbols");
            return false;
        }
    }};
textInput.addEventListener("input", validateForm);
