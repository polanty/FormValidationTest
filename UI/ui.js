export const addElementToDom = (outputContainer, entriesObject) => {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.classList.add("form-output__entry");

  // create paragraph element to hold the entry details
  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = `Name: ${entriesObject.name}<br> Email: ${entriesObject.email}<br> Date of Birth: ${entriesObject.dob}<br> Phone: ${entriesObject.phone}`;

  // create delete button element
  const deleteButton = document.createElement("button"); // Change to button
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("form_output__remove-btn");
  deleteButton.type = "button"; // Set type to button to prevent form submission

  // add the text node to the newly created div
  // also append the delete button to the paragraph
  newDiv.appendChild(newParagraph).appendChild(deleteButton);

  // add the newly created element and its content into the DOM
  outputContainer.insertAdjacentElement("beforeend", newDiv);
};
