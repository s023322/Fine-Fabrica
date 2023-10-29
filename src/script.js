import { initializeApp, getApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
//"firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, connectAuthEmulator } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
//"firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyDEpd6JbHX4NCCgLdRrY67bEKvNBtBvQlo",
  
    authDomain: "fine-fabrica.firebaseapp.com",
  
    projectId: "fine-fabrica",
  
    storageBucket: "fine-fabrica.appspot.com",
  
    messagingSenderId: "1087600372668",
  
    appId: "1:1087600372668:web:e400df17c18ea5c92519b9",
  
    measurementId: "G-8D6JK76D3R"
  
};  

const app = initializeApp(firebaseConfig);
const auth = getAuth();
//connectAuthEmulator(auth, "http://127.0.0.1:9099");
const provider = new GoogleAuthProvider();

const signInButton = document.getElementById("google");

const userSignIn = async() => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    alert("Signed in")
  }
})

signInButton.addEventListener("click", userSignIn);

/*function sign() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("pw").value;
  var rpassword = document.getElementById("rpw").value;
  console.log(email, password, rpassword);
  if (password == rpassword) {
    signUp(auth, email, password);
  }
}*/