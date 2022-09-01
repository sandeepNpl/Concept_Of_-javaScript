let paragraphElement = document.querySelector('p');

function changeParagraphText(event){
    paragraphElement.textContent = 'clicked';
    console.log('paragraph clicked');
    console.log(event);
}
paragraphElement.addEventListener('click',changeParagraphText);

let inputElement = document.querySelector('input');
// console.dir(inputElement);

function retrieveUserInput(event){
    // let enterText = inputElement.value;
    let enterText = event.target.value;
    console.log(enterText);
    //console.log(event);
}
inputElement.addEventListener('input',retrieveUserInput);