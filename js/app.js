// for get the id
function getId(Id) {
  return document.getElementById(Id);
}
// update total price
function updateTotal() {
  let memory = parseFloat(getId("memory-price").innerText);
  let storage = parseFloat(getId("storage-price").innerText);
  let delivery = parseFloat(getId("delivery-price").innerText);
  let total = 1299 + memory + storage + delivery;
  getId("total-price").innerText = total;
  getId("grand-total-price").innerText = total;
}
// on click function for every button
function update(Id, price) {
  document.getElementById(Id + "-price").innerText = price;
  updateTotal();
}
// promo button functionality
document.getElementById("promo-button").addEventListener("click", function () {
  let price = parseFloat(getId("total-price").innerText);
  let discount = (20 / 100) * price;
  console.log(discount);
  if (getId("promo-code").value.toLowerCase() == "stevekaku") {
    getId("grand-total-price").innerText = price - discount;
    getId("promo-code").value = "";
  }
});
