 // Mobile device hamburger
 hamburger = document.querySelector(".hamburger");

 hamburger.onclick = function() {
     navBar = document.querySelector(".nav-bar");
     navBar.classList.toggle("active");
     
     let isactive = document.querySelector(".nav-bar.active");
     if (isactive) {
         document.body.style.overflow = 'hidden';
     }
     else {
         document.body.style.overflow = 'auto';
     }
 }

 // dropdown menu
 dropdownMenu = document.querySelector(".nav-dropdown");
 dropdownMenu.onclick = function() {
     dropdownContainer = document.querySelector(".nav-dropdown .dropdown");
     dropdownContainer.classList.toggle("dropdown-active"); 
 }

 
// Zamykanie menu dropdown po kliknięciu gdziekolwiek na stronie
document.addEventListener('click', function(event) {
 var dropdownContainer = document.querySelector('.nav-dropdown .dropdown');
 if (dropdownContainer.classList.contains('dropdown-active') && !event.target.closest('.nav-dropdown')) {
     dropdownContainer.classList.remove('dropdown-active');
 }
});


// zmiana zdjęć na stronie
 const image1 = document.querySelector('.image1');
 const image2 = document.querySelector('.image2');

 // Zdefiniuj tablicę z linkami do kolejnych zdjęć
 const images = ['./img/DJI_1920.png', './img/karczma1920.png'];
 let currentImage = 0;

 // Funkcja do zmiany zdjęcia co 5 sekund
 function changeImage() {
     currentImage = (currentImage + 1) % images.length;
     image1.src = images[currentImage];
     setTimeout(changeImage, 5000);
 }

 // Uruchom funkcję po załadowaniu strony
 window.addEventListener('load', changeImage);

 const menuSection = document.querySelectorAll('.menu-korytko')
 const menuTabs = document.querySelectorAll('.menu-tab')

 const showInfo = id => {

     menuSection.forEach(section => section.style.display = 'none')
     menuTabs.forEach(tab => tab.classList.remove('menu-tab-active'))

     document.getElementById(id).style.display = 'block'

     const currentActiveButton = document.querySelector('[data-id=${id}]')

     currentActiveButton.classList.add('menu-tab-active')
 }