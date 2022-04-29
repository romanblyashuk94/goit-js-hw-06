const changeColorBtn = document.querySelector(".change-color");
const hexColorSpan = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const generatedColor = getRandomHexColor();
  document.body.style.backgroundColor = generatedColor;
  hexColorSpan.textContent = generatedColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
