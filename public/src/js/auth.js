auth.onAuthStateChanged(user => {
    if (user) {
        // window.location = 'index.html';
        db.collection('LoanApps').get().then(snapshot => {
            setupLoanInfo(snapshot.docs);
            setupUI(user);
        });
        console.log('user logged in: ', user);

    } else {
        setupUI([])
        setupLoanInfo([]);
        console.log('user logged out');
    }
})






const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email, password);


    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);

    });


    // function closModal(p){
    //     // p.preventDefault()
    //     // const modal = document.querySelector('#modal-signup');
    //     // modal.modal('toggle');
    //     // // M.Modal.getInstance(modal).close();
    signupForm.reset();


    // }


    $('#signUp').click(function () {
        // e.preventDefault();
        $('#signUp').attr('data-dismiss="modal" ')
        // $('#modal-signup').close()
        // return false;
    });

});

// **************Log-Out*****************
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
    });
});



// **************Log-In*****************
// const loginForm = document.querySelector('#login-form');
// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const email = loginForm['login-email'].value;
//     const password = loginForm['login-password'].value;

//     auth.signInWithEmailAndPassword(email, password).then((cred) => {
//         console.log(cred.user)
//         loginForm.reset();
//     });
// });

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        console.log(cred.user);
        console.log('Logged In');
        // close the signup modal & reset form
        // const modal = document.querySelector('#modal-login');
        // M.Modal.getInstance(modal).close();
        loginForm.reset();
    });

});