/***
 *	Author: Brian Veitch
 *	Loan Installment Calculator
 *	Purpose: Javascript code to validate user input for loan calculator
 *	First half of this is jquery validation to make the errors look 'pretty'
 *	There is also regular javascript errors after a user submits as a backup
 ***/

// 	var showAmt;
// 	var showMonths;
// 	var showRate;
// 	var showExtra;
// 	$("input[id='submit']").attr("disabled", "disabled");

// 	$('#loan_amt').change( function() {

// 	  if ($('#loan_amt').val() <= 0 || isNaN(Number($('#loan_amt').val()))  ){

// 			$('#dialog').css('display', 'block');
// 			$('#amt').css('display', 'block');
// 			$('#amt').html('<img src="images.png" width="25" height="25"/> Please enter a valid loan amount.');
// 			showAmt = true;
// 	  }
// 	  else{
// 		$('#amt').css('display', 'none');
// 		showAmt = false;
// 		if( (showAmt == false) && (showMonths == false) && (showRate == false)  ){
// 		$('#dialog').css('display','none');
// 		$("input[id='submit']").removeAttr("disabled");
// 		}
// 	  }
// });

// 	  $('#months').change(function() {
// 	  if ( $('#months').val() <= 0 || parseInt($('#months').val() ) != $('#months').val()   ){

// 			$('#dialog').css('display', 'block');
// 			$('#numMonths').css('display', 'block');
// 			$('#numMonths').html('<img src="images.png" width="25" height="25"/> Please enter a valid number of months.');
// 			showMonths = true;
// 	  }
// 	  else{
// 		$('#numMonths').css('display', 'none');
// 		showMonths = false;
// 		if( (showAmt == false) && (showMonths == false) && (showRate == false)  ){
// 		$('#dialog').css('display','none');
// 		$("input[id='submit']").removeAttr("disabled");
// 	}
// 	  }
// 	  });

// 	$('#rate').change(function() {
// 	  if ( $('#rate').val() <= 0 || $('#rate').val() > 99 ||  isNaN(Number($('#rate').val())) ){

// 			$('#dialog').css('display', 'block');
// 			$('#interestRate').css('display', 'block');
// 			$('#interestRate').html('<img src="images.png" width="25" height="25"/> Please enter a valid interest rate.');
// 			showRate = true;
// 	  }
// 	  else{
// 		$('#interestRate').css('display', 'none');
// 		showRate = false;
// 		if( (showAmt == false) && (showMonths == false) && (showRate == false) ){
// 		$('#dialog').css('display','none');
// 		$("input[id='submit']").removeAttr("disabled");
// 	}
// 	  }
// });

// 	$('#extra').change(function() {
// 	  if ( $('#extra').val() < 0 ||  isNaN(Number($('#extra').val()))  ){

// 			$('#dialog').css('display', 'block');
// 			$('#extraPayment').css('display', 'block');
// 			$('#extraPayment').html('<img src="images.png"  width="25" height="25" /> Please enter a valid extra payment.');
// 			showRate = true;
// 	  }
// 	  else{
// 		$('#extraPayment').css('display', 'none');
// 		showExtra = false;
// 		if( (showAmt == false) && (showMonths == false) && (showRate == false) ){
// 		$('#dialog').css('display','none');
// 		$("input[id='submit']").removeAttr("disabled");
// 	}
// 	  }
// });

// function startOver() {

// 	document.loan_form.loan_amt.value="";
// 	document.loan_form.months.value="";
// 	document.loan_form.rate.value="";
// 	document.loan_form.extra.value="0";

// 	document.getElementById("loan_info").innerHTML="";
// 	document.getElementById("table").innerHTML = "";

// 	location.reload();

// }

