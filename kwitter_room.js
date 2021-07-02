var firebaseConfig = {
  apiKey: "AIzaSyBioy5Zljit06qQ2f9QuZ5NlqmUAiFjSZs",
  authDomain: "kwitter-f7607.firebaseapp.com",
  databaseURL: "https://kwitter-f7607-default-rtdb.firebaseio.com",
  projectId: "kwitter-f7607",
  storageBucket: "kwitter-f7607.appspot.com",
  messagingSenderId: "481084638761",
  appId: "1:481084638761:web:968bd8578b4c33279fbe38",
  measurementId: "G-TYP40RHKJ9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("userName").innerHTML = "Welcome " + userName + "!";

function addRoom() {
  roomName = document.getElementById("roomName").value;
  firebase.database().ref("/").child(roomName).update({
    purpose: "adding room name",
  });
  localStorage.setItem("room_name", roomName);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}
getData();

function redirectToRoomName(name) {
  localStorage.setItem("room_name", roomName);
  window.location = "kwitter_page.html";
}
function logOut() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
