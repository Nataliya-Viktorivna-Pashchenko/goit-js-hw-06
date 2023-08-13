function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector("#boxes");
const inputDiv = document.querySelector("#controls");
const input = inputDiv.firstElementChild;

console.log(input);

 
  function createBoxes(amount) {
     let boxesArr = [];
    for (let i = 0; i < amount; i += 1) {
      const boxesNew = document.createElement("div");
      boxesNew.style.height = `${30 + 10 * i}px`;
      boxesNew.style.width = `${30 + 10 * i}px`;
      boxesNew.style.backgroundColor = `${getRandomHexColor()}`;
      //boxesEl.insertAdjacentElement("beforeend", boxesNew);
      boxesArr.push(boxesNew);
    }
    return boxesArr;
};

  
const makeBoxes = (event) => {
  const boxesAdd = createBoxes(input.value);
  boxesEl.append(...boxesAdd);
};

const destroyBoxes = (event) => {
  boxesEl.innerHTML = '<div id="boxes"></div>';
};

btnCreate.addEventListener("click", makeBoxes);
btnDestroy.addEventListener("click", destroyBoxes);