function validate() {
  // var loan_amt = document.loan_form.loan_amt.value;
  // var months = document.loan_form.months.value;
  // var rate = document.loan_form.rate.value;
  // var extra = document.loan_form.extra.value;

  var purchasePrice = parseInt(document.getElementById("PurchasePrice").value);
  // console.log(purchasePrice);
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

  var rate = document.getElementById("InterestRate").value;
  var rateR = rate / 100 / 12;
  document.getElementById("TInterestRate").innerHTML = rate;

  var TermMonths = document.querySelector("#TermYears").innerHTML;
  var term = TermMonths;

  var loan_amt = (document.loan_form.loan_amt.value = loanAmt);
  // var months = document.querySelector("#months").value=term;
  var months = (document.loan_form.months.value = term);
  var rate = (document.loan_form.rate.value = rate);
  var extra = document.loan_form.extra.value;

  // isNaN(number()) checks to see if the user entered a float
  if (loan_amt <= 0 || isNaN(Number(loan_amt))) {
    alert("Please enter a valid loan amount.");
    document.loan_form.loan_amt.value = "";
  } else if (months <= 0 || parseInt(months) != months) {
    alert("Please enter a valid number of months.");
    document.loan_form.months.value = term;
  } else if (rate <= 0 || rate > 99 || isNaN(Number(rate))) {
    alert("Please enter a valid interest rate.");
    document.loan_form.rate.value = "";
  } else if (extra < 0 || isNaN(Number(extra))) {
    alert("Please enter a valid extra payment.");
    document.loan_form.extra.value = "0";
  } else {
    // all the data has been validated
console.log(loan_amt);
    calculate(
      parseFloat(loan_amt),
      parseInt(months),
      parseFloat(rate),
      parseFloat(extra)
    );
  }
}
// calculate(parseFloat(loan_amt), parseInt(months), parseFloat(rate), parseFloat(extra));

