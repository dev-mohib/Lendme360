firebase.auth().onAuthStateChanged(user => {
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

