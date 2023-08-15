function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const textChangeColor = document.querySelector(".color");

const changeColor = (event) => {
  const randomColor = getRandomHexColor();
 bodyColor.style.backgroundColor = `${randomColor}`;
  textChangeColor.textContent = `${randomColor}`;
};

buttonColor.addEventListener("click", changeColor);