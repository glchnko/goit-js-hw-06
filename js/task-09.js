function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
const colorEl = document.querySelector('.color');
const changeBtnEl = document.querySelector('.change-color');

changeBtnEl.addEventListener('click' , onChangeColor)

function onChangeColor (event){
  let newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  colorEl.textContent = newColor;
}