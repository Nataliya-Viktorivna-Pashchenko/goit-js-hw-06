function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const textChangeColor = document.querySelector(".color");

const changeColor = (event) => {
 bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
  textChangeColor.innerHTML = `<span class="color">-${getRandomHexColor()}</span>`;
};

buttonColor.addEventListener("click", changeColor);