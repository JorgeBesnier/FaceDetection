var app_firebase = {};

(function(){
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyCrGrao9en43NT_L3vBHt2RoHno8V8qRXY",
    authDomain: "test-prtec.firebaseapp.com",
    projectId: "test-prtec",
    storageBucket: "test-prtec.appspot.com",
    messagingSenderId: "539343904593",
    appId: "1:539343904593:web:a55cb88e5bc3eda246bd70",
    measurementId: "G-DET7FYKBER"
    };
    firebase.initializeApp(config);
    app_firebase=firebase;
})()

(function(){
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        // Initialize the FirebaseUI Widget using Firebase.
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
          uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: 'dashboard.html',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
      };

      // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);
})()



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
function login(){
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("pass_field").value;
//     window.alert("credentials");
//     window.alert(userEmail);
//     window.alert(userPass);
 }