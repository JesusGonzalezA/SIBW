import { goUp } from './goToFunctions.js';

//Get the button
const downButton = document.getElementById("down-button");

// When the user clicks on the button, scroll to the top of the document
downButton.addEventListener('click', goUp);