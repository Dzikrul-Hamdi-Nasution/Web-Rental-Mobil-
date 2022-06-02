var config = {
  apiKey: "AIzaSyATL6M7rXAfXoXbp9yFjjHShVKa6iy2Jek",
  authDomain: "rental-mobil-kita.firebaseapp.com",
  databaseURL: "https://rental-mobil-kita-default-rtdb.firebaseio.com",
  projectId: "rental-mobil-kita",
  storageBucket: "rental-mobil-kita.appspot.com",
  messagingSenderId: "100479261690",
  appId: "1:100479261690:web:28fd92b09df15ec2cfa243",
  measurementId: "G-0ZQ5DDPGVE"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      // User is signed in.
     window.location.replace("pesanan.html")
     
  } else {
      // No user is signed in.
      
  }
});

function masuk() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error : " + errorMessage);
  });
}

function keluar() {
  firebase.auth().signOut();
}