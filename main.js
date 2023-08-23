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
 const images = ['./img/altanatest.png', './img/karczmatest.png'];
 let currentImage = 0;

 // Funkcja do zmiany zdjęcia co 5 sekund
 function changeImage() {
     currentImage = (currentImage + 1) % images.length;
     image1.src = images[currentImage];
     setTimeout(changeImage, 5000);
 }

 // Uruchom funkcję po załadowaniu strony
 window.addEventListener('load', changeImage);

 
 //Wymiana zdjęć
 
 function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  //Wymiana tekstu w sekcji menu
  const menuSection = document.querySelectorAll('.restaurant-menu')
  const menuTabs = document.querySelectorAll('.menu-tab')
  
  const showInfo = id => {
    const selectedSection = document.getElementById(id);
    
    if (selectedSection.style.display === 'flex') {
      selectedSection.style.display = 'none';
    } else {
      menuSection.forEach(section => section.style.display = 'none');
      selectedSection.style.display = 'flex';
    }
  }

  // Funkcja do zamykania aktualnie otwartej sekcji menu
const zamknijAktualneMenu = () => {
  const otwartaSekcja = document.querySelector('.restaurant-menu[style*="display: flex"]');
  
  if (otwartaSekcja) {
    otwartaSekcja.style.display = 'none';
  }
};

// Funkcja do przewinięcia na górę strony
const przewinNaGórę = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

 
  
  
  
  
  

  
 



 
 
 
 
 