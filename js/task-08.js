const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email && password) {
    console.log({ email, password });
    event.currentTarget.reset();
  } else {
    alert("Все поля должны быть заполнены!");
  }
});
