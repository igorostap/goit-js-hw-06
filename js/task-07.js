const inputSize = document.querySelector('[id="font-size-control"]');
const inputText = document.querySelector('[id="text"]');

inputSize.addEventListener("input", () => {
    
    inputText.style.fontSize = inputSize.value + 'px';
    console.log(inputText)
});