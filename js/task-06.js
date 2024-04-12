const textInput = document.getElementById("validation-input");
textInput.addEventListener("blur", validateForm);

function validateForm() {
    const correctLength = this.dataset.length;
    const inputDataLength = this.value.length;
    
        if(correctLength <= inputDataLength) {
            this.style.borderColor = "#4caf50";
        } else {
          this.style.borderColor = "#f44336";
        }
    };
