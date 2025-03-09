const refs = {
  colorButton: document.querySelector('button.change-color'),
  body: document.querySelector('body'),
  colorSpan: document.querySelector('span.color')
}

refs.colorButton.addEventListener('click', handleColorChange);


function handleColorChange(event) {
  const newColor = getRandomHexColor();

  refs.colorSpan.textContent = newColor;
  refs.body.style = `background-color: ${newColor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}