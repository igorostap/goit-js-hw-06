const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemList = document.querySelector('[id="ingredients"]');
console.log(itemList);
const ingredientsComponents = createListItems(ingredients);
itemList.innerHTML = ingredientsComponents;
function createListItems(items) {
  return items.map(item => `<li>${item}</li>`).join('');
}