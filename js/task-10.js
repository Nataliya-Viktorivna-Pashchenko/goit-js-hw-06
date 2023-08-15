function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector("#boxes");
const inputDiv = document.querySelector("#controls");
const inputNum = inputDiv.firstElementChild;

  function createBoxes(amount) {
    let boxesArr = [];
    const min = Number(inputNum.min);
    const max = Number(inputNum.max);
    const step = Number(inputNum.step);
    if (amount < min || amount > max) {
      alert('Треба ввести число більше 1 та меньше 100.')
    } else {
    for (let i = 0; i < amount; i += step) {
      const boxesNew = document.createElement("div");
      boxesNew.style.height = `${30 + 10 * i}px`;
      boxesNew.style.width = `${30 + 10 * i}px`;
      boxesNew.style.backgroundColor = `${getRandomHexColor()}`;
      boxesArr.push(boxesNew);
    }
    return boxesArr;
    };
};
   
  const makeBoxes = (event) => {
  const boxesAdd = createBoxes(inputNum.value);
  boxesEl.append(...boxesAdd);
};

const destroyBoxes = (event) => {
  boxesEl.innerHTML = '<div id="boxes"></div>';
  inputNum.value = '';
};

btnCreate.addEventListener("click", makeBoxes);
btnDestroy.addEventListener("click", destroyBoxes);