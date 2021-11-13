const firebaseConfig = {
    apiKey: "AIzaSyCRJgTKozOp0UQUPmvsl_cz1O2WqhFq7iY",
    authDomain: "kwitter-167f0.firebaseapp.com",
    databaseURL: "https://kwitter-167f0-default-rtdb.firebaseio.com",
    projectId: "kwitter-167f0",
    storageBucket: "kwitter-167f0.appspot.com",
    messagingSenderId: "808477619916",
    appId: "1:808477619916:web:ce2e1a3c69d3d0b205f469"
  };
  firebase.initializeApp(firebaseConfig);


  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room-code");


  function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
   name:user_name,
   message:msg,
   like:0  
  });
 document.getElementById("msg").value="";     
  }
  

  function logout(){
    localStorage.removeItem("room-code");
   localStorage.removeItem("user_name");
   window.location="index.html"
   }