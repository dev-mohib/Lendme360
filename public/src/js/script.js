function my4506t() {
    const checkBox = document.getElementById('t4506t');
    var X4506 = document.getElementById('X4506');
    if (checkBox.checked === true) {
        X4506.style.display = 'block';
    } else {
        X4506.style.display = 'none';
    }
}
my4506t()


// 4506T List Items CheckBox Functions
function signatureCheckBox() {
    const sigChBox = document.getElementById('me');
    const SigLi = document.getElementById('sig');
    if (sigChBox.checked === true) {
        SigLi.style.textDecoration = "line-through"
    } else {
        console.log('Not work');
        SigLi.style.textDecoration = "none"
    }
}
signatureCheckBox()


function mySsa89() {
    const SSA89checkBox = document.getElementById('SSA-89');
    var SSA89 = document.getElementById('ssa89c');
    if (SSA89checkBox.checked === true) {
        SSA89.style.display = 'block';
    } else {
        SSA89.style.display = 'none';
    }
}
mySsa89()


function myBorrwCert() {
    const BorrowerCertcheckBox = document.getElementById('BorrowerCert');
    var borrwCert = document.getElementById('borrwCertc');
    if (BorrowerCertcheckBox.checked === true) {
        borrwCert.style.display = 'block';
    } else {
        borrwCert.style.display = 'none';
    }
}
myBorrwCert()



function myCreditLoe() {
    const myCreditLoecheckBox = document.getElementById('myCreditLoe');
    var creditLoe = document.getElementById('creditLoeC');
    if (myCreditLoecheckBox.checked === true) {
        creditLoe.style.display = 'block';
    } else {
        creditLoe.style.display = 'none';
    }
}
myCreditLoe()


function refin() {
    const refiCheck = document.getElementById('refi');
    const refiInfo = document.getElementById('refiLoanInfo');
    const curtHomelabel = document.getElementById('curtHome');
    const PurchaseloanTerms = document.getElementById('loanInfo');


    if (refiCheck.checked === true) {

        refiInfo.style.display = 'inline-flex';
        curtHomelabel.style.display = 'inline-flex';
        PurchaseloanTerms.style.display = 'none';
        console.log('refi');
    } else {
        refiInfo.style.display = 'none';
        curtHomelabel.style.display = 'none';
        PurchaseloanTerms.style.display = 'flex';
    }
}

refin()