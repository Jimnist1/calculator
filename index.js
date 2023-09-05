// Initial Variable declarations:
let currentArr = [];
let currentTotal = 0;
let nextSum = "";
let operator = "";

// Calculating things:
function doMath() {
  if (nextSum == 0 && operator == "/")
    alert("Oi!! dividing by zero is dangerous!!");
  else {
    switch (operator) {
      case "+":
        currentTotal += nextSum;
        displayCurrent(currentTotal);
        break;
      case "-":
        currentTotal -= nextSum;
        displayCurrent(currentTotal);
        break;
      case "x":
        currentTotal *= nextSum;
        roundVaribles(currentTotal);
        displayCurrent(currentTotal);
        break;
      case "÷":
        currentTotal /= nextSum;
        roundVaribles(currentTotal);
        displayCurrent(currentTotal);
        break;
    }
  }
}
function roundVaribles(num) {
  currentTotal = Math.round(num * 1000) / 1000;
}

// Array formation & deletion:
function arrayToSum(array) {
  if (operator == "") {
    currentTotal = +array.join("");
    displayCurrent(currentTotal);
  } else {
    nextSum = +array.join("");
    displayCurrent(nextSum);
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
  nextSum = "";
  operator = "";

  displayCurrent(currentTotal);
}
function createSum(array, number) {
  if (array.length <= 8) {
    array.push(number);
    arrayToSum(array);
  }
}

//Checks and status:
function operatorChecker(button) {
  if (nextSum > 0 || nextSum < 0) {
    doMath();
    operator = button;
    nextSum = "";
    currentArr = [];
  } else if (currentTotal > 0) {
    operator = button;
    displayCurrent(button);
    currentArr = [];
  }
}
function checkZero(button) {
  if (currentArr.length > 0) createSum(currentArr, button);
}
function checkForPoint(button) {
  if (currentArr.length == 0) {
    createSum(currentArr, "0");
    createSum(currentArr, button);
  } else if (!currentArr.includes(".")) createSum(currentArr, button);
}
function checkButton(button) {
  switch (button) {
    case "0":
      checkZero(button);
      break;
    case ".":
      checkForPoint(button);
      break;
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
    case "÷":
    case "x":
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
      nextSum = "";
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
