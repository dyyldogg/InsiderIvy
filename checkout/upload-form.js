document.addEventListener('DOMContentLoaded', function () {
  // Form submission
  const signupForm = document.querySelector('#hs-signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const firstName = signupForm.querySelector('#firstName').value;

    // Log form values to console
    console.log('First Name:', firstName);
  });
});
