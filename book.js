var $quantity = document.getElementById('quantity');
var $subtotal = document.getElementById('subtotal');
var $unitPrice = document.getElementById('unit-price');
var unitPrice = Number($unitPrice.dataset.unitPrice);
var $shippingCheckbox = document.getElementById('shipping-checkbox');
var $shipping = document.getElementById('shipping');
var intShippingPrice = Number($shipping.dataset.intShipping);
var baseShippingPrice = Number($shipping.dataset.baseShipping);
var $total = document.getElementById('total');

var maxQuantity = Number($quantity.dataset.maxQuantity);

for (var i = 0; i < maxQuantity; i++) {
  var $option = document.createElement('option');

  var quantity = document.createTextNode((i + 1).toString());
  $option.appendChild(quantity);

  $quantity.appendChild($option);
}

$quantity.onchange = function() {
  $subtotal.value = unitPrice * $quantity.value;
  $total.value = Number($subtotal.value) + Number($shipping.value);
};

$quantity.onchange(null);

$shippingCheckbox.onclick = function() {
  if ($shippingCheckbox.checked) {
    $shipping.value = intShippingPrice;
  } else {
    $shipping.value = baseShippingPrice;
  }
  $total.value = Number($subtotal.value) + Number($shipping.value);
};

$total.value = Number($subtotal.value) + Number($shipping.value);
