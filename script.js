// Get the download button element
const downloadButton = document.getElementById('download-button');

// Add an event listener to the download button
downloadButton.addEventListener('click', () => {
  
  alert('Download button clicked!');
});

// Get the form element
const form = document.getElementById('form');

// Get the input elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the input values
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Code to handle the form submission
  alert(`Thank you for your message, ${name}!`);
});




