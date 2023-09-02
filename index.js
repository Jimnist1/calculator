let currentArr = [];
let nextArr = [];
let arraySet = currentArr;

let currentSum = 0;
let nextSum = 0;

let currentTotal = 0;
let nextTotal = 0;

let operator = "";

function arrayToSum(array) {
  currentSum = array.join("");
  currentTotal = currentSum;
  displayCurrent(currentTotal);
}

function deleteDigit(array) {
  if (array.length > 1) {
    array.pop();
    arrayToSum(array);
  } else {
    array.pop();
    array = [0];
    arrayToSum(array);
  }
}

function createSum(array, number) {
  if (array.length <= 8) {
    array.push(number);
    console.log(array);
    arrayToSum(array);
  }
}

function checkZero(button) {
  if (currentArr.length || nextArr2.length > 0) createSum(arraySet, button);
}

function changeArray() {
  if (arraySet == currentArr) arraySet = nextArr;
  else arraySet = currentArr;
}

function checkButton(button) {
  switch (button) {
    case "0":
      checkZero(button);
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
      createSum(arraySet, button);
      break;
    case "+":
    case "-":
    case "/":
    case "*":
      operator = button;

      break;
    case "delete":
      deleteDigit(arraySet);
      break;
    case "clear":
      break;
  }
}

function displayCurrent(total) {
  let inputCurrent = document.getElementById("inputContainer");
  inputCurrent.textContent = total;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    checkButton(button.id);
  });
});
const body = document.querySelector("body");
body.onload = displayCurrent(currentTotal);