function calculate(loan_amt, months, rate, extra) {
  i = rate / 100;

  var monthly_payment =
    (loan_amt * (i / 12) * Math.pow(1 + i / 12, months)) /
    (Math.pow(1 + i / 12, months) - 1);

  var info = "";

  info += "<table >";
  info += "<tr><td>Loan Amount:</td>";
  info += "<td align='right'>$" + loan_amt + "</td></tr>";

  info += "<tr><td>Num of Months:</td>";
  info += "<td align='right'>" + months + "</td></tr>";

  info += "<tr><td>Interest Rate:</td>";
  info += "<td align='right'>" + rate + "%</td></tr>";

  info += "<tr><td>Monthly Payment:</td>";
  info += "<td align='right'>$" + round(monthly_payment, 2) + "</td></tr>";

  info += "<tr><td>+Extra:</td>";
  info += "<td align='right'>$" + extra + "</td></tr>";

  info += "<tr><td>Total Payment:</td>";
  info +=
    "<td align='right'>$" + round(monthly_payment + extra, 2) + "</td></tr>";

  info += "</table>";

  document.getElementById("loan_info").innerHTML = info; // info is a string container all the html table code

  // ---------------------------------------------------------------------------------------------------

  var table = "";

  table += "<table cellpadding='10' ";

  table += "<tr class='table-hover text-center'>";
  table += "<td >0</td>";
  table += "<td >&nbsp;</td>";
  table += "<td >&nbsp;</td>";
  table += "<td >&nbsp;</td>";
  table += "<td >&nbsp;</td>";
  table += "<td >&nbsp;</td>";
  table += "<td >" + round(loan_amt, 2) + "</td>";
  table += "</tr>";

  var payment_date = moment().format("MMM-D-YYYY");
  var pmtdate = moment(payment_date);

  var current_balance = loan_amt;
  var payment_counter = 1;
  var total_interest = 0;
  monthly_payment = monthly_payment + extra;

  chart.data.datasets[0].data = []
  chart.data.datasets[1].data = []
  chart.data.datasets[2].data = []
  // chart.data.datasets[3].data = []
  chart.data.labels = []

  while (current_balance > 0) {
    //create rows

    towards_interest = (i / 12) * current_balance; //this calculates the portion of your monthly payment that goes towards interest

    if (monthly_payment > current_balance) {
      monthly_payment = current_balance + towards_interest;
    }

    towards_balance = monthly_payment - towards_interest;
    total_interest = total_interest + towards_interest;
    current_balance = current_balance - towards_balance;
    // display row

    table += "<tr class='table_info text-center'>";
    table += "<td>" + payment_counter + "</td>";
    table += "<td>" + pmtdate.add(1, "months").format("MMM-D-YYYY") + "</td>";
    table += "<td>" + round(monthly_payment, 2) + "</td>";
    table += "<td>" + round(towards_balance, 2) + "</td>";
    table += "<td>" + round(towards_interest, 2) + "</td>";
    table += "<td>" + round(total_interest, 2) + "</td>";
    table += "<td>" + round(current_balance, 2) + "</td>";
    table += "</tr>";

    payment_counter++;

    var Am_paymt_dates = pmtdate.add(1, "months").format("MMM-YYYY");
    var Am_paymet_dates_array = new Array(Am_paymt_dates); //Payment Dates

    var Am_MthlyPmtPaid = round(monthly_payment, 2); //Monthly Payments Paid
    // chart.data.datasets[3].data.push(Am_MthlyPmtPaid);
    // console.log(Am_MthlyPmtPaid);

    var Am_InterestPaid = round(total_interest, 2); //Interested Paid
    chart.data.datasets[0].data.push(Am_InterestPaid);
    // console.log(Am_InterestPaid);

    var Am_princBal = round(current_balance, 2); //Principle Balance
    chart.data.datasets[1].data.push(Am_princBal);
    // console.log(Am_princBal);

    var Am_Principlepaid = round(towards_balance, 2); //Principle Paid
    chart.data.datasets[2].data.push(Am_Principlepaid);
    // console.log(Am_Principlepaid);

    chart.data.labels.push(Am_paymet_dates_array);
    // Am_paymet_dates_array.push(labels)

    chart.update();
  }

  table += "</table>";

  document.getElementById("table").innerHTML = table;

  // **********************BREAKDOWN TABLE*********************************
  prtyTaxRate = 0.093 / 100;
  var p = document.getElementById("PurchasePrice").value;
  prtyTaxAmt = p * prtyTaxRate;
  document.getElementById("PropertyTx").innerHTML = accounting.formatMoney(
    prtyTaxAmt
  );

  prtyHOIRate = 0.053 / 100;
  var p = document.getElementById("PurchasePrice").value;
  prtyHOIAmt = p * prtyHOIRate;
  document.getElementById("HOI_Dues").innerHTML = accounting.formatMoney(
    prtyHOIAmt
  );

  var b1_employer_income = Number.parseInt(
    document.getElementById("ApplicantIncome").value.replace(/\,/g, "")
  );
  document.getElementById("AppIncome").innerHTML = accounting.formatMoney(
    b1_employer_income
  );
  console.log("b1_employer_income _ from-LoanAmJS" + " " + b1_employer_income);

  var b2_employer_income = parseInt(
    document.getElementById("CoApplicantIncome").value.replace(/\,/g, "")
  );
  document.getElementById("coAppIncome").innerHTML = accounting.formatMoney(
    b2_employer_income
  );
  console.log("b2_employer_incom_ from-LoanAmJS" + " " + b2_employer_income);

  var b1PLUSb2_income =
    parseInt(b1_employer_income) + parseInt(b2_employer_income);
  console.log("b1PLUSb2_income _ from-LoanAmJS" + " " + b1PLUSb2_income);

  var b1_total_assets = document.getElementById("b1TotalAssets").value;
  document.getElementById("AppTotalAssets").innerHTML = accounting.formatMoney(
    b1_total_assets
  );
  console.log("b1_total_assets  _ from- LoanAmJS" + " " + b1_total_assets);

  var b2_total_assets = document.getElementById("CoTotalAssets").value;
  document.getElementById(
    "CoAppTotalAssets"
  ).innerHTML = accounting.formatMoney(b2_total_assets);
  console.log("b2_total_assets  _ from- LoanAmJS" + " " + b2_total_assets);

  var b1_total_liabilities = parseInt(
    document
    .getElementById("b1TotalMonthlyLiabilities")
    .value.replace(/\,/g, "")
  );
  document.getElementById(
    "AppTotalLiabilities"
  ).innerHTML = accounting.formatMoney(b1_total_liabilities);
  console.log("B1 Liabilites_ from-LoanAmJS" + " " + b1_total_liabilities);

  var b2_total_liabilities = parseInt(
    document
    .getElementById("CoTotalMonthlyLiabilities")
    .value.replace(/\,/g, "")
  );
  document.getElementById(
    "CoAppTotalLiabilities"
  ).innerHTML = accounting.formatMoney(b2_total_liabilities);
  console.log("B2 Liabilites_ from-LoanAmJS" + " " + b2_total_liabilities);

  var Empb1_b2Liablities = parseInt(
    b1_total_liabilities + b2_total_liabilities
  );
  document.getElementById(
    "grandTotalLiabilities"
  ).innerHTML = accounting.formatMoney(Empb1_b2Liablities);

  var ratio1 = Empb1_b2Liablities / b1PLUSb2_income;
  document.getElementById("currentRatio").innerHTML = numeral(ratio1).format(
    "0%"
  );

  document.getElementById(
    "grandTotalLiabilitiesRatio"
  ).innerHTML = accounting.formatMoney(Empb1_b2Liablities);

  document.getElementById(
    "grandTotalincome"
  ).innerHTML = accounting.formatMoney(b1PLUSb2_income);
  document.getElementById(
    "grandTotalincomeRatio"
  ).innerHTML = accounting.formatMoney(b1PLUSb2_income);
  console.log("B1 and B2 Liabilites_ from-LoanAmJS" + " " + b1PLUSb2_income);

  var Am_MthlyPmtPaid = parseInt(Am_MthlyPmtPaid);
  console.log("MonthlyPmt" + " " + Am_MthlyPmtPaid);

  p_PITIA = Am_MthlyPmtPaid + prtyHOIAmt + prtyTaxAmt;
  console.log("mthypmt  plus Pitia plus HOI_ from-LoanAmJS" + " " + p_PITIA);

  document.getElementById("purchasePITIA").innerHTML = accounting.formatMoney(
    p_PITIA
  );


  var p_liblitiesANDp_pitia = parseInt(p_PITIA) + parseInt(Empb1_b2Liablities);
  document.getElementById("grandTotal_PITIA_Ratio").innerHTML = accounting.formatMoney(p_liblitiesANDp_pitia);
  console.log(
    "Liabilties plus Pitia_ from-LoanAmJS" + "  " + p_liblitiesANDp_pitia
  );



  // document.getElementById(
  //   "grandTotal_PITIA_Ratio"
  // ).innerHTML = accounting.formatMoney(p_PITIA);

  var pDTI = p_liblitiesANDp_pitia / b1PLUSb2_income;
  document.getElementById("pDTI").innerHTML = numeral(pDTI).format("0%");


}

