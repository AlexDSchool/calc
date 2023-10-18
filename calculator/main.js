// Simple addition calculator

//btn even t listner
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  //input
  let num1 = +document.getElementById("num1in").value;
  let num2 = +document.getElementById("num2in").value;
  let num3 = +document.getElementById("num3in").value;
  //process
  let total = (num1 + num2 + num3) / 2;
  let answer = Math.sqrt(
    total * (total - num1) * (total - num2) * (total - num3)
  );
  //output
  document.getElementById("output").innerHTML = answer;
}
