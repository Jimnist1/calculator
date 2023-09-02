let inputArr1 = [];
let inputArr2 = [];
let currentTotal = 0;
let nextTotal = 0;
let sum1 = 0;
let sum2 = 0;
let operator = "";

functio;

function displayCurrent(total) {
  let inputCurrent = document.getElementById("inputContainer");
  inputCurrent.textContent = total;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    checkStatus();
    displayCurrent(currentTotal);
  });
});
const body = document.querySelector("body");
body.onload = displayCurrent(currentTotal);
