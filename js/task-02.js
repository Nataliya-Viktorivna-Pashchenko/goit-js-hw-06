const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let listIngredients;
let listIngredientsArr = [];
const ulIngredients = document.getElementById("ingredients");
for (let i = 0; i < ingredients.length; i += 1) {
  const listIngredients = document.createElement("li");
  listIngredients.classList.add('item');
  listIngredients.textContent = ingredients[i];
  listIngredientsArr.push(listIngredients);
};
ulIngredients.append(...listIngredientsArr);