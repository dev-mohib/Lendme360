function handleSignup() {
  var username = $('#username').val()
    var userEmail = $('#userEmail').val()
    var password = $('#userPassword').val()
    var repeatPassword = $('#repeatPassword').val()
    console.log('username => ' + username + "  " + userEmail + "  " + password + "   " + repeatPassword )
    if(username && userEmail && password && repeatPassword) {
        if(password !== repeatPassword) {window.alert("Password did  not match"); return}
    auth.createUserWithEmailAndPassword(userEmail, password)
    .then(user => {
        db.collection('users').doc(user.uid).set({
          Name : username,
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