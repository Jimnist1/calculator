let currentArr = [];

let currentTotal = 0;
let nextSum = 0;

let operator = "";
// Calculating things:
function doMath() {
  if (nextSum == 0 && operator == "/")
    alert("Oi!! dividing by zero is dangerous!!");
  else {
    currentArr = [];
    switch (operator) {
      case "+":
        currentTotal += nextSum;
        displayCurrent(currentTotal);
        break;
      case "-":
        currentTotal -= nextSum;
        displayCurrent(currentTotal);
        break;
      case "*":
        currentTotal *= nextSum;
        displayCurrent(currentTotal);
        break;
      case "/":
        currentTotal /= nextSum;
        displayCurrent(currentTotal);
        break;
    }
  }
}
// Array formation & deletion:
function arrayToSum(array) {
  if (currentTotal == 0) {
    currentTotal = parseInt(array.join(""));
    displayCurrent(currentTotal);
    console.log(currentTotal);
  } else {
    nextSum = parseInt(array.join(""));
    displayCurrent(nextSum);
    console.log(currentTotal, nextSum);
  }
}
function deleteDigit(array) {
  if (array.length > 1) {
    array.pop();
    arrayToSum(array);
  } else {
    array.pop();
    displayCurrent(0);
  }
}
function clearForm() {
  currentArr = [];
  currentTotal = 0;
  nextSum = 0;
  operator = "";
  displayCurrent(currentTotal);
}
function createSum(array, number) {
  if (array.length <= 8) {
    array.push(number);
    console.log(array);
    arrayToSum(array);
  }
}

//Checks and status:
function operatorChecker(button) {
  if (currentTotal > 0) {
    operator = button;
    displayCurrent(button);
    currentArr = [];
    console.log(operator);
  }
}
function checkZero(button) {
  if (currentArr.length > 0) createSum(currentArr, button);
}
function checkButton(button) {
  switch (button) {
    case "0":
      checkZero(button);
      break;
    case ".":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      createSum(currentArr, button);
      break;
    case "+":
    case "-":
    case "/":
    case "*":
      operatorChecker(button);
      break;
    case "delete":
      deleteDigit(currentArr);
      break;
    case "clear":
      clearForm();
      break;
    case "=":
      doMath();
      break;
  }
}
// Visual display:
function displayCurrent(total) {
  let inputCurrent = document.getElementById("inputContainer");
  inputCurrent.textContent = total;
}
//Button operation:
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    checkButton(button.id);
  });
});
const body = document.querySelector("body");
body.onload = displayCurrent(currentTotal);
