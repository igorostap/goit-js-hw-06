const textInput = document.querySelector('[id="name-input"]');
const textOutput = document.querySelector('[id="name-output"]');

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value === '') {
        textOutput.textContent = 'Anonymous';
    } else {
        textOutput.textContent = event.currentTarget.value;
    }
       
    
        
         
    
});
