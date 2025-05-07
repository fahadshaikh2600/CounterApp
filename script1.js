const counter = document.getElementById("display");
const incrementBtn = document.querySelector("#add-button");
const decrementBtn = document.querySelector("#minus-button");
const resetBtn = document.querySelector("#reset-button");

let count = 0;

function update() {
  counter.value = count;
}
incrementBtn.addEventListener("click", function () {
  count++;
  update();
});
decrementBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
  }
  update();
});
resetBtn.addEventListener("click", function () {
  count = 0;
  update();
});