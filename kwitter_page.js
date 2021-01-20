//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAgGlckpWI5AFIIS_lGMwypoPAcyjjBvyM",
      authDomain: "kwitter-3dad2.firebaseapp.com",
      databaseURL: "https://kwitter-3dad2-default-rtdb.firebaseio.com",
      projectId: "kwitter-3dad2",
      storageBucket: "kwitter-3dad2.appspot.com",
      messagingSenderId: "689066319311",
      appId: "1:689066319311:web:d402c2fbbddf745f6906ba"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
