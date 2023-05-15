const firebaseConfig = {
 apiKey: "AIzaSyBFkk8YfC7TKnPGCncMdTNvWhGi0IA9q-8",
 authDomain: "insiderivy-ea165.firebaseapp.com",
 databaseURL: "https://insiderivy-ea165-default-rtdb.firebaseio.com",
 projectId: "insiderivy-ea165",
 storageBucket: "insiderivy-ea165.appspot.com",
 messagingSenderId: "224534915072",
 appId: "1:224534915072:web:b21363f4cb462286b9d0e5",
 measurementId: "G-7V6H4S9JLE"
};

// init firebase
fasebase.initializeApp(firebaseConfig);

//reference your database

var contactFormDB = firebase.database().ref('IvyInsider');
document.getElementById('IvyInsider').addEvenetListen('submit', submitForm);


function submitForm(e){
  e.preventDefault();

 var firstName = getElementVal('firstname');
 var lastName =  getElementVal('lastName');
 var email = getElementVal('email');
 var tel = getElementVal('tel');
 var highschool = getElementVal('highschool');

 
}

const saveMessages = (firstName, lastName, emmail, tel, highschool)


const getElementVal =  (id) => {
    return document.getElementById(id).value;
}