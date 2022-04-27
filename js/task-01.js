console.log(
  `Number of categories: ${
    document.querySelector("ul#categories").children.length
  }`
);

const categoriesListEl = document.querySelector("ul#categories");

Array.from(categoriesListEl.children).forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
