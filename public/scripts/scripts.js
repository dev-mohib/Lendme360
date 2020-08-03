var firebaseConfig = {
    apiKey: "AIzaSyD5Oy9j8olWHZ5CfGISn4XSswsMLiQdISg",
    authDomain: "lendme360.firebaseapp.com",
    databaseURL: "https://lendme360.firebaseio.com",
    projectId: "lendme360",
    storageBucket: "lendme360.appspot.com",
    messagingSenderId: "1097345151286",
    appId: "1:1097345151286:web:2247592c3c16721114c397"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var myLoan360 = firebase.database();
  var auth = firebase.auth();
  var db = firebase.firestore();
  
  function handleLogin() {
    var email = $('#inputEmail').val()
    var password = $('#inputPassword')
    console.log("Email : " + email + "  Password : "  + password)

}

  






































































































  var forms = document.getElementsByClassName('needs-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener('submit', function (event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
  
  
  
  
  
  
  
  
  var b1_employer_name = document.getElementById("Applicant-Employer").value;
  var b1_job_title = document.getElementById("Applicant-Job-title").value;
  var b1_timeOnJob = document.getElementById("Time-on-Job").value;
  var b2_timeOnJob = document.getElementById("CoTime-on-Job").value;
  var purch_purcahse_price = document.getElementById("PurchasePrice").value;
  // var purch_home_value = document.getElementById('').value;
  var purch_downpayment = document.getElementById("DownPayment").value;
  var purch_fin_amt = document.getElementById("LoanAmount").value;
  // var purch_mtg_mthly_pmt = document.getElementById('').value;
  var purch_interest_rate = document.getElementById("InterestRate").value;
  // var purch_property_tax = document.getElementById('').value;
  // var purch_hoi = document.getElementById('').value;
  // var purch_hoa = document.getElementById('').value;
  
  var refi_purcahse_price = document.getElementById("OriginalPurchasePrice_refi").value;
  var refi_home_value = document.getElementById("HomeValue_refi").value;
  var refi_mtg_bal = document.getElementById("MortgageBalance_refi").value;
  var refi_mtg_mthly_pmt = document.getElementById("MortgagePayment_refi").value;
  var refi_interest_rate = document.getElementById("InterestRate_refi").value;
  var refi_property_tax = document.getElementById("PropertyTaxes_refi").value;
  var refi_hoi = document.getElementById("HomeownersInsurance_refi").value;
  var refi_hoa = document.getElementById("HOADues_refi").value;
  
  // var b1_employer_name = document.getElementById('').value;
  // var b1_employer_name = document.getElementById('').value;
  // var b1_employer_name = document.getElementById('').value;
  // var b1_employer_name = document.getElementById('').value;
  // var b1_employer_name = document.getElementById('').value;
  // var b1_employer_name = document.getElementById('').value;
  // var b1_employer_name = document.getElementById('').value;
  // var b1_employer_name = document.getElementById('').value;
  // var b1_employer_name = document.getElementById('').value;
  // var b1_employer_name = document.getElementById('').value;
  
  // document.getElementById("AppIncome").innerHTML = b1_employer_income;
  
  // Transaction Type Functions (Pur-Refi & HELOC)
  
  function TransactionTypePurchase() {
    const radioPurchase = document.getElementById("Purchase");
    const TABLErefinance = document.getElementById('refinance')
    const TABLEpurchase = document.getElementById('purchase')
    var Refi = document.getElementById("Refi");
    if (radioPurchase.checked === true) {
      // console.log('DELROY');
      purchasePreQual.style.display = "block";
      Refi.style.display = "none";
      TABLErefinance.style.display = "none"
      TABLEpurchase.style.display = "block"
    } else {
      Refi.style.display = "block";
      TABLErefinance.style.display = "block"
      // console.log('NOT WORKING');
    }
  }
  TransactionTypePurchase();
  
  function TransactionTypeRefinance() {
    const radioRefinance = document.getElementById("Refinance");
    const purchasePreQual = document.getElementById('purchasePreQual')
    const TABLErefinance = document.getElementById('refinance')
    const TABLEpurchase = document.getElementById('purchase')
    var Refi = document.getElementById("Refi");
    if (radioRefinance.checked === true) {
      // console.log('Refinance');
      Refi.style.display = "block";
      purchasePreQual.style.display = "none"
      TABLEpurchase.style.display = "none"
      TABLErefinance.style.display = "block"
  
    } else {
      Refi.style.display = "none";
      // console.log('Refinance NOT WORKING');
      purchasePreQual.style.display = "block";
      TABLErefinance.style.display = "none"
    }
  }
  TransactionTypeRefinance();
  
  // Joint-Applicant Functions
  // B1
  function TransactionApplicant() {
    const singleRadioApplicant = document.getElementById("SingleRadio");
    const coAppIncomeRequired = document.getElementById('CoApplicantIncome');
    var B2 = document.getElementById("Co-Applicant-Employer");
  
    if (singleRadioApplicant.checked === true) {
      // console.log('B1');
      B2.style.display = "none";
      coAppIncomeRequired.removeAttribute("required");
    } else {
      Refi.style.display = "block";
  
    }
  }
  TransactionTypeRefinance();
  
  // Joint-Applicant Functions
  // B2
  function TransactionApplicantJoint() {
    const coAppIncomeRequired = document.getElementById('CoApplicantIncome');
    const jointRadioApplicant = document.getElementById("JointRadio");
    var B2 = document.getElementById("Co-Applicant-Employer");
    if (jointRadioApplicant.checked === true) {
      // console.log('B2');
      B2.style.display = "block";
      // coAppIncomeRequired.setAttribute("required", "required");
      coAppIncomeRequired.required = true;
    } else {
      Refi.style.display = "none";
  
      // console.log('B2 NOT WORKING');
  
      // coAppIncomeRequired.removeAttribute("id");
  
    }
  
    // Table input Functions
  
    var purchasePrice = document.getElementById("PurchasePrice").value;
    // console.log(purchasePrice);
  
    document.getElementById("TPurchasePrice").innerHTML = accounting.formatMoney(
      purchasePrice
    );
  
    var downPayment = document.getElementById("DownPayment").value;
    // console.log(downPayment);
    document.getElementById("TDownPayment").innerHTML = accounting.formatMoney(
      downPayment
    );
  
    var loanAmt = purchasePrice - downPayment;
    // console.log("Loan Amt is " + loanAmt);
    document.getElementById("TLoanAmount").innerHTML = accounting.formatMoney(
      loanAmt
    );
  
    var rate = document.getElementById("InterestRate").value;
    document.getElementById("TInterestRate").innerHTML = rate;
  
    // Table input Terms
  }
  TransactionApplicantJoint();
  
  function tenYts() {
    //Home Loan Data table insert--START
    var purchasePrice = parseInt(document.getElementById("PurchasePrice").value);
    // console.log(purchasePrice);
    // document.getElementById("TPurchasePrice").innerHTML = purchasePrice
    document.getElementById("TPurchasePrice").innerHTML = accounting.formatMoney(
      purchasePrice
    );
  
    var downPayment = parseInt(document.getElementById("DownPayment").value);
    // console.log(downPayment);
    document.getElementById("TDownPayment").innerHTML = accounting.formatMoney(
      downPayment
    );
  
    var loanAmt = purchasePrice - downPayment;
    // console.log("Loan Amt is " + loanAmt);
    document.getElementById("TLoanAmount").innerHTML = accounting.formatMoney(
      loanAmt
    );
    //Home Loan Data table insert--ENDS
  
    var rate = document.getElementById("InterestRate").value;
    var rateR = rate / 100 / 12;
    document.getElementById("TInterestRate").innerHTML = rate;
  
    const t10 = document.getElementById("_10Years");
    const t15 = document.getElementById("_15Years");
    const t20 = document.getElementById("_20Years");
    const t30 = document.getElementById("_30Years");
  
    if ((rateR, purchasePrice, loanAmt == "" || 0)) {
      document.getElementById("totalIntPaid").innerHTML = "";
      document.getElementById("totalNumPmt").innerHTML = "";
      document.getElementById("TPrinciple&Interest").innerHTML = "";
      document.getElementById("TermYears").innerHTML = "";
    } else if (t10.checked == true) {
      var Term_10 = document.getElementById("_10Years").value;
      var Term_10Num = Number(Term_10) * 12;
      var p = Math.pow(1 + rateR, Term_10Num);
      var mPmt = (loanAmt * p * rateR) / (p - 1);
      document.getElementById("TermYears").innerHTML = Term_10Num;
  
      document.getElementById(
        "TPrinciple&Interest"
      ).innerHTML = accounting.formatMoney(mPmt);
      var totalNumPmt = Math.round(mPmt * Term_10Num);
      document.getElementById("totalNumPmt").innerHTML = accounting.formatMoney(
        totalNumPmt
      );
      var totalNumInt = Math.round(mPmt * Term_10Num - loanAmt);
      document.getElementById("totalIntPaid").innerHTML = accounting.formatMoney(
        totalNumInt
      );
    } else if (t15.checked == true) {
      var Term_15 = document.getElementById("_15Years").value;
      var Term_15Num = Number(Term_15) * 12;
      var p = Math.pow(1 + rateR, Term_15Num);
      var mPmt = (loanAmt * p * rateR) / (p - 1);
      document.getElementById("TermYears").innerHTML = Term_15Num;
  
      document.getElementById(
        "TPrinciple&Interest"
      ).innerHTML = accounting.formatMoney(mPmt);
      var totalNumPmt = Math.round(mPmt * Term_15Num);
      document.getElementById("totalNumPmt").innerHTML = accounting.formatMoney(
        totalNumPmt
      );
      var totalNumInt = Math.round(mPmt * Term_15Num - loanAmt);
      document.getElementById("totalIntPaid").innerHTML = accounting.formatMoney(
        totalNumPmt
      );
    } else if (t20.checked == true) {
      var Term_20 = document.getElementById("_20Years").value;
      var Term_20Num = Number(Term_20) * 12;
      var p = Math.pow(1 + rateR, Term_20Num);
      var mPmt = (loanAmt * p * rateR) / (p - 1);
      document.getElementById("TermYears").innerHTML = Term_20Num;
  
      document.getElementById(
        "TPrinciple&Interest"
      ).innerHTML = accounting.formatMoney(mPmt);
      var totalNumPmt = Math.round(mPmt * Term_20Num);
      document.getElementById("totalNumPmt").innerHTML = accounting.formatMoney(
        totalNumPmt
      );
      var totalNumInt = Math.round(mPmt * Term_20Num - loanAmt);
      document.getElementById("totalIntPaid").innerHTML = accounting.formatMoney(
        totalNumPmt
      );
    } else {
      t30.checked == true;
      var Term_30 = document.getElementById("_30Years").value;
      var Term_30Num = Number(Term_30) * 12;
      var p = Math.pow(1 + rateR, Term_30Num);
      var mPmt = (loanAmt * p * rateR) / (p - 1);
      document.getElementById("TermYears").innerHTML = Term_30Num;
  
      document.getElementById(
        "TPrinciple&Interest"
      ).innerHTML = accounting.formatMoney(mPmt);
      var totalNumPmt = Math.round(mPmt * Term_30Num);
      document.getElementById("totalNumPmt").innerHTML = accounting.formatMoney(
        totalNumPmt
      );
      var totalNumInt = Math.round(mPmt * Term_30Num - loanAmt);
      document.getElementById("totalIntPaid").innerHTML = accounting.formatMoney(
        totalNumPmt
      );
    }
  
    // var TermMonths = document.getElementById("TermYears").value;
    // var term = TermMonths;
  }
  tenYts();
  
  // ******************Chart.JS********************
  
  // <!--Applicant-Other Income START-->
  function addItem() {
    var ul = document.getElementById("dynamic-list");
    var applicant_other_income_type = document.getElementById("applicant_other_income_type");
    var applicant_other_income_type_amt = document.getElementById("applicant_other_income_type_amt");
    var li = document.createElement("li");
    li.setAttribute("id", applicant_other_income_type.value + "hr");
    li.setAttribute("value", applicant_other_income_type_amt.value);
  
  
  
    li.appendChild(document.createTextNode(applicant_other_income_type.value + " " + applicant_other_income_type_amt.value));
    ul.appendChild(li);
  }
  
  function removeItem() {
    var ul = document.getElementById("dynamic-list");
    var applicant_other_income_type = document.getElementById("applicant_other_income_type");
    var item = document.getElementById(applicant_other_income_type.value);
    ul.removeChild(item);
  }
  
  function B1_OtherIncome() {
    let m = [
      ...document.querySelector("#dynamic-list").children
    ];
    let total = 0;
    let val = " ";
    for (let {
        key,
        value
      } of Object.values(m)) {
      val += m.values.value;
      var result = value;
  
      console.log(result);
  
      total += value;
  
      console.log(total);
    };
    document.getElementById('b1_otherIncome').innerHTML = total;
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // <!--CoApplicant-Other Income START-->
  function addItem2() {
    var ul = document.getElementById("dynamic-list2");
    var coApplicant_other_income_type = document.getElementById("coApplicant_other_income_type");
    var coApplicant_other_income_type_amt = document.getElementById("coApplicant_other_income_type_amt");
  
    var li = document.createElement("li");
  
    li.setAttribute("id", coApplicant_other_income_type.value + "hr");
    li.setAttribute("value", coApplicant_other_income_type_amt.value);
  
    li.appendChild(document.createTextNode(coApplicant_other_income_type.value + " " + coApplicant_other_income_type_amt.value));
    ul.appendChild(li);
  }
  
  function removeItem2() {
    var ul = document.getElementById("dynamic-list2");
    var coApplicant_other_income_type = document.getElementById("coApplicant_other_income_type");
    var item = document.getElementById(coApplicant_other_income_type.value);
    ul.removeChild(item);
  }
  
  // function applicantOtherIcome() {
  //   var ul = document.getElementById("otherIncomeB");
  //   var opt = document.getElementById("opt1");
  //   var optIncomeType = document.getElementById("opt1").value;
  //   var opt1IncomeAmt = document.getElementById("Applicant-Job-Income").value;
  //   var opt1Incomeb1 = document.createElement("li");
  //   opt1Incomeb1.setAttribute("id", opt.value);
  //   opt1Incomeb1.appendChild(document.createTextNode(optIncomeType +" "+opt1IncomeAmt));
  //   // opt1Incomeb1.appendChild(document.createTextNode(opt1IncomeAmt));
  //   ul.appendChild(opt1Incomeb1);
  
  // ********************OTHER INCOME*******************
  function B2_OtherIncome() {
    let m = [
      ...document.querySelector("#dynamic-list2").children
    ];
    let total = 0;
    let val = " ";
    for (let {
        key,
        value
      } of Object.values(m)) {
      val += m.values.value;
      var result = value;
  
      console.log(result);
  
      total += value;
  
      console.log(total);
    };
    document.getElementById('b2_otherIncome').innerHTML = total;
  };
  //   console.log(eval(val));
  // };
  
  // for (value of  Object.values(val)){
  //   console.log(value);
  // };c
  // const form = document.getElementById('masterForm')[0];
  // const data =formDataAsJson(form);
  
  
  function storeLoandata() {
    var loandata = myLoan360.ref('lendme360');
    loandata.push(loanapps, finished);
  
    var loanAppdata = myLoan360.ref('lendme360/LoanApps');
    loanAppdata.push(loanapps, finished);
  
    function finished(error) {
      if (error) {
        console.log('ooops');
      } else {
        console.log('data saved!');
      }
    }
  }
  
  
  
  let loanapps = [];
  
  function addloan(e) {
    e.preventDefault();
  
    var app = {
      id: Date.now(),
  
      TransactionType: document.querySelector('input[name ="TransactionType"]:checked').value,
      PropertyType: document.querySelector('input[name ="PropertyType"]:checked').value,
      Occupancy: document.querySelector('input[name ="Occupancy"]:checked').value,
      LoanTerms: document.querySelector('input[name ="LoanTerms"]:checked').value,
  
      PurchasePrice: document.getElementById('PurchasePrice').value,
      DownPayment: document.getElementById('DownPayment').value,
      LoanAmount: document.getElementById('LoanAmount').value,
      InterestRate: document.getElementById('InterestRate').value,
  
      OriginalPurchasePrice_refi: document.getElementById('OriginalPurchasePrice_refi').value,
      HomeValue_refi: document.getElementById('HomeValue_refi').value,
      MortgageBalance_refi: document.getElementById('MortgageBalance_refi').value,
      MortgagePayment_refi: document.getElementById('MortgagePayment_refi').value,
      InterestRate_refi: document.getElementById('InterestRate_refi').value,
  
      Num_applicants: document.querySelector('input[name ="Num_applicants"]:checked').value,
      CurrentResidency: document.querySelector('input[name ="CurrentResidency"]:checked').value,
      Real_Estate_Own: document.querySelector('input[name ="Real_Estate_Own"]:checked').value,
  
      Applicant_Employer: document.getElementById('Applicant-Employer').value,
      Applicant_Job_title: document.getElementById('Applicant-Job-title').value,
      Time_on_Job: document.getElementById('Time-on-Job').value,
      ApplicantIncome: document.getElementById('ApplicantIncome').value,
      Applicant_other_income_type: document.getElementById('applicant_other_income_type').value,
      Applicant_other_income_type_amt: document.getElementById('applicant_other_income_type_amt').value,
      B1TotalAssets: document.getElementById('b1TotalAssets').value,
      B1TotalMonthlyLiabilities: document.getElementById('b1TotalMonthlyLiabilities').value,
  
      CoApplicant_Employer: document.getElementById('CoApplicantEmployer').value,
      CoApplicant_Job_title: document.getElementById('CoApplicant-Job-title').value,
      CoTime_on_Job: document.getElementById('CoTime-on-Job').value,
      ApplicantIncome: document.getElementById('CoApplicantIncome').value,
      CoApplicant_other_income_type: document.getElementById('coApplicant_other_income_type').value,
      CoApplicant_other_income_type_amt: document.getElementById('coApplicant_other_income_type_amt').value,
      B2TotalAssets: document.getElementById('CoTotalAssets').value,
      B2TotalMonthlyLiabilities: document.getElementById('CoTotalMonthlyLiabilities').value,
  
    }
    loanapps.push(app);
    document.forms[0].reset();
  
    console.warn('Submitted', {
      app
    });
  
    var newapps = document.getElementById('appDataJson');
    newapps.textContent = '\n' + JSON.stringify(loanapps, '\t', 2);
    console.log(newapps.textContent = '\n' + JSON.stringify(loanapps, '\t', 2));
    storeLoandata()
  }
  // document.getElementById('btn').addEventListener('click', addloan);
  
  
  
  // function ProposalGen() {
  //   html2canvas(document.querySelector("#entireSite")).then(canvas => {
  //     // document.body.appendChild(canvas);
  //     var imgData = canvas.toDataURL('image/JPEG');
  //     // console.log(imgData);
  //     var doc = new jsPDF({
  //         orientation: 'p',
  //         unit: 'in',
  //         format: 'legal',
  //         alias: '1',
  //         compression: 'FAST',
  //         // putOnlyUsedFonts: true
  //         // floatPrecision: 5 // or "smart", default is 16
  //       }
  
  //     );
  //     doc.addImage(imgData, 'JPEG', 0.20, 0.35, 5, 14);
  //     doc.save('sample-file1.pdf');
  //   });
  // }
  
  
  function getPDF() {
  
    var HTML_Width = $("#entireSite").width();
    var HTML_Height = $("#entireSite").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;
  
    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
  
  
    html2canvas($("#entireSite")[0], {
      allowTaint: true
    }).then(function (canvas) {
      canvas.getContext('2d');
  
      console.log(canvas.height + "  " + canvas.width);
  
  
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
  
  
      for (var i = 1; i <= totalPDFPages; i++) {
        pdf.addPage(PDF_Width, PDF_Height);
        pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
      }
      // pdf.save("HTML-Document.pdf");
      var blob = pdf.output('blob');
      var date = new Date()
      console.log("PDF file generated")
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          console.log("Uploading file for " + user.email)
          var storage = firebase.storage().ref('PDF_Files/' + user.email + "/" + date.toString())
          var process = storage.put(blob)
          process.on('state_changed',
            function progress(snapshot) {
                  var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                  console.log("Uploading file...   " + percentage.toFixed( 2 ) + "% completed")
            },
            function err(err) {
              console.log("ERROR  :  " + err)
            },
            function complete(){
              console.log('File Succefully uploaded')
            }
          )
        }
      })
  
    });
  
  console.log('Exited')
  };
  
  
  
  // function printPDF(){
  //     const domElement = document.getElementById('entireSite');
  //     html2canvas(domElement, {onclone: (document) => {
  //       document.getElementById('TEST_btn2').style.visibility = 'hidden';
  // }})
  //     .then((canvas) => {
  //         const img = canvas.toDataURL('image/png');
  //         const pdf = new jsPDF();
  //         pdf.addImage(imgData, 'JPEG', 0, 0);
  //         pdf.save('your-filename.pdf');
  // });
  // }