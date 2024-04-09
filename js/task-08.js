const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", handleSubmit);
  
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email == "" || password == "") {
      return console.log("All fields must be filled in");
    }
    else if(email.length < "6" || password < "6"){
      return console.log("Must have min. 6 characters!");
    }
    else{
      document.createElement("input", "value");
    }
    console.log(`Email: ${email}  Password: ${password}`);
    form.reset();
  }




  

    

