const inputText = document.querySelector('[id="validation-input"]');
 
inputText.addEventListener('blur', (event) => {
    
    let number = event.currentTarget.value.length;
    if (number !== 6 ) {
        inputText.classList.add('invalid');
    } else {
        inputText.classList.add('valid');
    }
});