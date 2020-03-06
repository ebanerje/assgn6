
function totalPrice() {
	var totalPrice = document.getElementById("totalPriceVal");
	totalPrice.innerText = 3*document.getElementById("quantity").value;
}

function addToCounter() {
	var counterVal = document.getElementById("counter");
	counterVal.innerText = document.getElementById("quantity").value;
}
