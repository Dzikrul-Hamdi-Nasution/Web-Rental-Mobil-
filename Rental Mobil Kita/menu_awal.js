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



  $("#harga1").val("Rp - ");
  $("#harga2").val("Rp - ");
  $("#harga3").val("Rp - ");
  $("#harga4").val("Rp - ");
  $("#harga5").val("Rp - ");
  $("#harga6").val("Rp - ");
  $("#harga7").val("Rp - ");
  $("#harga8").val("Rp - ");
  $("#harga9").val("Rp - ");

  

  Cek_Stok();
  cek_harga();
  cek_harga_lepas();
  
});

let minuman = [];
let mobil = [];
let harga = [];
let harga_lepas = [];
let kunci=0;
var pecah_id;
var pelayanan;
var tampil_harga;
var nama;
var ktp;
var wa;
var kode_urut_mobil;
var saldo_akhir;
var saldo_user;
let kondisi=0;
var metode;

function keluar(){
  firebase.auth().signOut();
 
}

firebase.auth().onAuthStateChanged(function(user) {
  var user = firebase.auth().currentUser;

          if (user) {
              //alert("Selamat Datang ")
              //window.location.replace('ulasan.html')
              var email_id = user.email;           
              var res = email_id.split("@");
              pecah_id = res[0];  
              var messagesRef = firebase.database();
              var ref = messagesRef.ref("user").child(pecah_id).child("saldo");
              ref.on("value", function(snapshot) {
                  snapshot.forEach(function(childSnapshot) {
                      data = childSnapshot.val();
                      console.log(data);
                      document.getElementById("saldo").innerHTML ="Saldo Rp "+ data;
                      saldo_akhir=data;
                  });
              })
              document.getElementById("nama").innerHTML = pecah_id;
              nilai_id=Math.floor(Math.random() * 10000);
              $("#id_top_up").val(pecah_id+"-"+nilai_id);
            
              
          } else {
              // No user is signed in.
             // window.location.replace('index.html')
             
              //
          }
  });




function Cek_Stok() {
  var messagesRef = firebase.database();
  var tampung;
  for (let i = 1; i <= 9; i++) {

      tampung = "mobil_" + i;

      var ref = messagesRef.ref("daftar_mobil").child(tampung);
      ref.on("value", function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
              data = childSnapshot.val();
              console.log(data);

              if (i == 1) {
                  mobil_1 = data;
                  $("#stok_1").val(mobil_1);
              }
              if (i == 2) {
                  mobil_2 = data;
                  $("#stok_2").val(mobil_2);
              }
              if (i == 3) {
                  mobil_3 = data;
                  $("#stok_3").val(mobil_3);
              }
              if (i == 4) {
                  mobil_4 = data;
                  $("#stok_4").val(mobil_4);
              }
              if (i == 5) {
                  mobil_5 = data;
                  $("#stok_5").val(mobil_5);
              }
              if (i == 6) {
                  mobil_6 = data;
                  $("#stok_6").val(mobil_6);
              }
              if (i == 7) {
                  mobil_7 = data;
                  $("#stok_7").val(mobil_7);
              }
              if (i == 8) {
                  mobil_8 = data;
                  $("#stok_8").val(mobil_8);
              }
              if (i == 9) {
                  mobil_9 = data;
                  $("#stok_9").val(mobil_9);
              }
          });
      })
  }
}

function cek_harga() {
  var messagesRef = firebase.database();
  var tampung;
  for (let i = 1; i <= 9; i++) {

      tampung = "mobil_" + i;

      var ref = messagesRef.ref("harga_mobil").child(tampung);
      ref.on("value", function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
              data = childSnapshot.val();
              console.log(data);
              harga[i] = data;
          });
      })
  }
}

function cek_harga_lepas() {
  var messagesRef = firebase.database();
  var tampung;
  for (let i = 1; i <= 9; i++) {

      tampung = "mobil_" + i;

      var ref = messagesRef.ref("harga_mobil_lepas").child(tampung);
      ref.on("value", function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
              data = childSnapshot.val();
              console.log(data);
              harga_lepas[i] = data;
          });
      })
  }
}

for (let i = 1; i <= 9; i++) {
  mobil[i] = 0;
}


