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
