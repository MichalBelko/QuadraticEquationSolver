const resetBtn = document.getElementById("resetBtn");
const calculateBtn = document.getElementById("calculateBtn");
const toggler = document.querySelector(".fas");
const inputs = document.getElementsByClassName("number");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const number1 = document.querySelector(".number1");
const root1 = document.querySelector(".root1");
const root2 = document.querySelector(".root2");
const info = document.getElementById("info");

resetBtn.addEventListener("click", function () {
  for (let i = 0; i <= inputs.length - 1; i++) {
    inputs[i].value = "";
  }
});

calculateBtn.addEventListener("click", function () {
  const a = Number(number1.value);
  const b = Number(number2.value);
  const c = Number(number3.value);
  const Determinant = b * b - 4 * a * c;
  if (a !== 0 && Determinant > 0) {
    const x1 = ((-b + Math.sqrt(Determinant)) / 2) * a;
    const x2 = ((-b - Math.sqrt(Determinant)) / 2) * a;
    root1.textContent = x1.toFixed(3);
    root2.textContent = x2.toFixed(3);
    document.querySelector(".none").style.display = "block";
    info.textContent = "";
  } else if (Determinant === 0) {
    const x1 = -b / (2 * a);
    const x2 = -b / (2 * a);
    root1.textContent = x1.toFixed(3);
    root2.innerHTML = "x<sub>1</sub>";
    document.querySelector(".none").style.display = "none";
    info.textContent = "Only one root";
    info.style.color = "red";
    info.style.fontSize = "1.5rem";
  } else if (a === 0) {
    info.textContent = "first number must not be 0";
    info.style.color = "red";
    info.style.fontSize = "1.5rem";
    root1.textContent = "";
    root2.textContent = "";
  } else {
    info.textContent = "Determinant must be higher than 0";
    info.style.color = "red";
    info.style.fontSize = "1.5rem";
    root1.textContent = "";
    root2.textContent = "";
  }
});

//day night mode
//day night mode
//day night mode
const darkBtn = document.querySelector(".fa-moon");
const bodyEl = document.querySelector("body");

const darkMode = () => {
  bodyEl.classList.toggle("dark");
};

darkBtn.addEventListener("click", () => {
  // Get the value of the "dark" item from the local storage on every click
  setDarkMode = localStorage.getItem("dark");

  if (setDarkMode !== "on") {
    darkMode();
    // Set the value of the itwm to "on" when dark mode is on
    setDarkMode = localStorage.setItem("dark", "on");
  } else {
    darkMode();
    // Set the value of the item to  "null" when dark mode if off
    setDarkMode = localStorage.setItem("dark", null);
  }
});

// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem("dark");

// Check dark mode is on or off on page reload
if (setDarkMode === "on") {
  darkMode();
}
