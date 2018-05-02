var bookLinks = document.getElementsByClassName("btn-primary");

function comingSoon() {
    alert("Coming Soon!");
}

for(var i = 0; i < bookLinks.length; i++) {
    bookLinks[i].onclick = comingSoon;
}
