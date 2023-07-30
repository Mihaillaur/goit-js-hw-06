const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach(function(ingredient){
  const addItem = document.createElement("li");
  addItem.textContent = ingredient;
  addItem.classList.add("item");
  ingredientsList.append(addItem);
});
console.dir(ingredientsList);

  