const firebaseConfig = {
  apiKey: "Dad removed your key",
  authDomain: "insiderivy-ea165.firebaseapp.com",
  databaseURL: "https://insiderivy-ea165-default-rtdb.firebaseio.com",
  projectId: "insiderivy-ea165",
  storageBucket: "insiderivy-ea165.appspot.com",
  messagingSenderId: "224534915072",
  appId: "1:224534915072:web:b21363f4cb462286b9d0e5",
  measurementId: "G-7V6H4S9JLE"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var contactFormDB = firebase.database().ref('IvyInsider');
document.getElementById('IvyInsider').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var firstname = getElementVal('firstname');
  var lastname = getElementVal('lastname');
  var email = getElementVal('email');
  var tel = getElementVal('phone');
  var highschool = getElementVal('highschool');

  saveMessages(firstname, lastname, email, tel, highschool);

  // Call the saveMessages function or write the code to save the messages using Firebase here
};

const saveMessages = (firstname, lastname, email, tel, highschool) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    firstname : firstname,
    lastname : lastname,
    email : email,
    tel : tel,
    highschool : highschool,
  });
};

function getElementVal(id) {
  return document.getElementById(id).value;
};
