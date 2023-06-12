document.addEventListener('DOMContentLoaded', function () {
    // Form submission
    const signupForm = document.querySelector('#hs-signup-form');
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Get form values
      const firstName = signupForm.querySelector('#firstName').value;
      const lastName = signupForm.querySelector('#lastName').value;
      const age = signupForm.querySelector('#age').value;
      const grade = signupForm.querySelector('#grade').value;
      const ethnicity = signupForm.querySelector('#ethnicity').value;
      const state = signupForm.querySelector('#state').value;
      const zip = signupForm.querySelector('#zip').value;
      const email = signupForm.querySelector('#email').value;
      const phone = signupForm.querySelector('#phone').value;
      const unweightedGPA = signupForm.querySelector('#unweightedGPA').value;
      const weightedGPA = signupForm.querySelector('#weightedGPA').value;
      const satOption = signupForm.querySelector('#satOption').checked;
      const satScore = signupForm.querySelector('#satScore').value;
      const actOption = signupForm.querySelector('#actOption').checked;
      const actScore = signupForm.querySelector('#actScore').value;
      const password = signupForm.querySelector('#password').value;
  
      // Log form values to console
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Age:', age);
      console.log('Grade:', grade);
      console.log('Ethnicity:', ethnicity);
      console.log('State:', state);
      console.log('ZIP Code:', zip);
      console.log('Email:', email);
      console.log('Phone Number:', phone);
      console.log('Unweighted GPA:', unweightedGPA);
      console.log('Weighted GPA:', weightedGPA);
      console.log('SAT Option:', satOption);
      console.log('SAT Score:', satScore);
      console.log('ACT Option:', actOption);
      console.log('ACT Score:', actScore);
      console.log('Password:', password);
  
      // Upload form data to database
      db.collection('students').add({
        firstName: firstName,
        lastName: lastName,
        age: age,
        grade: grade,
        ethnicity: ethnicity,
        state: state,
        zip: zip,
        email: email,
        phone: phone,
        unweightedGPA: unweightedGPA,
        weightedGPA: weightedGPA,
        satOption: satOption,
        satScore: satScore,
        actOption: actOption,
        actScore: actScore,
        password: password
      })
        .then(() => {
          // Reset form and show success message
          signupForm.reset();
          alert('Form submitted successfully!');
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    });
  });
  