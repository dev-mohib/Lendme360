/* jshint -W034 */

// DOM elements
var LoanAppInfo = document.querySelector('#LoanAppInfo');
var EntireSite = document.querySelector('#entireSite');
// var Welcome = document.querySelector('.welcome');
var loggedInLinks = document.querySelectorAll('.logged-in');
var loggedOutLinks = document.querySelectorAll('.logged-out');

function setupUI(user) {
  if (user != user) {
  
    loggedOutLinks.forEach(link => link.style.display = 'none');
    loggedInLinks.forEach(link => link.style.display = 'block');
  } else {
    loggedOutLinks.forEach(link => link.style.display = 'block');
    loggedInLinks.forEach(link => link.style.display = 'none');
    // loggedOutLinks.forEach(link => link.style.display = 'block');
  }
}


// setup guides
const setupLoanInfo = (data) => {
if (data.length) {
    let html = '';
    data.forEach(doc => {
        const loanInfo = doc.data();
        console.log(loanInfo);
        const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> ${loanInfo.name} </div>
        <div class="collapsible-body white"> ${loanInfo.Age} </div>
      </li>
    `;
        html += li;
    });
  // Welcome.innerHTML = '<h1>Thank You! and Welcome!!</h1>';
  EntireSite.style.display = "block";
  LoanAppInfo.innerHTML = html;
  loggedInLinks.forEach(link => link.style.display = 'block');
  loggedOutLinks.forEach(link => link.style.display = 'none');
  } else {

  loggedOutLinks.forEach(link => link.style.display = 'block');
  loggedInLinks.forEach(link => link.style.display = 'none') ;
  EntireSite.style.display = "none";
  // Welcome.innerHTML ="";
  LoanAppInfo.innerHTML = '<h1>Please Login, Thank You!</h1>';
  }};
