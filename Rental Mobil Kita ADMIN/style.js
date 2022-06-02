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

var dbRef = firebase.database();
var statusAlat = dbRef.ref("history");

// Dapatkan referensi table
var table = document.getElementById("tabel-status-alat").getElementsByTagName('tbody')[0];;

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
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);

    cell1.innerHTML = newstatusAlat.mobil;
    cell2.innerHTML = newstatusAlat.nama;
    cell3.innerHTML = newstatusAlat.ktp;
    cell4.innerHTML = newstatusAlat.wa;
    cell5.innerHTML = newstatusAlat.jumlah;
    cell6.innerHTML = newstatusAlat.waktu;
    cell7.innerHTML = newstatusAlat.harga;
    cell8.innerHTML = newstatusAlat.stok;
    cell9.innerHTML = newstatusAlat.service;
    cell10.innerHTML = newstatusAlat.kode;
    


});


var ulasan_tabel = dbRef.ref("ulasan");

// Dapatkan referensi table
var table_2 = document.getElementById("tabel-ulasan").getElementsByTagName('tbody')[0];;

// Memuat Data
ulasan_tabel.on("child_added", function(data, prevChildKey) {
    var ulasan_data = data.val();

    var row = table_2.insertRow(table_2.rows.length);

    var u1 = row.insertCell(0);
    var u2 = row.insertCell(1);
    var u3 = row.insertCell(2);

    u1.innerHTML = ulasan_data.nama;
    u2.innerHTML = ulasan_data.mobil;
    u3.innerHTML = ulasan_data.pesan;

});

function keluar() {
    firebase.auth().signOut();
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
       
       alert("anda telah login");
    } else {
        // No user is signed in.
        alert("Silahkan Login Kembali");
        window.location.replace("index.html")
    }
  });
  let tampung;


  function cek(){
    var id_user  = document.getElementById("Id-pelanggan").value;  
    var messagesRef = firebase.database();
    var ref = messagesRef.ref("user").child(id_user).child("saldo");
    ref.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            data = childSnapshot.val();
            console.log(data);
            tampung=data;
            
        });
    })
  }


function konfirmasi(){

    var id_user  = document.getElementById("Id-pelanggan").value;
    let jumlah  = document.getElementById("jumlah-topup").value;
    var messagesRef = firebase.database();
    var ref = messagesRef.ref("user").child(id_user).child("saldo");
    ref.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            data = childSnapshot.val();
            console.log(data);
            tampung=data;
            
        });
    })

    var total=parseInt(jumlah)+parseInt(tampung);
    firebase.database().ref("user").child(id_user).child("saldo").set({
        nilai:total,
      });
     alert("Top Up Berhasil Sebesar : Rp "+jumlah)
}

var jenis;
var harga;
var jenis2;

function jenis_mobil(){
    jenis=j_mobil.value;
}

function update_wahana(){
    var jumlah_update  = document.getElementById("jumlah_wahana").value;
    firebase.database().ref("daftar_mobil").child(jenis).set({
        nilai:jumlah_update,
      });
    alert("Berhasil Update Stock");
}

function jenis_service(){
    harga=h_mobil.value;
}
function jenis_mobil(){
    jenis2=j_mobil_2.value;
}
function update_harga(){
    var jumlah_update  = document.getElementById("harga_wahana").value;
    firebase.database().ref(harga).child(jenis2).set({
        nilai:jumlah_update,
      });
    alert("Berhasil Update Harga");
}




