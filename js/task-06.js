const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === +validationInputEl.dataset.length) {
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.add("invalid");
  }
});

validationInputEl.addEventListener("focus", (event) => {
  event.currentTarget.classList.remove("valid", "invalid");
});