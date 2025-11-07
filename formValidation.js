import {
  isNameValid,
  isEmailValid,
  isPhoneValid,
  isDateInPastOrToday,
} from "./utility.js";

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const dob = document.getElementById("dob");
const phoneInput = document.getElementById("phone");

const setErrorMessages = (element, message) => {
  const groupControl = element.parentElement;
  const errorElement = groupControl.querySelector(".error");

  if (errorElement) {
    // Check if errorElement exists
    errorElement.innerText = message;
  }

  //Adding error class to the group control
  groupControl.classList.add("error");

  //Removing success class from the group control
  groupControl.classList.remove("success");

  // Set aria-invalid to true on error
  element.setAttribute("aria-invalid", "true");
};

const setSuccessMessages = (element, message = "") => {
  const groupControl = element.parentElement;
  const errorElement = groupControl.querySelector(".error");

  if (errorElement) {
    // Check if errorElement exists
    errorElement.innerText = message;
  }

  //Adding error class to the group control
  groupControl.classList.add("success");

  //Removing success class from the group control
  groupControl.classList.remove("error");

  // Set aria-invalid to false on success
  element.setAttribute("aria-invalid", "false");
};

const validateInputs = (value, Regex, inputElement, firstErrorElement) => {
  //functionality to set the first error element and focus on it
  const setFocusOnError = () => {
    if (!firstErrorElement) firstErrorElement = inputElement; // Set first error
  };

  //for each input validation we check if it's empty or invalid based on the regex provided
  //and set the appropriate error or success messages
  if (value === "") {
    setErrorMessages(inputElement, `${inputElement.name} is required`);
    setFocusOnError();
  } else if (!Regex(value)) {
    setErrorMessages(inputElement, `Provide a valid ${inputElement.name}`);
    setFocusOnError();
  } else {
    setSuccessMessages(inputElement);
  }

  return firstErrorElement;
};

export const globalInputsValidation = (
  nameValue,
  emailValue,
  dobValue,
  phoneValue
) => {
  let firstErrorElement = null; // Variable to track the first error

  // Name validation
  firstErrorElement = validateInputs(
    nameValue,
    isNameValid,
    nameInput,
    firstErrorElement
  );

  // Email validation
  firstErrorElement = validateInputs(
    emailValue,
    isEmailValid,
    emailInput,
    firstErrorElement
  );

  // Date of Birth validation
  firstErrorElement = validateInputs(
    dobValue,
    isDateInPastOrToday,
    dob,
    firstErrorElement
  );

  // Phone validation
  firstErrorElement = validateInputs(
    phoneValue,
    isPhoneValid,
    phoneInput,
    firstErrorElement
  );

  // If all validations pass, return an object with the input values
  // Else return immediately and user should provide correct inputs
  if (nameValue && emailValue && dobValue && phoneValue) {
    return {
      name: nameValue,
      email: emailValue,
      dob: dobValue,
      phone: phoneValue,
    };
  } else if (firstErrorElement) {
    firstErrorElement.focus(); // Focus on the first error element
  }
};
