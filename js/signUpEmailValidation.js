const signUpFormOne = document.querySelector("#newsalert-sign-up-form-one");
const emailOne = document.querySelector("#email-one");
const formSuccessOne  = document.querySelector("#form-success-one");
const emailErrorOne = document.querySelector("#email-error-one");
const hideButtonOne = document.querySelector("#submit-button-one");
const signUpFormTwo = document.querySelector("#newsalert-sign-up-form-two");
const emailTwo = document.querySelector("#email-two");
const formSuccessTwo  = document.querySelector("#form-success-two");
const emailErrorTwo = document.querySelector("#email-error-two");
const hideButtonTwo = document.querySelector("#submit-button-two");
const signUpFormThree = document.querySelector("#newsalert-sign-up-form-three");
const emailThree = document.querySelector("#email-three");
const formSuccessThree  = document.querySelector("#form-success-three");
const emailErrorThree = document.querySelector("#email-error-three");
const hideButtonThree = document.querySelector("#submit-button-three");

signUpFormOne.addEventListener('submit', validateSignUpForm);
signUpFormTwo.addEventListener('submit', validateSignUpForm);
signUpFormThree.addEventListener('submit', validateSignUpForm);

function validateSignUpForm(event) {
    event.preventDefault();

    if(validateEmail(emailOne.value)===true) {
        emailErrorOne.style.display = "none";
        hideButtonOne.style.display = "none";
        formSuccessOne.innerHTML = `<div class="form-success">Success&#33;<br>Thanks for signing up &#45; Remember to check your inbox for our confirmation email</div>
        </div>`;
        signUpFormOne.reset();
    }else{
        emailErrorOne.innerHTML = `<div class="sign-up-emailError">Please make sure you have entered a valid email address</div>
        </div>`;
    }

    if(validateEmail(emailTwo.value)===true) {
        emailErrorTwo.style.display = "none";
        hideButtonTwo.style.display = "none";
        formSuccessTwo.innerHTML = `<div class="form-success">Success&#33;<br>Thanks for signing up &#45; Remember to check your inbox for our confirmation email</div>
        </div>`;
        signUpFormTwo.reset();
    }else{
        emailErrorTwo.innerHTML = `<div class="sign-up-emailError">Please make sure you have entered a valid email address</div>
        </div>`;
    }

    if(validateEmail(emailThree.value)===true) {
            emailErrorThree.style.display = "none";
            hideButtonThree.style.display = "none";
            formSuccessThree.innerHTML = `<div class="form-success">Success&#33;<br>Thanks for signing up &#45; Remember to check your inbox for our confirmation email</div>
            </div>`;
            signUpFormThree.reset();
        }else{
            emailErrorThree.innerHTML = `<div class="sign-up-emailError">Please make sure you have entered a valid email address</div>
            </div>`;
        }

}


function validateEmail(emailOne) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(emailOne);
    return patternMatches;
}

function validateEmail(emailTwo) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(emailTwo);
    return patternMatches;
}

function validateEmail(emailThree) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(emailThree);
    return patternMatches;
}
