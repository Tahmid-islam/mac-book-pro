const memoryPrice = document.getElementById("memory-price");
const storagePrice = document.getElementById("storage-price");
const deliveryPrice = document.getElementById("delivery-price");
const totalPrice = document.getElementById("total-price");
const grandTotalPrice = document.getElementById("grand-total");
const promoInput = document.getElementById("promo-code");

//functions
//for get the Id
// function getId(Id) {
//   const input = document.getElementById(Id);
//   return input;
// }

document.getElementById("memory1").addEventListener("click", function () {
  memoryPrice.innerText = "0";
  updateTotal();
});
document.getElementById("memory2").addEventListener("click", function () {
  memoryPrice.innerText = "180";
  updateTotal();
});
document.getElementById("storage1").addEventListener("click", function () {
  storagePrice.innerText = "0";
  updateTotal();
});
document.getElementById("storage2").addEventListener("click", function () {
  storagePrice.innerText = "100";
  updateTotal();
});
document.getElementById("storage3").addEventListener("click", function () {
  storagePrice.innerText = "180";
  updateTotal();
});

document.getElementById("delivery1").addEventListener("click", function () {
  deliveryPrice.innerText = "0";
  updateTotal();
});
document.getElementById("delivery2").addEventListener("click", function () {
  deliveryPrice.innerText = "20";
  updateTotal();
});

function updateTotal() {
  let memory = parseInt(memoryPrice.innerText);
  let storage = parseInt(storagePrice.innerText);
  let delivery = parseInt(deliveryPrice.innerText);
  let total = 1299 + memory + storage + delivery;
  totalPrice.innerText = total;
  grandTotalPrice.innerText = total;
}

document.getElementById("promo-button").addEventListener("click", function () {
  let price = parseFloat(totalPrice.innerText);
  let discount = (20 / 100) * price;
  console.log(discount);
  if (promoInput.value.toLowerCase() == "stevekaku") {
    grandTotalPrice.innerText = price - discount;
    promoInput.value = "";
  }
});
