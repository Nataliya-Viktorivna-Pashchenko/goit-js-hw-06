const inputElem = document.querySelector("#font-size-control");
const textElem = document.querySelector("#text");
const min = Number(inputElem.min);
const max = Number(inputElem.max);
textElem.style.fontSize = `${((max - min) / 2)}px`;
function changeInput(inputElem)     {
    textElem.style.fontSize = `${inputElem.target.value}px`;
};


inputElem.addEventListener("input", changeInput);