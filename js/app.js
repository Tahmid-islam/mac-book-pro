// function for get element for specific id
function getElement(Id) {
  return document.getElementById(Id);
}
// function update total price
function updateTotal() {
  let memoryCost = parseFloat(getElement("memory-price").innerText);
  let storageCost = parseFloat(getElement("storage-price").innerText);
  let deliveryCost = parseFloat(getElement("delivery-price").innerText);
  let total = 1299 + memoryCost + storageCost + deliveryCost; /* total price sum */
  getElement("total-price").innerText = total;
  getElement("grand-total-price").innerText = total;
}
// on click function for every price-id button
function updatePrice(Id, price) {
  getElement(Id + "-price").innerText = price;
  updateTotal();
}
// promo button functionality
getElement("promo-button").addEventListener("click", function () {
  let price = parseFloat(getElement("total-price").innerText);
  let discount = price * (20 / 100); /* 20% discount added */
  if (getElement("promo-code").value.toLowerCase() == "stevekaku") {
    getElement("grand-total-price").innerText = price - discount;
    getElement("promo-code").value = "";
  }
});
