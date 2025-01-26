/*** Validate user input into contact form, capture the data and then inject into a modal for confirmation ***/
/* Get submit button and assign event listener to open modal */
/* and get each input field value then assign to the above array of objects. */
const submitButton = document.getElementById("submit-form-button");
const modal = document.getElementById("modal");
const containerToBlur = document.getElementById("container");
const body = document.getElementsByTagName("body")[0];
const validateInput = (inputs) => {
    const messageToShow = [];
    messageToShow.numOfErrors = 0;
    for(let input of inputs) {
        if (input.id) {
            messageToShow.push({
                "div": `error-${input.id}`,
                "state": input.value === "" ? "show" : "hide", // Decide on state of style:display value for element
            })
            input.value === "" ? messageToShow.numOfErrors += 1 : ""; // Count errors and add to array
            if (input.id === "phone") {
                messageToShow.push(
                    {
                        "div": "error-phone-incorrect-number",
                        "state": !Number(input.value) || input.value.length !== 11 ? "show" : "hide", // Check if value is NaN or not the UK phone number length
                    }
                )
                messageToShow.numOfErrors += 1;
            }

        }
    }
    console.log(messageToShow);
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

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const inputs = document.getElementsByClassName("readable-input");
    const formFields = [];
    const generateRandomId = () => Math.floor(Math.random()*100);
    const validated = validateInput(inputs);
    /* Check if there any validation messages to show */
    showOrHideErrors(validated);
    /* Modal actions */
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
        }
});
/** Modal Close Button **/
const closeModalButton = document.getElementById("close-modal");
closeModalButton.addEventListener("click", (e) => {
    e.preventDefault();
    const lastModalDetailsToRemove = document.getElementById("modal-submitted-details");
    lastModalDetailsToRemove.removeChild(lastDetailsDiv.element); // Destroy the last details div to reset the modal
    const inputs = document.getElementsByClassName("readable-input");
    resetInputs(inputs);
    body.classList.toggle("stop-scrolling");
    containerToBlur.classList.remove("container-blur");
    containerToBlur.classList.add("container-noblur");
    modal.classList.remove("modal-show");
    modal.classList.add('modal-hide')
})

