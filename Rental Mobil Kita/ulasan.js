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




var pecah;



function back() {
    window.location.replace('index.html')
    firebase.auth().signOut();

    
}




firebase.auth().onAuthStateChanged(function(user) {
    var user = firebase.auth().currentUser;
    var email_id = user.email;
    var res = email_id.split("q");
    pecah = res[0];

    if (user) {
        // User is signed in.
        alert("Silahkan beri masukkan kepada kami")
        var messagesRef = firebase.database();
        var ref = messagesRef.ref("user_sementara").child(pecah).child("mobil");
        ref.on("value", function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                data = childSnapshot.val();
                console.log(data);
                nilai_mobil = data;
            });
        })
        var ref = messagesRef.ref("user_sementara").child(pecah).child("nama");
        ref.on("value", function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                data = childSnapshot.val();
                console.log(data);
                nilai_nama = data;
            });
        })
    } else {
        // No user is signed in.
        window.location.replace('index.html')
    }

    



});


function kirim() {
    var Pesan = document.getElementById("pesan_ID").value;

    firebase.database().ref("ulasan").child(pecah).set({
        mobil: nilai_mobil,
        pesan: Pesan,
        nama: nilai_nama,

    });
    firebase.auth().onAuthStateChanged(function(user) {
        var user = firebase.auth().currentUser;
        user.delete().then(function() {
        // User deleted.
            window.location.replace('index.html')
        }).catch(function(error) {
        // An error happened.
        });
        alert("Feedback telah dikirm")
        firebase.auth().signOut();
        
    });
    
    

    
  
}