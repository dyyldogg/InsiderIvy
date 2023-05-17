// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBZ847puZ-fGpJD70cufB0fzcb4w5crmZs",
  authDomain: "contactform-b5759.firebaseapp.com",
  databaseURL: "https://contactform-b5759-default-rtdb.firebaseio.com",
  projectId: "contactform-b5759",
  storageBucket: "contactform-b5759.appspot.com",
  messagingSenderId: "493104395903",
  appId: "1:493104395903:web:17563dc58ae8e0ce83314a",
  measurementId: "G-T1PTQ21G9P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var firstName = getInputVal('firstname');
  var lastName = getInputVal('lastname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var highschool = getInputVal('highschool');

  // Save message
  saveMessage(firstName, lastName, email, phone, highschool);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to Firebase
function saveMessage(firstName, lastName, email, phone, highschool) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    highschool: highschool
  });
}
