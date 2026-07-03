 document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();


    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formSuccess = document.getElementById('formSuccess');


    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.style.display = "none";

    let isValid = true;

    // 1. Name Check
    if (name === "") {
        nameError.textContent = "Please enter your name. This field cannot be left blank.";
        isValid = false;
    }

    // 2. Email Check (Empty & Wrong format logic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.textContent = " Email address is required so I can reply back to you.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = " That doesn't look like a valid email. Please check your spelling.";
        isValid = false;
    }

    // 3. Message Check
    if (message === "") {
        messageError.textContent = " Please type a message before submitting.";
        isValid = false;
    }

    // If everything is completely correct
    if (isValid) {
        formSuccess.textContent = "Awesome! Your message has been sent successfully.";
        formSuccess.style.display = "block";
        
        // Form field data reset aagum
        document.getElementById('contactForm').reset();
    }
});