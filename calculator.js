window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});
function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}
// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  initialValues = getCurrentUIValues();
  let amountInput = document.getElementById("loan-amount");
  initialValues.amount = 5000;
  amountInput.value = initialValues.amount;
  let yearsInput = document.getElementById("loan-years");
  initialValues.years = 20;
  yearsInput.value = initialValues.years = 5;
  let rateInput = document.getElementById("loan-rate");
  initialValues.rate = 2.7;
  rateInput.value = initialValues.rate;
  update();
}
// Get the current values from the UI
// Update the monthly payment
function update() {
  let interfaceInput = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(interfaceInput));
}
// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = values.rate / 100 / 12;
  let n = Math.floor(values.years * 12);
  let amount = values.amount;
  let finalAmount = (
    (monthlyRate * amount) /
    (1 - Math.pow(1 + monthlyRate, -n))
  ).toFixed(2);
  if (n == "0") {
    finalAmount = "Please fill in Years";
    return finalAmount;
  } else if (amount == 0) {
    finalAmount = "Please fill in a amount";
    return finalAmount;
  } else if (monthlyRate == 0) {
    finalAmount = "Please fill in a rate";
    return finalAmount;
  } else {
    return finalAmount;
  }
}
// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyText = document.getElementById("monthly-payment");
  monthlyText.innerText = `$ ${monthly}`;
}
