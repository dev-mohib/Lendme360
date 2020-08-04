var firebaseConfig = {
    apiKey: "AIzaSyD5Oy9j8olWHZ5CfGISn4XSswsMLiQdISg",
    authDomain: "lendme360.firebaseapp.com",
    databaseURL: "https://lendme360.firebaseio.com",
    projectId: "lendme360",
    storageBucket: "lendme360.appspot.com",
    messagingSenderId: "1097345151286",
    appId: "1:1097345151286:web:2247592c3c16721114c397"
  };
  
  if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig)

  var db = firebase.firestore();
  var auth = firebase.auth();
  var storage = firebase.storage();
  
  function handleLogin() {
    var email = $('#inputEmail').val()
    var password = $('#inputPassword').val()

    auth.signInWithEmailAndPassword(email, password)
    .then(user => {
        authcurrentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          // Send token to your backend via HTTPS
          window.location.href = "/auth?t=" + idToken + "&url=" + "profile";
        }).catch(function(error) {
          // Handle error
        });
       
    })
    .catch(err => {
        console.log('There was an Error Loggin in User ' + err)
    })
}

function handleSignup() {
    var userName = $('#username').val()
    var userEmail = $('#userEmail').val()
    var password = $('#userPassword').val()
    var repeatPassword = $('#repeatPassword').val()
    console.log('usernamr => ' + username + "  " + userEmail + "  " + password + "   " + repeatPassword )
    if(username && userEmail && password && repeatPassword) {
        if(password !== repeatPassword) {window.alert("Password did  not match"); return}
    auth.createUserWithEmailAndPassword(userEmail, password)
    .then(user => {
        db.collection('users').doc(user.uid).set({
          Name : userName,
          email : user.email,
          premiumUser : false
        })
        console.log('User signed up successfully')
        window.location.href = "/profile";
    })
    .catch(err => {
        console.log(err)
    })
} else {
    window.alert("Please enter valid input values")
}
}

function handleGoogleSignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        var user = result.user;
        window.location.href = "/profile";
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
}
function handleFacebookSignIn() {
    var form = document.getElementById('logreg-forms')
    // form.innerHTML = `<div class="spinner-grow" role="status"><span class="sr-only">Loading...</span></div>`
    
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
      })
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user)
        window.location.href = "/profile";
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}