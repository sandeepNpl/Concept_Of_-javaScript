// let anchorElement = document.getElementById('external-link');
// anchorElement.href='https://google.com';

let anchorElement = document.querySelector('a');
anchorElement.href = 'https://www.w3schools.com/';

// ADD AN ELEMENT 
// 1. Create the new element 
let newAnchorElement = document.createElement('a');
newAnchorElement.href ='https:google.com';
newAnchorElement.textContent ='this leads the gooogle';

// 2. Get access to the parent element that should hold the new element 
let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent element 
firstParagraph.append(newAnchorElement); 

// REMOVE ELEMENTS

// 1. Select the element that should be removed

let firstH1Element = document.querySelector('h1');

// 2. Remove it!

firstH1Element.remove();

// Move elements 

firstParagraph.parentElement.append(firstParagraph);

// innerHTML

// console.log(firstParagraph.innerHTML); // shows the mixture of text and HTML tag.
console.log(firstParagraph.textContent);
firstParagraph.innerHTML = 'My Name is <strong>Sandeep</strong>.';
  


