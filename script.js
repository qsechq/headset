let hamburger  = document.querySelector('.hamburger ');
let overlay = document.querySelector('.overlay');
let links = document.querySelectorAll('.nav__link');

links.forEach(function(element){
  element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
  hamburger.classList.toggle('hamburger--active');
  overlay.classList.toggle('overlay--active');
}

hamburger.addEventListener('click' , toggleMenu);