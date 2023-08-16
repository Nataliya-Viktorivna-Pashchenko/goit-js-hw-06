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
listIngredientsArr = ingredients.map((ingredient) =>
{
  const listIngredients = document.createElement("li");
  listIngredients.classList.add('item');
  listIngredients.textContent = ingredients;
  listIngredientsArr.push(listIngredients);
 });
ulIngredients.append(...listIngredientsArr);