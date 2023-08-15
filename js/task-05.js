const inputElement = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const inputName = (event) => {
    const inputValue = event.currentTarget.value;
    if (inputValue.trim() !== '') {
       outputName.textContent = `${event.currentTarget.value}`;
    };
};
    inputElement.addEventListener("input", inputName);