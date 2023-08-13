const inputElement = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const inputName = (event) => {
    console.log(event.currentTarget.value);
    outputName.innerHTML = `<span id="name-output">${event.currentTarget.value}</span`;
};

inputElement.addEventListener("input", inputName);
