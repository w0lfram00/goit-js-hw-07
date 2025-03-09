const refs = {
  controls: document.querySelector('#controls'),
  boxesContainer: document.querySelector('#boxes')
}

refs.controls.addEventListener('click', handleBoxesOperationClick);


function createBoxes(amount) {
  let boxes = '';

  for (let i = 0; i <= amount; i++){
    const box = `<div style="background-color: ${getRandomHexColor()}; width:${30 + i * 10}px; height:${30 + i * 10}px;"></div>`;
    boxes += box;
  }
  return boxes;
}

function handleBoxesOperationClick(event) {
  //міг би просто прослуховувати дві кнопки окремо, як написано в задачі, але я побачив
  //дата атрибут у якомусь дуже дивному вигляді й вирішив його використати
  const action = Object.keys(event.target.dataset)[0];
  const amount = +refs.controls.firstElementChild.value;
  console.log(typeof amount);
  console.log(action);
  if (action == 'create') {
    if (amount > 0 && amount <= 100) {
      console.log(createBoxes(amount));
      refs.boxesContainer.innerHTML = createBoxes(amount);
    }
    else alert('not valid number');
  }
  if (action == 'destroy') {
    refs.boxesContainer.innerHTML = '';
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
