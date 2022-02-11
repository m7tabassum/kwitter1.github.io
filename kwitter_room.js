
//ADD YOUR FIREBASE LINKS HERE
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyCogSMpJy1rG9CkmR0O-2ylksTtnSNuWNk",
      authDomain: "kwitter-by-misbah.firebaseapp.com",
      databaseURL: "https://kwitter-by-misbah-default-rtdb.firebaseio.com",
      projectId: "kwitter-by-misbah",
      storageBucket: "kwitter-by-misbah.appspot.com",
      messagingSenderId: "341138549862",
      appId: "1:341138549862:web:ccb5c908f59e5df43191a7",
      measurementId: "G-SPDC8KH7L6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name" +room_name);
rows="<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)' >#" + room_name + "</div><hr>";
      document.getElementById("output").innerHTML=rows;
//End code
      });});}
getData();
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
       purpose: "adding room name"     
      });
      localStorage.setItem("room_name",room_name);
      window.location= "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,   
        like:0 
      });
      document.getElementById("msg").value = "";
}