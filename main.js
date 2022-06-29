// Variables
// Inputs
const numberInput = document.getElementById("number-input");
const holderInput = document.getElementById("holder-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const cvvInput = document.getElementById("cvv-input");

// Targets
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const number4 = document.getElementById("number4");

const holderFront = document.getElementById("holder-front");
const holderBack = document.getElementById("holder-back");

const expMonth = document.getElementById("exp-month");
const expYear = document.getElementById("exp-year");

const cvvOutput = document.getElementById("cvv");
const card = document.querySelector(".card-inner");

// Listeners
numberInput.oninput = (e) => {
  let number = e.target.value;
  if (number.length <= 4) {
    number1.innerText = number;
  } else if (number.length <= 8) {
    number2.innerText = number.slice(4);
  } else if (number.length <= 12) {
    number3.innerText = number.slice(8);
  } else if (number.length <= 16) {
    number4.innerText = number.slice(12);
  }
};

holderInput.oninput = (e) => {
  let holder = e.target.value;
  holderFront.innerText = holder;
  holderBack.innerText = holder;
};

monthInput.oninput = (e) => {
  let month = e.target.value;
  expMonth.innerText = month;
};

yearInput.oninput = (e) => {
  let year = e.target.value.slice(2);
  expYear.innerText = year;
};

cvvInput.onmouseenter = () => {
  card.style.transform = "rotateY(-180deg)";
  console.log("enter");
};

cvvInput.onmouseleave = () => {
  card.style.transform = "rotateY(0)";
  console.log("leave");
};

cvvInput.oninput = (e) => {
  let cvv = e.target.value;
  if (cvv.length <= 3) {
    cvvOutput.innerText = cvv;
  }
};
