let counterValue = 0;
const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const valueCounter = document.querySelector("#value");
//console.log(btnPlus);

const plus = (event) => {
    console.log(event);
    counterValue += 1;
    valueCounter.innerHTML = `<span id="value">${counterValue}</span>`;
};
btnPlus.addEventListener("click", plus);

const minus = (event) => {
    console.log(event);
    counterValue -= 1;
    valueCounter.innerHTML = `<span id="value">${counterValue}</span>`;
};
btnMinus.addEventListener("click", minus);