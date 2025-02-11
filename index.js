//document.getElementById("count-el").innerText = 5
//ctrl +k+c to convert everything to comments
//initialise the count as zero
//listen for clicks on the button
// incredment the count variable when the button is clicked
// change the count el
//camelCase
//fix image later on
let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
  count = count + 1;
  countEl.innerText = count;
}
function save() {
  console.log(count);
}