function harga_1() {
  pelayanan=s_1.value;
  tampil_harga=harga_lepas[1];
  if(pelayanan=="Dengan Driver"){
    $("#total_1").val("Rp " + tampil_harga);
  }
  if(pelayanan=="Tanpa Driver"){
    tampil_harga=harga[1];
    $("#total_1").val("Rp " +tampil_harga);
  }
}
function e_money_1(){
  if (confirm("Apakah Anda ingin memesan dengan E-Money ?")) {
    saldo_user=parseInt(saldo_akhir)-parseInt(tampil_harga);
    if(saldo_user<0){
      alert("Saldo Anda tidak Cukup, Silahkan Ganti metode pembayaran atau lakukan TopUp Saldo")
    }
    else{
      kondisi=1;
      pesan1();
    }
  } else {  }
}


function pesan1() {
  nama = document.getElementById("Fullname_1").value;
  ktp = document.getElementById("nomor_KTP_1").value;
  wa = document.getElementById("nomor_WA_1").value;
  var d = Date();
  var res = d.split("G");
  pecah = res[0];  
  stok_saat_ini=mobil_1-1;
  nilai_id=Math.floor(Math.random() * 10000);
  jenis_mobil="Xenia";
  kode_urut_mobil="mobil_1";
  submit();
}

function submit(){
  var messagesRef = firebase.database();
  if(kondisi==1){
    firebase.database().ref("user").child(pecah_id).child("saldo").set({
      nilai:saldo_user,
    });
    metode="E-Money"
    kondisi=0;
  }
  else{
    metode="CASH"
  }
  firebase.database().ref("history").child(nilai_id).set({
    mobil:jenis_mobil,
    jumlah:metode,
    nama: nama,
    ktp:  ktp,
    wa: wa,
    waktu: pecah,
    harga:tampil_harga,
    stok:stok_saat_ini,
    service:pelayanan,
    kode:nilai_id,
  });
  firebase.database().ref("daftar_mobil").child(kode_urut_mobil).set({
    nilai:stok_saat_ini,
  });
  firebase.database().ref("user").child(pecah_id).child("key_last").set({
    nilai:nilai_id,
  });
  firebase.database().ref("user").child(pecah_id).child("mobil_last").set({
    nilai:jenis_mobil,
  });
  firebase.database().ref("user").child(pecah_id).child("nama_last").set({
    nilai:nama,
  });

 
  

  firebase.database().ref("user").child(pecah_id).child("riwayat").child(nilai_id).set({
    mobil:jenis_mobil,
    jumlah:metode,
    nama: nama,
    ktp:  ktp,
    wa: wa,
    waktu: pecah,
    harga:tampil_harga,
    service:pelayanan,
  });
  alert("Pesanan Telah Diterima")
}



function harga_2() {
  pelayanan=s_2.value;
  tampil_harga=harga_lepas[2];
  if(pelayanan=="Dengan Driver"){
    $("#total_2").val("Rp " + tampil_harga);
  }
  if(pelayanan=="Tanpa Driver"){
    tampil_harga=harga[2];
    $("#total_2").val("Rp " +tampil_harga);
  }
}
function e_money_2(){
  if (confirm("Apakah Anda ingin memesan dengan E-Money ?")) {
    saldo_user=parseInt(saldo_akhir)-parseInt(tampil_harga);
    if(saldo_user<0){
      alert("Saldo Anda tidak Cukup, Silahkan Ganti metode pembayaran atau lakukan TopUp Saldo")
    }
    else{
      kondisi=1;
      pesan2();
    }
  } else {  }
}
function pesan2() {
   nama = document.getElementById("Fullname_2").value;
   ktp = document.getElementById("nomor_KTP_2").value;
   wa = document.getElementById("nomor_WA_2").value;
  var d = Date();
  var res = d.split("G");
  pecah = res[0];  
  stok_saat_ini=mobil_2-1;
  nilai_id=Math.floor(Math.random() * 10000);
  jenis_mobil="Avanza";
  kode_urut_mobil="mobil_2";
  submit();
}

