const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemList = document.querySelector('[id="ingredients"]');

const ingredientsComponents = ingredients.map((ingredient) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  return itemEl;
});
console.log(ingredientsComponents);
itemList.append(...ingredientsComponents);