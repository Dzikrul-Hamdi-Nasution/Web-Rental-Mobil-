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
let pelayanan=0;
var pecah;
var nama_terakhir;
var mobil_terakhir;
var key_terakhir;

$(document).ready(function(){

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
           
           
           var email_id = user.email;             
            var res = email_id.split("@");
            pecah = res[0];  
            var dbRef = firebase.database();
var statusAlat = firebase.database().ref("user").child(pecah).child("riwayat");

// Dapatkan referensi table
var table = document.getElementById("table-list").getElementsByTagName('tbody')[0];;

var total_harga = 0;
// Memuat Data
statusAlat.on("child_added", function(data, prevChildKey) {
    var newstatusAlat = data.val();

    var row = table.insertRow(table.rows.length);
    

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = newstatusAlat.mobil;
    cell2.innerHTML = newstatusAlat.nama;
    cell3.innerHTML = newstatusAlat.ktp;
    cell4.innerHTML = newstatusAlat.wa;
    cell5.innerHTML = newstatusAlat.jumlah;
    cell6.innerHTML = newstatusAlat.waktu;
    cell7.innerHTML = newstatusAlat.harga;
    cell8.innerHTML = newstatusAlat.service;
    


});
            var messagesRef = firebase.database();
            var ref = messagesRef.ref("user").child(pecah).child("mobil_last");
            ref.on("value", function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    data = childSnapshot.val();
                    console.log(data);
                    mobil_terakhir=data;
                });
            })
            var ref = messagesRef.ref("user").child(pecah).child("nama_last");
            ref.on("value", function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    data = childSnapshot.val();
                    console.log(data);
                    nama_terakhir=data;
                });
            })
            var ref = messagesRef.ref("user").child(pecah).child("key_last");
            ref.on("value", function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    data = childSnapshot.val();
                    console.log(data);
                    key_terakhir=data;
                });
            })
            alert("anda telah login");
        } else {
            // No user is signed in.
            alert("Silahkan Login Kembali");
           
        }
        
      });
    
    
});



  




function keluar() {
    firebase.auth().signOut();
  }

  



function prog(){

    var nilai_id = document.getElementById("nomor_kendali").value;
    if(nilai_id==key_terakhir){
        var messagesRef = firebase.database();
        firebase.database().ref("ulasan").child(nilai_id).set({
          mobil:mobil_terakhir,
          nama: nama_terakhir,
          pesan:pelayanan,
        });
        firebase.database().ref("user").child(pecah).child("key_last").set({
            nilai:"oke",
          });
        alert("Feedback anda telah kami terima")
    }
    else{
        alert("Kode Salah, Silahkan Hubungi Customer Service untuk mendapatkan key")
    }

}



function rating() {
    pelayanan=nilai_rating.value;
  }








