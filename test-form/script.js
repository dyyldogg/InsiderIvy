// Get the form element
const form = document.getElementById('questionnaireForm');

// Add event listener to the form's submit event
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission and page refresh

  // Get form values
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const country = document.getElementById('country').value;
  const email = document.getElementById('email').value;

  // Log form values to console
  console.log('Name:', name);
  console.log('Age:', age);
  console.log('Gender:', gender);
  console.log('Country:', country);
  console.log('Email:', email);
});
