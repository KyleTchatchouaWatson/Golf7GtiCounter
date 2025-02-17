//document.getElementById("count-el").innerText = 5
//ctrl +k+c to convert everything to comments
//initialise the count as zero
//listen for clicks on the button
// incredment the count variable when the button is clicked
// change the count el
//camelCase
//fix image later on
let countEl = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
let count = 0;
function increment() {
  count = count + 1;
  countEl.innerText = count;
}
function save() {
  let countStr = count + " -";
  saveEL.textContent += countStr;
  countEl.innerText = 0;
  count = 0;
}
