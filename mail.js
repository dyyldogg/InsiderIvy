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

firebase.database().ref('IvyInsider')