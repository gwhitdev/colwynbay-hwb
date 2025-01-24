const formFields = [
    {
        "fieldId": "name",
        "value": null,
    },
    {
        "fieldId": "email",
        "value": null,
    },
    {
        "fieldId": "phone",
        "value": null,
    },
    {
        "fieldId": "reason",
        "value": null,
    },
    {
        "fieldId": "message",
        "value": null,
    }
];

/*** Get submit button and assign event listener to open modal ***/
/*** and get each input field value then assign to the above array of objects. ***/
const submitButton = document.getElementById("submit-form-button");
const modal = document.getElementById("modal");
const containerToBlur = document.getElementById("container");
const body = document.getElementsByTagName("body")[0];

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    containerToBlur.classList.remove("container-noblur");
    containerToBlur.classList.add("container-blur");
    body.classList.toggle("stop-scrolling");
    if (modal.classList.contains("modal-show") === false ) {
        const inputs = document.querySelectorAll(["input","select","textarea"]);
        inputs.forEach(input => {
            formFields.forEach(field =>
                input.id === field.fieldId || input.name === field.fieldId // Match input ID with stored fieldId and then assign input value
                    ? field.value = input.value
                    : null
            )
        })
        modal.classList.add("modal-show");
        /*** Modal actions ***/
        const modalSubmittedDetails = document.getElementById("modal-submitted-details");
        const details = document.createElement("div");

        /** Grab the data for each form field, create some new nodes for the modal body text and assign it all. **/
        /** Then, add all the new span nodes into the modal submitted details div ***/
        formFields.forEach(field => {
            const fieldSpan = document.createElement("span");
            const fieldId = field.fieldId.charAt(0).toUpperCase() + field.fieldId.substring(1);
            const fieldText = field.value.charAt(0).toUpperCase() + field.value.substring(1);
            fieldSpan.innerText = `${fieldId}: ${fieldText}`;
            const lineBreak = document.createElement("br");
            fieldSpan.appendChild(lineBreak);
            details.append(fieldSpan);
        })
        modalSubmittedDetails.append(details);
    }
})

/*** Modal Close Button **/
const closeModalButton = document.getElementById("close-modal");
const modalContentText = document.getElementById("modal-submitted-details");


closeModalButton.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.toggle("stop-scrolling");
    containerToBlur.classList.remove("container-blur");
    containerToBlur.classList.add("container-noblur");
    modal.classList.remove("modal-show");
    modal.classList.add('modal-hide')
    modalContentText.innerHTML = ""; // Remove created nodes to clear submitted text for further use
    submitButton.disabled = false; // Re-enable submit button
})

