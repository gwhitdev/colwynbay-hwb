/***
 Validate user input into contact form, capture the data and then inject into a modal for confirmation
 ***/
const submitButton = document.getElementById("submit-form-button");
const modal = document.getElementById("modal");
const containerToBlur = document.getElementById("container");
const body = document.getElementsByTagName("body")[0];

function validateInput (inputs){
    const messageToShow = [];
    messageToShow.numOfErrors = 0;

    const isPhoneNumberValid = phoneNumber => Number(phoneNumber) || phoneNumber.length === 11;
    const isInputAnEmptyString = text => text === "";
    const isEmailValid = email => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const incrementNumOfErrors = () => messageToShow.numOfErrors += 1;

    const createMessageOutput = (input) => {
        const msgToReturn = {};
        if (input.id === "phone") {
            msgToReturn.div = "error-phone-incorrect-number";
            msgToReturn.state = !isPhoneNumberValid(input.value) ? "show" : "hide"; // Check if value is NaN or not the UK phone number length
        } else if (input.id === "email") {
            msgToReturn.div = "error-email-invalid";
            msgToReturn.state = !isInputAnEmptyString(input.valid) && !isEmailValid(input.value) ? "show" : "hide";
        } else {
            msgToReturn.div = `error-${input.id}`;
            msgToReturn.state = isInputAnEmptyString(input.value) ? "show" : "hide";
        }
        isInputAnEmptyString(input.value) === true ? incrementNumOfErrors() : null;
        return msgToReturn;
    }

    const validateTextInputs = input => messageToShow.push(createMessageOutput(input));

    for (let input of inputs) {
        if (input.id) validateTextInputs(input);
        if (input.id === "email" && !isInputAnEmptyString(input.value)) isEmailValid(input);
    }
    return messageToShow;
}

const showOrHideErrors = (elements) => {
    elements.forEach(element => {
        if (element.state === "show") document.getElementById(element.div).style.display = "block";
        if (element.state === "hide") document.getElementById(element.div).style.display = "none";
    })
}

const resetInputs = (inputs) => {
    for (let input of inputs) {
        if (input.id === "reason") input.value = "Donating";
        else input.value = "";
    }
}

const lastDetailsDiv = {"element":null};
const isModalOpenOrClosed = {"modal":"closed"}; // Modal state

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const inputs = document.getElementsByClassName("readable-input");
    const formFields = [];
    const generateRandomId = () => Math.floor(Math.random()*100); // Generate a random number to add to the div id to create a unique div to destroy correctly
    const validated = validateInput(inputs);
    showOrHideErrors(validated); // Create any errors where necessary and manipulate the DOM as appropriate
    /**
    Modal actions
    **/
    const modalSubmittedDetails = document.getElementById("modal-submitted-details");
    const details = document.createElement("div");

    details.id = `submitted-details-${generateRandomId()}`;
    lastDetailsDiv.element = details;

    if (validated.numOfErrors === 0) {
        containerToBlur.classList.remove("container-noblur");
        containerToBlur.classList.add("container-blur");
        body.classList.toggle("stop-scrolling");
        if (!modal.classList.contains("modal-show")) {
            for (let input of inputs) {
                formFields.push(
                    {
                        "fieldId": input.id ? input.id : input.name,
                        "value": input.value
                    }
                );
            }
            modal.classList.add("modal-show");
            isModalOpenOrClosed.modal = "open";
            /**
            Grab the data for each form field, create some new nodes for the modal body text and assign it all.
            Then, add all the new span nodes into the modal submitted details div
            **/
            formFields.forEach(field => {
                const fieldSpan = document.createElement("span");
                const fieldId = field.fieldId.charAt(0).toUpperCase() + field.fieldId.substring(1);
                const fieldText = field.value.charAt(0).toUpperCase() + field.value.substring(1);
                const lineBreak = document.createElement("br");

                fieldSpan.innerText = `${fieldId}: ${fieldText}`;
                fieldSpan.appendChild(lineBreak);
                details.append(fieldSpan);
            })
            modalSubmittedDetails.append(details);
        }
    }
});

/** Modal Close Button **/
const closeModalButton = document.getElementById("close-modal");

/* If the close button is pressed on the modal, close the modal */
closeModalButton.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
});

/* If the escape key is pressed on a keyboard, close the modal */
document.addEventListener("keyup", (e) => {
    if (e.key === "Escape" && isModalOpenOrClosed.modal === "open") closeModal();
});

const closeModal = () => {
    const lastModalDetailsToRemove = document.getElementById("modal-submitted-details");
    const inputs = document.getElementsByClassName("readable-input");
    lastModalDetailsToRemove.removeChild(lastDetailsDiv.element); // Destroy the last details div to reset the modal
    resetInputs(inputs);
    body.classList.toggle("stop-scrolling");
    containerToBlur.classList.remove("container-blur");
    containerToBlur.classList.add("container-noblur");
    modal.classList.remove("modal-show");
    modal.classList.add("modal-hide")
    isModalOpenOrClosed.modal = "closed";
}
