let counterValue = 0;
const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const valueCounter = document.querySelector("#value");

const plus = (event) => {
    counterValue += 1;
    valueCounter.textContent = `${counterValue}`;
};
btnPlus.addEventListener("click", plus);

const minus = (event) => {
    counterValue -= 1;
    valueCounter.textContent = `${counterValue}`;
};
btnMinus.addEventListener("click", minus);