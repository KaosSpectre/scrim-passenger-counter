let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");
let count = 0;
let countTotal = 0;
// let total = countTotal;

function increment1() {
	count += 1;
	countTotal += 1;
	countEl.textContent = count;
}
function increment5() {
	count += 5;
	countTotal += 5;
	countEl.textContent = count;
}
function increment10() {
	count += 10;
	countTotal += 10;
	countEl.textContent = count;
}

function save() {
	let countStr = count + " - ";
	saveEl.textContent += countStr;
	totalEl.textContent = "Total: " + countTotal;
	countEl.textContent = 0;
	count = 0;
}

function reset() {
	saveEl.textContent = "Previous entries: ";
	countEl.textContent = 0;
	totalEl.textContent = "Total: 0";
	count = 0;
	countTotal = 0;
}
