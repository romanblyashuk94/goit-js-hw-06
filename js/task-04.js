let valueEl = document.querySelector("#value");
let counterValue = 0;

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
