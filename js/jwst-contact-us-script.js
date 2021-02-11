const contactName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const contactEmail = document.querySelector("#contact-form-email");
const contactEmailError = document.querySelector("#contact-form-emailError");
const comment = document.querySelector("#comment");
const commentError = document.querySelector("#commentError");
const button = document.querySelector("#contact-form-button");
const contactUsForm = document.querySelector("#contact-us-form");
const successMessage = document.querySelector("#successMessage");
const validationErrorMessage = document.querySelector("#validationErrorMessage");
const formNoteHide = document.querySelector("#form-note-hide");


function validateContactForm(event) {
    event.preventDefault();

    if (checkLength(contactName.value,4)===true){
        nameError.style.display = "none";
    }else{
        nameError.style.display = "block";
    }
    if (checkLength(subject.value,9)===true){
        subjectError.style.display = "none";
    }else{
        subjectError.style.display = "block";
    }
    if(validateContactFormEmail(contactEmail.value)===true) {
            contactEmailError.style.display = "none";
        }else{
            contactEmailError.style.display = "block";
        }
    if(((checkLength(comment.value,0))===true) && ((checkLength(comment.value,450))===false)){
        commentError.style.display = "none";
    }else{
        commentError.style.display = "block";
    }

checkIfValidationIsTrue();

}

contactUsForm.addEventListener("submit", validateContactForm);



function checkIfValidationIsTrue() {
    if((checkLength(contactName.value,4)) && (validateContactFormEmail(contactEmail.value)) && (checkLength(subject.value,0)) && ((checkLength(comment.value,9)) && (!checkLength(comment.value,450)))){
        formNoteHide.style.display = "none";
        successMessage.innerHTML = `<div class="successMessage">Success&#33; <br>The contact form has been sent&#44; and we&#39;ll get back to you shortly&#46;</div>`;
        contactUsForm.reset();
    }else{
        formNoteHide.style.display = "none";
        validationErrorMessage.innerHTML = `<div class="validationErrorMessage">We&#39;re sorry, but some of the form&#45;fields doesn&#39;t seem to be filled out correctly&#46;<br>Please check and update the marked fields before you submit the form again&#46;</div>`;
    }
}

function validateContactFormEmail(contactEmail) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(contactEmail);
    return patternMatches;
}

function checkLength(value, len){
    if(value.trim().length > len){
        return true;
    }else{
        return false;
    }
}