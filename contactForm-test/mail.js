const firebaseConfig = {
 //   copy your firebase config informations
 apiKey: "AIzaSyBZ847puZ-fGpJD70cufB0fzcb4w5crmZs",
 authDomain: "contactform-b5759.firebaseapp.com",
 databaseURL: "https://contactform-b5759-default-rtdb.firebaseio.com",
 projectId: "contactform-b5759",
 storageBucket: "contactform-b5759.appspot.com",
 messagingSenderId: "493104395903",
 appId: "1:493104395903:web:17563dc58ae8e0ce83314a",
 measurementId: "G-T1PTQ21G9P"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
 e.preventDefault();

 var name = getElementVal("name");
 var emailid = getElementVal("emailid");
 var msgContent = getElementVal("msgContent");

 saveMessages(name, emailid, msgContent);

 //   enable alert


 //   remove the alert
 setTimeout(() => {
   document.querySelector(".alert").style.display = "none";
 }, 3000);

 //   reset the form
 document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
 var newContactForm = contactFormDB.push();

 newContactForm.set({
   name: name,
   emailid: emailid,
   msgContent: msgContent,
 });
};

const getElementVal = (id) => {
 return document.getElementById(id).value;
};