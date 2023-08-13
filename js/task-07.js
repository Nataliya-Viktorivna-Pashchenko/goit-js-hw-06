const inputElem = document.querySelector("#font-size-control");
const textElem = document.querySelector("#text");
let step = 20;
const changeInput = (event) => {
    step += 5;
    textElem.style.fontSize = `${step}px`;
    console.log(event);
}
inputElem.addEventListener("input", changeInput);