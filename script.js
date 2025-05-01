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

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    count++;
    updateDisplay();
  }
});




// const students = [
//    { name: "fahad", scores: [75, 80, 95] },
  //  { name: "areeb", scores: [78, 88, 74] },
   // { name: "shizz", scores: [69, 25, 85] },
   /////// { name: "azhar", scores: [55, 50, 45] },
  //];