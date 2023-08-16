const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let listIngredientsArr = [];
const ulIngredients = document.getElementById("ingredients");
ingredients.map((ingredient, i) =>
{
  const listIngredients = document.createElement("li");
  listIngredients.classList.add('item');
  listIngredients.textContent = ingredients[i];
  listIngredientsArr.push(listIngredients);
});

ulIngredients.append(...listIngredientsArr);