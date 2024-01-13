import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
//"firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, signInWithRedirect, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
//"firebase/app";

if (document.getElementById("logged-out")) {
  document.getElementById("logged-out").classList.remove("hidden");
  document.getElementById("logged-in").classList.add("hidden");
}

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

if (!document.getElementById("google")) {
  throw "";
}

const signInGoogleButton = document.getElementById("google");
const userSignIn = async() => {
  window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  if (window.mobileCheck) {
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      localStorage.setItem('username', user.displayName);
      localStorage.setItem('pfp', user.photoURL);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  }
  else {
    signInWithRedirect(auth, provider);
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("pfp").classList.remove('hidden');
    document.getElementById("pfp").classList.add('inline-block');
    document.getElementById("pfp").src = user.photoURL;
    document.getElementById("account").innerHTML = user.displayName;
    document.getElementById("logged-out").classList.add("hidden");
    document.getElementById("logged-in").classList.remove("hidden");
    localStorage.setItem('username', user.displayName);
    localStorage.setItem('pfp', user.photoURL);
  }
  else {
    document.getElementById("pfp").classList.add('hidden');
    document.getElementById("pfp").classList.remove('inline-block');
    document.getElementById("logged-out").classList.remove("hidden");
    document.getElementById("logged-in").classList.add("hidden");
  }
})

signInGoogleButton.addEventListener("click", userSignIn);

const signUpButton = document.getElementById("signUp");

const signUp = async() => {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("pw").value;
  console.log(username, email, password);
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {displayName: username, photoURL: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg"});
    document.getElementById("pfp").classList.remove('hidden');
    document.getElementById("pfp").classList.add('inline-block');
    document.getElementById("pfp").src = "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg";
    document.getElementById("account").innerHTML = username;
    localStorage.setItem('username', username);
    localStorage.setItem('pfp', "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg");

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

signUpButton.addEventListener("click", signUp);

const loginButton = document.getElementById("login");

const login = async() => {
  var email = document.getElementById("lemail").value;
  var password = document.getElementById("lpw").value;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("pfp").classList.remove('hidden');
    document.getElementById("pfp").classList.add('inline-block');
    document.getElementById("pfp").src = user.photoURL;
    document.getElementById("account").innerHTML = user.username;
    localStorage.setItem('username', user.username);
    localStorage.setItem('pfp', user.photoURL);
  })
}

loginButton.addEventListener("click", login);

const signOutButton = document.getElementById("signOut");


const logOut = async() => {
  auth.signOut().then(function() {
    console.log("signed out");
  }).catch(function(error) {
    console.log("Error Signing Out");
  })
  localStorage.setItem('username', null);
  localStorage.setItem('pfp', null);
  document.getElementById("pfp").classList.add('hidden');
  document.getElementById("pfp").classList.remove('inline-block');
  document.getElementById("account").innerHTML = "LOGIN / SIGN UP";
}

signOutButton.addEventListener("click", logOut);