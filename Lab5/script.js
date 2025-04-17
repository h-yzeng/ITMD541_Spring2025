const billInput = document.getElementById("bill-total");
const tipSlider = document.getElementById("tip-slider");
const tipValue = document.getElementById("tip-value");
const totalTax = document.getElementById("total-tax");
const convertedTip = document.getElementById("converted-tip");
const convertedTotal = document.getElementById("converted-total");
const currencySelect = document.getElementById("currency");
const form = document.querySelector("form");

let errorElement = null;

const getRate = (currency) =>
  currency === "eur" ? 0.95 : currency === "inr" ? 85 : 1;

const format = (value, currency) =>
  `${currency === "eur" ? "€" : currency === "inr" ? "₹" : "$"}${value.toFixed(2)}`;

function showError(message) {
  if (!errorElement) {
    errorElement = document.createElement("p");
    errorElement.style.color = "red";
    errorElement.style.textAlign = "center";
    errorElement.style.marginTop = "1rem";
    errorElement.style.fontSize = "1rem";
    form.appendChild(errorElement);
  }
  errorElement.textContent = message;
}

function clearError() {
  if (errorElement) {
    errorElement.remove();
    errorElement = null;
  }
}

function calculate() {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseInt(tipSlider.value);
  const currency = currencySelect.value;

  tipValue.textContent = `${tipPercent}%`;

  if (isNaN(bill) || bill < 0) {
    showError("Please enter a valid positive number.");
    totalTax.value = "";
    convertedTip.value = "";
    convertedTotal.value = "";
    return;
  }

  clearError();

  if (bill === 0) {
    totalTax.value = "";
    convertedTip.value = "";
    convertedTotal.value = "";
    return;
  }

  const rate = getRate(currency);
  const tax = bill * 0.11;
  const billWithTax = bill + tax;
  const tip = billWithTax * (tipPercent / 100);
  const total = billWithTax + tip;

  const convertedTipAmount = parseFloat((tip * rate).toFixed(2));
  const convertedGrandTotal = parseFloat((total * rate).toFixed(2));

  totalTax.value = `$${billWithTax.toFixed(2)}`;
  convertedTip.value = format(convertedTipAmount, currency);
  convertedTotal.value = format(convertedGrandTotal, currency);
}

form.addEventListener("input", calculate);
