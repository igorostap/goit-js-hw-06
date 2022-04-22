function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnColor = document.querySelector('.change-color');
const btnColorText = document.querySelector('.color');
const bodyColor = document.querySelector('body');
console.log(bodyColor);
btnColor.addEventListener('click',changeColor);
function changeColor (color) {
  btnColorText.textContent = getRandomHexColor();
  bodyColor.style.backgroundColor = getRandomHexColor();
}