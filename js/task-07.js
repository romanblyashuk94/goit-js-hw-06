const textEl = document.querySelector("#text");
const fontSizeControlEl = document.querySelector("#font-size-control");

fontSizeControlEl.addEventListener("input", (e) => {
  textEl.style.fontSize = `${e.currentTarget.value}px`;
});