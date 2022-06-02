




function daftar() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    var userPass_verif = document.getElementById("password_field_verifikasi").value;           
    var res = userEmail.split("@");
    pecah = res[0];  
    if(userPass_verif!=userPass){
        alert("Password tidak sama")
    }
    else{
        alert("Selamat, Anda sudah terdaftar")
        firebase.database().ref("user").child(pecah).child("key_last").set({
            nilai:"new",
          });
          firebase.database().ref("user").child(pecah).child("mobil_last").set({
            nilai:"new",
          });
          firebase.database().ref("user").child(pecah).child("nama_last").set({
            nilai:"new",
          });
          firebase.database().ref("user").child(pecah).child("saldo").set({
            nilai:0,
          });
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Error : " + errorMessage);

        });
    }

}

firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

            // User is signed in.
            window.location.replace('menu_awal.html')
        } else {
            // No user is signed in.
            
        }
});