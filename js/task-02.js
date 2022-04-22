const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemList1 = document.createElement('li');
itemList1.innerHTML += ingredients[0];
itemList1.classList.add('item');

const itemList2 = document.createElement('li');
itemList2.innerHTML += ingredients[1];
itemList2.classList.add('item');

const itemList3 = document.createElement('li');
itemList3.innerHTML += ingredients[2];
itemList3.classList.add('item');

const itemList4 = document.createElement('li');
itemList4.innerHTML += ingredients[3];
itemList4.classList.add('item');

const itemList5 = document.createElement('li');
itemList5.innerHTML += ingredients[4];
itemList5.classList.add('item');

const itemList6 = document.createElement('li');
itemList6.innerHTML += ingredients[5];
itemList6.classList.add('item');

const title = document.querySelector('ul');
title.append(itemList1, itemList2, itemList3, itemList4, itemList5, itemList6);
console.log(title);