function harga_3() {
  pelayanan=s_3.value;
  tampil_harga=harga_lepas[3];
  if(pelayanan=="Dengan Driver"){
    $("#total_3").val("Rp " + tampil_harga);
  }
  if(pelayanan=="Tanpa Driver"){
    tampil_harga=harga[3];
    $("#total_3").val("Rp " +tampil_harga);
  }
}
function e_money_3(){
  if (confirm("Apakah Anda ingin memesan dengan E-Money ?")) {
    saldo_user=parseInt(saldo_akhir)-parseInt(tampil_harga);
    if(saldo_user<0){
      alert("Saldo Anda tidak Cukup, Silahkan Ganti metode pembayaran atau lakukan TopUp Saldo")
    }
    else{
      kondisi=1;
      pesan3();
    }
  } else {  }
}
function pesan3() {
   nama = document.getElementById("Fullname_3").value;
   ktp = document.getElementById("nomor_KTP_3").value;
   wa = document.getElementById("nomor_WA_3").value;
  var d = Date();
  var res = d.split("G");
  pecah = res[0];  
  stok_saat_ini=mobil_3-1;
  nilai_id=Math.floor(Math.random() * 10000);
  jenis_mobil="Grand New Innova";
  kode_urut_mobil="mobil_3";
  submit();
}


function harga_4() {
  pelayanan=s_4.value;
  tampil_harga=harga_lepas[4];
  if(pelayanan=="Dengan Driver"){
    $("#total_4").val("Rp " + tampil_harga);
  }
  if(pelayanan=="Tanpa Driver"){
    tampil_harga=harga[4];
    $("#total_4").val("Rp " +tampil_harga);
  }
}
function e_money_4(){
  if (confirm("Apakah Anda ingin memesan dengan E-Money ?")) {
    saldo_user=parseInt(saldo_akhir)-parseInt(tampil_harga);
    if(saldo_user<0){
      alert("Saldo Anda tidak Cukup, Silahkan Ganti metode pembayaran atau lakukan TopUp Saldo")
    }
    else{
      kondisi=1;
      pesan4();
    }
  } else {  }
}
function pesan4() {
   nama = document.getElementById("Fullname_4").value;
   ktp = document.getElementById("nomor_KTP_4").value;
   wa = document.getElementById("nomor_WA_4").value;
  var d = Date();
  var res = d.split("G");
  pecah = res[0];  
  stok_saat_ini=mobil_4-1;
  nilai_id=Math.floor(Math.random() * 10000);
  jenis_mobil="AGYA";
  kode_urut_mobil="mobil_4";
  submit();
}
 
function harga_5() {
  pelayanan=s_5.value;
  tampil_harga=harga_lepas[5];
  if(pelayanan=="Dengan Driver"){
    $("#total_5").val("Rp " + tampil_harga);
  }
  if(pelayanan=="Tanpa Driver"){
    tampil_harga=harga[5];
    $("#total_5").val("Rp " +tampil_harga);
  }
}
function e_money_5(){
  if (confirm("Apakah Anda ingin memesan dengan E-Money ?")) {
    saldo_user=parseInt(saldo_akhir)-parseInt(tampil_harga);
    if(saldo_user<0){
      alert("Saldo Anda tidak Cukup, Silahkan Ganti metode pembayaran atau lakukan TopUp Saldo")
    }
    else{
      kondisi=1;
      pesan5();
    }
  } else {  }
}
function pesan5() {
   nama = document.getElementById("Fullname_5").value;
   ktp = document.getElementById("nomor_KTP_5").value;
   wa = document.getElementById("nomor_WA_5").value;
  var d = Date();
  var res = d.split("G");
  pecah = res[0];  
  stok_saat_ini=mobil_5-1;
  nilai_id=Math.floor(Math.random() * 10000);
  jenis_mobil="Innova Reborn";
  kode_urut_mobil="mobil_5";
  submit();
}


function harga_6() {
  pelayanan=s_6.value;
  tampil_harga=harga[6];
  if(pelayanan=="Dengan Driver"){
    $("#total_6").val("Rp " + tampil_harga);
  }
  if(pelayanan=="Tanpa Driver"){
    tampil_harga=harga[6];
    $("#total_6").val("Rp " +tampil_harga);
  }
}
function e_money_6(){
  if (confirm("Apakah Anda ingin memesan dengan E-Money ?")) {
    saldo_user=parseInt(saldo_akhir)-parseInt(tampil_harga);
    if(saldo_user<0){
      alert("Saldo Anda tidak Cukup, Silahkan Ganti metode pembayaran atau lakukan TopUp Saldo")
    }
    else{
      kondisi=1;
      pesan6();
    }
  } else {  }
}
function pesan6() {
   nama = document.getElementById("Fullname_6").value;
   ktp = document.getElementById("nomor_KTP_6").value;
   wa = document.getElementById("nomor_WA_6").value;
  var d = Date();
  var res = d.split("G");
  pecah = res[0];  
  stok_saat_ini=mobil_6-1;
  nilai_id=Math.floor(Math.random() * 10000);
  jenis_mobil="KIA Travello";
  kode_urut_mobil="mobil_6";
  submit();
}


