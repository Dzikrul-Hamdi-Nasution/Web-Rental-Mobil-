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
  
  
  
  $(document).ready(function() {
    
    Cek_Stok();
    alert("tes");
  });



  
  function Cek_Stok() {
    var messagesRef = firebase.database();
    for (let i = 1; i <= 9; i++) {

  
        var ref = messagesRef.ref("daftar_mobil").child(tampung);
        ref.on("value", function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                data = childSnapshot.val();
                console.log(data);
                alert("tes")
               
            });
        })
    }
  }









  


