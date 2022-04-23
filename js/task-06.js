const inputText = document.querySelector('[id="validation-input"]');
 
inputText.addEventListener('blur', (event) => {
    
    let number = event.currentTarget.value.length;
    if (number == inputText.dataset.length ) {
        inputText.classList.add('valid');
        console.log(inputText.dataset.length);
        if (inputText) {
            inputText.classList.remove('invalid');
        }
    } else {
        inputText.classList.add('invalid');
    }
});