function round(num, dec) {
  return (Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(dec);
}

// m1 = document.querySelector("#m1")
// twnimg = document.getElementById('twnimg')
// condimg = document.getElementById('condimg')

// sfr = document.getElementById("sfr")
// twn = document.getElementById("twn")
// cond = document.getElementById("cond")

// function addCardimgSFR(){
//   if (m1.style.display === "none") {
//     m1.style.display === "block";
//   } else {
//     m1.style.display === "none";
//   }
// }

// function PropertyType() {

//   var testSfr = document.getElementById('sfr').value;
//    switch(testSfr.value){
//     case 'Sfr': document.getElementById("card_2_img").innerHTML = "<img src='../HomeLoanChecklist/baby-trolley.svg'>";
//     break;
//    }

// function addCardimgTWN(){
//   if (twn.checked === true) {
//     twnimg.style.display = 'block';
//   } else{
//     twnimg.style.display = 'none';
//   }
// }

// function addCardimgCOND(){
//   if (cond.checked === true) {
//     condimg.style.display = 'block';
//   } else{
//     condimg.style.display = 'none';
//   }

//   }
// function addCardimgSFR(){
//   if (sfr.checked === true) {
//     sfrimg.style.display = 'block';
//     twnimg.style.display = 'none';
//     condimg.style.display = 'none';

//   } else if (twn.checked === true){
//     twnimg.style.display = 'block';
//     condimg.style.display = 'none';
//     sfrimg.style.display = 'none';

//   } else (cond.checked === true)
//   condimg.style.display = 'block';
//   sfrimg.style.display = 'none';
//   twnimg.style.display = 'none';
//   }
// function addCardimgSFR(){
//   if (sfr.checked === true) {
//     sfrimg.style.display = 'block';
//     twnimg.style.display = 'none';
//     condimg.style.display = 'none';

//   } else if (twn.checked === true){
//     twnimg.style.display = 'block';
//     condimg.style.display = 'none';
//     sfrimg.style.display = 'none';

//   } else (cond.checked === true)
//   condimg.style.display = 'block';
//   sfrimg.style.display = 'none';
//   twnimg.style.display = 'none';
//   }

//   var cardDiv = document.createElement("div");
//   cardDiv.id = "card1img"
//   var cardIMG = document.createElement('img');
//   cardIMG.setAttribute('src', '../HomeLoanChecklist/optimization-timer-1.svg');
//   cardDiv.appendChild(cardIMG)

// var card_2_img = document.getElementById('card_2_img');

//   // var card2img = document.getElementById('card2img')
//   var x = document.querySelector("#TransactionCards > div:nth-child(3) > div")
//   card_2_img.remove()
//   x.append(cardDiv)

// function addCardimgTWN(){

//   var cardDiv = document.createElement("div");
//   cardDiv.id = "card2img"
//   var cardIMG = document.createElement('img');
//   cardIMG.setAttribute('src', '../HomeLoanChecklist/presentation-board-graph.svg');
//   cardDiv.appendChild(cardIMG)

//   var card1img = document.getElementById('card1img');
//   x = document.querySelector("#TransactionCards > div:nth-child(3) > div");
//   card1img.remove()
//   x.append(cardDiv)
// }

// function addCardimgCONDO(){
//   var cardDiv = document.createElement("div");
//   cardDiv.id = "card3img"
//   var cardIMG = document.createElement('img');
//   cardIMG.setAttribute('src', '../HomeLoanChecklist/like-1.svg');
//   cardDiv.appendChild(cardIMG)

//   var card2img = document.getElementById('card2img');
//   x = document.querySelector("#TransactionCards > div:nth-child(3) > div");
//   card2img.remove()
//   x.append(cardDiv)

// }

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }

// }

// function myFunction2() {
//   var x = document.getElementById("myDIV2");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// function myFunction3() {
//   var x = document.getElementById("myDIV3");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// switch(document.bob.field.value)

// function check_value(){
//   var testSfr = document.querySelector("#pt");
//   switch(testSfr.PropertyType.value){
//      case "Sfr":
//        document.getElementById("card_2_img").innerHTML = "<img  src='../HomeLoanChecklist/tesla.jpg'>";
//        break;
//      case "Twn":
//       document.getElementById("card_2_img").innerHTML = "<img  src='../HomeLoanChecklist/presentation-board-graph.svg'>";
//         break;
//      case "Condo":
//       document.getElementById("card_2_img").innerHTML = "<img  src='../HomeLoanChecklist/tesla.jpg'>";
//         break;
//   }
// }