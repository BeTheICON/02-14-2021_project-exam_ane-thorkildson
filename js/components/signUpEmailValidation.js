const signUpForm = document.querySelectorAll(".newsalert-sign-up-form");
const signUpEmail = document.querySelectorAll(".email");
const signUpEmailError = document.querySelectorAll(".emailError")
const signUpButton = document.querySelectorAll(".submit-button");
const signUpSuccessMessage = document.querySelectorAll(".form-success");


function validateEmailSignUp(event) {
    event.preventDefault();

    if(validateSignUpEmail(signUpEmail.value)===true) {
            signUpEmailError.style.display = "none";
            signUpSuccessMessage.style.display = "block";
            signUpForm.reset();
        }else{
            signUpEmailError.style.display = "block";
        }
}

signUpForm.addEventListener('submit', validateEmailSignUp);

function validateSignUpEmail(signUpEmail) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(signUpEmail);
    return patternMatches;
}
