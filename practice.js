var firebaseConfig = {
  apiKey: "AIzaSyCogSMpJy1rG9CkmR0O-2ylksTtnSNuWNk",
  authDomain: "kwitter-by-misbah.firebaseapp.com",
  databaseURL: "https://kwitter-by-misbah-default-rtdb.firebaseio.com",
  projectId: "kwitter-by-misbah",
  storageBucket: "kwitter-by-misbah.appspot.com",
  messagingSenderId: "341138549862",
  appId: "1:341138549862:web:ccb5c908f59e5df43191a7",
  measurementId: "${config.measurementId}"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


