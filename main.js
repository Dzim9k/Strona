// Mobile device hamburger
hamburger = document.querySelector('.hamburger')

hamburger.onclick = function () {
	navBar = document.querySelector('.nav-bar')
	navBar.classList.toggle('active')

	let isactive = document.querySelector('.nav-bar.active')
	if (isactive) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'auto'
	}
}

// dropdown menu
dropdownMenu = document.querySelector('.nav-dropdown')
dropdownMenu.onclick = function () {
	dropdownContainer = document.querySelector('.nav-dropdown .dropdown')
	dropdownContainer.classList.toggle('dropdown-active')
}

// Zamykanie menu dropdown po kliknięciu gdziekolwiek na stronie
document.addEventListener('click', function (event) {
	var dropdownContainer = document.querySelector('.nav-dropdown .dropdown')
	if (dropdownContainer.classList.contains('dropdown-active') && !event.target.closest('.nav-dropdown')) {
		dropdownContainer.classList.remove('dropdown-active')
	}
})

//animacja about-us
document.addEventListener('DOMContentLoaded', event => {
	const observerOptions = {
		root: null, // obserwuje względem całego viewportu
		threshold: 0.1, // callback uruchomi się, gdy co najmniej 10% obserwowanego elementu znajdzie się w obszarze widzenia
	}

	const observerCallback = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible')
			} else {
				entry.target.classList.remove('visible')
			}
		})
	}

	const observer = new IntersectionObserver(observerCallback, observerOptions)

	// Dodaj obserwowanie dla .content-wrapper i .content-image
	document.querySelectorAll('.content-wrapper, .content-image').forEach(el => {
		observer.observe(el)
	})
})

document.querySelectorAll('.menu-category').forEach(button => {
	button.addEventListener('click', function () {
		// Usuwanie klasy 'active' z wszystkich przycisków
		document.querySelectorAll('.menu-category').forEach(btn => {
			btn.classList.remove('active')
		})
		// Dodanie klasy 'active' do klikniętego przycisku
		this.classList.add('active')
	})
})

function changeBackground(image, textColor) {
	document.body.style.backgroundImage = `url('${image}')`
	document.body.style.backgroundSize = 'cover' // Pokrycie całego tła obrazem
	document.body.style.color = textColor // Ustawienie koloru tekstu dla body

	// Ustawienie koloru tekstu dla przycisków w menuCategories
	var menuButtons = document.querySelectorAll('#menuCategories .menu-category')
	menuButtons.forEach(function (button) {
		button.style.color = textColor
	})
}
