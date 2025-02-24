
// Get the logo and input elements
const logo = document.getElementById('logo');
const letterInput = document.getElementById('letterInput');

// Function to update the logo based on input
letterInput.addEventListener('input', (e) => {
    const letter = e.target.value.toUpperCase(); // Ensure input is uppercase
    if (letter.match(/[A-Z]/)) { // If it's a valid letter A-Z
        logo.textContent = letter; // Update logo text
    } else {
        logo.textContent = 'N'; // Default to "N" if invalid input
    }
});

// Function to change the logo's size and color when clicked
logo.addEventListener('click', () => {
    logo.style.fontSize = '200px'; // Increase size
    logo.style.color = 'yellow';  // Change color to yellow
});

// Reset logo's size and color when mouse leaves
logo.addEventListener('mouseleave', () => {
    logo.style.fontSize = '150px'; // Reset size
    logo.style.color = 'red';     // Reset color to red
});

// Optional: Change logo color on hover
logo.addEventListener('mouseover', () => {
    logo.style.color = 'green';  // Change color to green on hover
});
