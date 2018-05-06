var $quantity = document.getElementById('quantity');
var $total = document.getElementById('total');
var $unitPrice = document.getElementById('unit-price');
var unitPrice = Number($unitPrice.dataset.unitPrice);

var maxQuantity = 100;

for (var i = 0; i < maxQuantity; i++) {
  var $option = document.createElement('option');

  var quantity = document.createTextNode((i + 1).toString());
  $option.appendChild(quantity);

  $quantity.appendChild($option);
}

$quantity.onchange = function() {
  $total.value = unitPrice * $quantity.value;
};

$quantity.onchange(null);

////
// Para todos los elementos, cuando haya un cambio de valor...
// Si la propiedad "onchange" es una funcion, ejecutarla.
// element.onchange( 1 );
//
