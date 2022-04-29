const inputEl = document.querySelector("#controls>input");
const createElementsBtn = document.querySelector("button[data-create]");
const destroyElementsBtn = document.querySelector("button[data-destroy]");
const boxContainer = document.querySelector("#boxes");

createElementsBtn.addEventListener("click", () => {
  createBoxes(inputEl.value);
});

destroyElementsBtn.addEventListener(`click`, () => {
  boxContainer.innerHTML = "";
});

function createBoxes(amount) {
  const elements = [];

  for (let i = 0; i <= amount; i++) {
    const el = document.createElement("div");
    el.style.backgroundColor = getRandomHexColor();

    if (i === 0) {
      el.style.width = "30px";
      el.style.height = "30px";
    } else {
      el.style.width = `${Number.parseInt(elements[i - 1].style.width) + 10}px`;
      el.style.height = `${
        Number.parseInt(elements[i - 1].style.height) + 10
      }px`;
    }

    elements.push(el);
  }

  boxContainer.append(...elements);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}