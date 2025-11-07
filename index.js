import { globalInputsValidation } from "./formValidation.js";
import { addElementToDom } from "./UI/ui.js";

const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const dob = document.getElementById("dob");
const phoneInput = document.getElementById("phone");
const outputContainer = document.getElementById("output");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const dobValue = dob.value.trim();
  const phoneValue = phoneInput.value.trim();

  //Validating each input and return appropriate error messages
  const entriesObject = globalInputsValidation(
    nameValue,
    emailValue,
    dobValue,
    phoneValue
  );

  // Always protect the entries regardless of the initial validation
  if (entriesObject) {
    addElementToDom(outputContainer, entriesObject);

    // Reset form after successful submission
    form.reset();

    // Clear success/error states after a brief delay to ensure user sees the feedback
    setTimeout(() => {
      // Clear all success/error states
      [nameInput, emailInput, dob, phoneInput].forEach((input) => {
        input.parentElement.classList.remove("error", "success");
      });
    }, 1500);

    setTimeout(() => {
      // Optionally, set focus back to the first input field
      nameInput.focus();
    }, 1000);
  }
});

outputContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("form_output__remove-btn")) {
    //Dom traversal to get the parent div of the clicked delete button
    const entryDiv = event.target.parentElement.parentElement;

    outputContainer.removeChild(entryDiv);
  }
});
