const inputElement = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const inputName = (event) => {
     const inputValue = event.currentTarget.value.trim();
    outputName.textContent = inputValue !== '' ? inputValue : "Anonymous";
 };
    inputElement.addEventListener("input", inputName);