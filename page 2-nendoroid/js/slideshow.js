var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000);
}
var itemIndex = 0;
showitem();

function showitem() {
  var i;
  var items = document.getElementsByClassName("content1");
  for (i = 0; i < items.length; i++) {
    items[i].style.display = "none";  
  }
  itemIndex++;
  if (itemIndex > items.length) {itemIndex = 1}    
  items[itemIndex-1].style.display = "flex";  
  setTimeout(showitem, 2500);
}
