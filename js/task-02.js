const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map((ingredient) => {
  const IngredientItemEl = document.createElement("li");
  IngredientItemEl.textContent = ingredient;
  IngredientItemEl.classList.add("item");
  return IngredientItemEl;
});

ingredientsListEl.append(...ingredientsItems);
