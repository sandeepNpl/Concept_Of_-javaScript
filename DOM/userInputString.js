let inputElement = document.querySelector('input');
let remainingChars = document.getElementById('remaining-chars');

console.dir(inputElement);

let maxAllowedChars = inputElement.maxLength;

function updateCharacter(event){
    let enterText = event.target.value;
    let enterTextLength = enterText.length;

    let remainingCharacters =  maxAllowedChars - enterTextLength;

    remainingChars.textContent = remainingCharacters;

    
}
inputElement.addEventListener('input', updateCharacter);