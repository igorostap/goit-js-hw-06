const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const counterValues = document.querySelector('[id="value"]');
let counterValue = 0;
const BtnDecrement =() =>{
    counterValue -= 1;
    counterValues.textContent = counterValue;
}
console.log(counterValue);
btnDecrement.addEventListener('click', (BtnDecrement));

const BtnIncrement =() =>{
    counterValue += 1;
    counterValues.textContent = counterValue;
}
btnIncrement.addEventListener('click', (BtnIncrement));