function harga_7() {
  pelayanan=s_7.value;
  tampil_harga=harga[7];
  if(pelayanan=="Dengan Driver"){
    $("#total_7").val("Rp " + tampil_harga);
  }
  if(pelayanan=="Tanpa Driver"){
    tampil_harga=harga[7];
    $("#total_7").val("Rp " +tampil_harga);
  }
}
function e_money_7(){
  if (confirm("Apakah Anda ingin memesan dengan E-Money ?")) {
    saldo_user=parseInt(saldo_akhir)-parseInt(tampil_harga);
    if(saldo_user<0){
      alert("Saldo Anda tidak Cukup, Silahkan Ganti metode pembayaran atau lakukan TopUp Saldo")
    }
    else{
      kondisi=1;
      pesan7();
    }
  } else {  }
}
function pesan7() {
   nama = document.getElementById("Fullname_7").value;
   ktp = document.getElementById("nomor_KTP_7").value;
   wa = document.getElementById("nomor_WA_7").value;
  var d = Date();
  var res = d.split("G");
  pecah = res[0];  
  stok_saat_ini=mobil_7-1;
  nilai_id=Math.floor(Math.random() * 10000);
  jenis_mobil="Isuzu ELF";
  kode_urut_mobil="mobil_7";
  submit();
}

function harga_8() {
  pelayanan=s_8.value;
  tampil_harga=harga[8];
  if(pelayanan=="Dengan Driver"){
    $("#total_8").val("Rp " + tampil_harga);
  }
  if(pelayanan=="Tanpa Driver"){
    tampil_harga=harga[8];
    $("#total_8").val("Rp " +tampil_harga);
  }
}
function e_money_8(){
  if (confirm("Apakah Anda ingin memesan dengan E-Money ?")) {
    saldo_user=parseInt(saldo_akhir)-parseInt(tampil_harga);
    if(saldo_user<0){
      alert("Saldo Anda tidak Cukup, Silahkan Ganti metode pembayaran atau lakukan TopUp Saldo")
    }
    else{
      kondisi=1;
      pesan8();
    }
  } else {  }
}
function pesan8() {
   nama = document.getElementById("Fullname_8").value;
   ktp = document.getElementById("nomor_KTP_8").value;
   wa = document.getElementById("nomor_WA_8").value;
  var d = Date();
  var res = d.split("G");
  pecah = res[0];  
  stok_saat_ini=mobil_8-1;
  nilai_id=Math.floor(Math.random() * 10000);
  jenis_mobil="Toyota Hiache";
  kode_urut_mobil="mobil_8";
  submit()
}


function harga_9() {
  pelayanan=s_9.value;
  tampil_harga=harga[9];
  if(pelayanan=="Dengan Driver"){
    $("#total_9").val("Rp " + tampil_harga);
  }
  if(pelayanan=="Tanpa Driver"){
    tampil_harga=harga[9];
    $("#total_9").val("Rp " +tampil_harga);
  }
}
function e_money_9(){
  if (confirm("Apakah Anda ingin memesan dengan E-Money ?")) {
    saldo_user=parseInt(saldo_akhir)-parseInt(tampil_harga);
    if(saldo_user<0){
      alert("Saldo Anda tidak Cukup, Silahkan Ganti metode pembayaran atau lakukan TopUp Saldo")
    }
    else{
      kondisi=1;
      pesan9();
    }
  } else {  }
}
function pesan9() {
   nama = document.getElementById("Fullname_9").value;
   ktp = document.getElementById("nomor_KTP_9").value;
   wa = document.getElementById("nomor_WA_9").value;
  var d = Date();
  var res = d.split("G");
  pecah = res[0];  
  stok_saat_ini=mobil_9-1;
  nilai_id=Math.floor(Math.random() * 10000);
  jenis_mobil="Bus Pariwisata";
  kode_urut_mobil="mobil_9";
  submit()
}