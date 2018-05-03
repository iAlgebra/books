var $quantity = document.getElementById('quantity');

var maxQuantity = 100;

for (var i = 0; i < maxQuantity; i++) {
  var $option = document.createElement('option');

  var quantity = document.createTextNode((i+1).toString());
  $option.appendChild(quantity);

  $quantity.appendChild($option);
}
