var xhr = new XMLHttpRequest();
xhr.open('GET', 'books.json');
xhr.send(null); // starts to execute the request.

xhr.onreadystatechange = function() {
  var CLIENT_DONE = 4; // readyState 4 means the request is done.
  var SERVER_OK = 200; // status 200 is a successful return.
  if (xhr.readyState === CLIENT_DONE) {
    if (xhr.status === SERVER_OK) {
      // response is an array of books.
      var response = JSON.parse(xhr.responseText);
      createLibraryHtml(response);
    }
  }
};

var bookLinks = document.getElementsByClassName('btn-primary');

function comingSoon() {
  alert('Coming Soon!');
}

bookLinks.forEach(function(bookLink) {
  bookLink.onclick = comingSoon;
});

// create the Book's Library, books is an array of books.
function createLibraryHtml(books) {
  // for each book in the response of "books", create the book in HTML.
  books.forEach(function(myBook) {
    createBookHtml(myBook);
  });
}

function createBookHtml(book) {
  // search the book's title.
  var title = book.title;
  //=================================================
  // search the book's image.
  var imageUrl = book.image;
  //=================================================
  // search the book's description.
  var description = book.description;
  //=================================================
  // create the div class 'column col-4'.
  var $divColumn = document.createElement('div');
  // add to that div the class 'column col-4'.
  $divColumn.className = 'column col-4';
  // find its father in the html doc.
  var $columns = document.getElementById('columns');
  // add the div to its father.
  $columns.appendChild($divColumn);
  //===================================================
  // create the div class 'card'.
  var $divCard = document.createElement('div');
  // add to that div the class 'card'.
  $divCard.className = 'card';
  // add the div to its father.
  $divColumn.appendChild($divCard);
  //====================================================
  // create the div class 'card-image'.
  var $divCardImg = document.createElement('div');
  // add to that div the class 'card-image'.
  $divCardImg.className = 'card-image';
  // add the div to its father.
  $divCard.appendChild($divCardImg);
  //===================================================
  // create the image class 'img-responsive'.
  var $img = document.createElement('img');
  // add to that div the class 'img-responsive'.
  $img.className = 'img-responsive';
  // add to that div the source attribute (from jason).
  $img.setAttribute('src', imageUrl); // what's wrong with 2nd parameter?
  // add to that div the alt attribute (from jason).
  $img.setAttribute('alt', 'Cover of the book: ' + title);
  // add the div to its father.
  $divCardImg.appendChild($img);
  //======================================================
  // create the div class 'card-header'.
  var $cardHeader = document.createElement('div');
  // add to that div the class 'card-header'.
  $cardHeader.className = 'card-header';
  // add the div to its father.
  $divCard.appendChild($cardHeader);
  //=======================================================
  // create the div class 'card-title h5'.
  var $cardTitle = document.createElement('div');
  // add to that div the class 'card-title h5'.
  $cardTitle.className = 'card-title h5';
  // create content for that div, meaning add its title (from jason).
  $cardTitle.innerText = title;
  // add the div to its father.
  $cardHeader.appendChild($cardTitle);
  //========================================================
  // create the div class 'card-subtitle text-gray'.
  var $cardSubtitle = document.createElement('div');
  // add to that div the class 'card-subtitle text-gray'.
  $cardSubtitle.className = 'card-subtitle text-gray';

  // create content for that div, meaning add its authors (from jason).
  book.authors.forEach(function(author) { // what's wrong with authors?
    var fullName = author.name + ' ' + author.surname; // what's wrong with surname?
    $cardSubtitle.innerText = $cardSubtitle.innerText.concat(
        fullName.concat(', '));
  });

  $cardSubtitle.innerText = $cardSubtitle.innerText.slice(0, -2);

  // add the div to its father.
  $cardHeader.appendChild($cardSubtitle);
  //========================================================
  // create the div class 'card-body'.
  var $cardBody = document.createElement('div');
  // add to that div the class 'card-body'.
  $cardBody.className = 'card-body';
  // create content for that div, meaning add its description (from jason).
  $cardBody.innerText = description;
  // add the div to its father.
  $divCard.appendChild($cardBody);
  //==========================================================
  // create the div class 'card-footer'.
  var $cardFooter = document.createElement('div');
  // add to that div the class 'card-footer'.
  $cardFooter.className = 'card-footer';
  // add the div to its father.
  $divCard.appendChild($cardFooter);
  //==========================================================
  // create the anchor class 'btn btn-primary'
  var $button = document.createElement('a');
  // add to that a the class 'btn btn-primary'.
  $button.className = 'btn btn-primary';
  // add to that a the href attribute.
  $button.setAttribute('href', '#cards');
  // create content for that a (the text of the button).
  $button.innerText = 'View';
  // add the div to its father.
  $cardFooter.appendChild($button);
}
