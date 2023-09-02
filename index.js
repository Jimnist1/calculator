let currentArr = [];
let nextArr2 = [];
let currentTotal = 0;
let nextTotal = 0;
let currentSum = 0;
let nextSum = 0;
let operator = "";

//function errorHandler(button){};
function create()

function checkStatus(button) {
  if (
    (currentTotal == 0 && button.id == 1) ||
    2 ||
    3 ||
    4 ||
    5 ||
    6 ||
    7 ||
    8 ||
    9
  ) {
  }
}

function displayCurrent(total) {
  let inputCurrent = document.getElementById("inputContainer");
  inputCurrent.textContent = total;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    checkStatus(button.id);
  });
});
const body = document.querySelector("body");
body.onload = displayCurrent(currentTotal);
