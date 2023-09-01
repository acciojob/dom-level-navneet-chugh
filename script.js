//your JS code here. If required.
// Get the element with id "level"
const element = document.getElementById("level");

// Initialize a counter for DOM level
let domLevel = 0;

// Traverse up the DOM tree to find the DOM level
let currentElement = element;
while (currentElement !== document.documentElement) {
    currentElement = currentElement.parentNode;
    domLevel++;
}

// Display the DOM level using alert
alert(`The level of the element is: ${domLevel}`);
