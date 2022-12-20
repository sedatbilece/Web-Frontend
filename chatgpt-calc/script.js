const calculator = document.getElementById("calculator");
const display = calculator.querySelector(".display");

display.textContent = "0";//added this line

calculator.addEventListener("click", function(event) {
  if (event.target.classList.contains("digit")) {
    display.textContent += event.target.textContent;
  } else if (event.target.classList.contains("operator")) {
    display.textContent += event.target.textContent;
  } else if (event.target.classList.contains("clear")) {
    display.textContent = "";
  } else if (event.target.classList.contains("decimal")) {
    display.textContent += ".";
  } else if (event.target.classList.contains("equal")) {
    display.textContent = eval(display.textContent);
  }
});
