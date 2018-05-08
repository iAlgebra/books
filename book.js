var $quantity = document.getElementById('quantity');
var $subtotal = document.getElementById('subtotal');
var $unitPrice = document.getElementById('unit-price');
var unitPrice = Number($unitPrice.dataset.unitPrice);
var $shippingCheckbox = document.getElementById('shipping-checkbox');
var $shipping = document.getElementById('shipping');
var intShippingPrice = Number($shipping.dataset.intShipping);
var baseShippingPrice = Number($shipping.dataset.baseShipping);
var $total = document.getElementById('total');
var decimalPlaces = 2;

var maxQuantity = Number($quantity.dataset.maxQuantity);

//Creating the 'Options' within the 'Select'
for (var i = 0; i < maxQuantity; i++) {
  var $option = document.createElement('option');

  var quantity = document.createTextNode((i + 1).toString());
  $option.appendChild(quantity);

  $quantity.appendChild($option);
}

//For when 'Select' changes (choosing the quantity of books)
$quantity.onchange = function() {
  $subtotal.value = (unitPrice * Number($quantity.value)).toFixed(
      decimalPlaces,
  );

  updateTotalValue();
};

//Forcing a change in the 'Select' so Subtotal and Total are populated
$quantity.onchange(null);

//Toggling International Shipping
$shippingCheckbox.onclick = function() {
  if ($shippingCheckbox.checked) {
    $shipping.value = intShippingPrice;
  } else {
    $shipping.value = baseShippingPrice;
  }
  updateTotalValue();
};

//Forcing a click on the checkbox so 'Shipping' is populated with '0' on load
$shippingCheckbox.onclick(null);

function updateTotalValue() {
  $total.value = (Number($subtotal.value) + Number($shipping.value)).toFixed(
      decimalPlaces,
  );
}
