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
//druk
document.addEventListener('DOMContentLoaded', function () {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]')
	const summaryElement = document.getElementById('summary')

	// Aktualizacja kwoty i pogrubienie tekstu
	checkboxes.forEach(checkbox => {
		checkbox.addEventListener('change', function () {
			updateSummary()
			toggleBold(this)
		})
	})

	function updateSummary() {
		let total = 0
		// Sumowanie wybranych pozycji
		checkboxes.forEach(checkbox => {
			if (checkbox.checked) {
				total += parseFloat(checkbox.value)
			}
		})

		// Aktualizacja kwoty do zapłaty
		summaryElement.textContent = `Do zapłaty: ${total}zł`
	}

	function toggleBold(checkbox) {
		if (checkbox.checked) {
			checkbox.parentElement.style.fontWeight = 'bold'
		} else {
			checkbox.parentElement.style.fontWeight = 'normal'
		}
	}

	window.printSummary = function () {
		// Tworzenie nowego iframe, który nie jest dołączony do DOM
		const selectedDate = document.getElementById('eventDate').value
		const printFrame = document.createElement('iframe')
		printFrame.style.visibility = 'hidden'
		document.body.appendChild(printFrame)

		// Pobranie dokumentu iframe
		const printDocument = printFrame.contentWindow.document

		// Przygotowanie treści do wydruku
		const contentToPrint = `
        <h1>Podsumowanie zamówienia</h1>
        <p>Data wydarzenia: ${selectedDate}</p>
        <div>${document.getElementById('selectedItemsList').innerHTML}</div>
        <p>${document.getElementById('totalPrice').textContent}</p>
		`

		// Wypełnianie dokumentu iframe zawartością i dodawanie podstawowych stylów
		printDocument.write('<html><head><title>Podsumowanie zamówienia</title></head><body>')
		printDocument.write(contentToPrint)
		printDocument.write('</body></html>')
		printDocument.close()

		// Dodawanie podstawowych stylów do treści, która ma być wydrukowana
		const styles = printDocument.createElement('style')
		styles.type = 'text/css'
		styles.innerHTML = `
			body { font-family: Arial, sans-serif; }
			h1 { color: #333; }
			div, p { margin-bottom: 10px; }
		`
		printDocument.head.appendChild(styles)

		// Wydrukowanie zawartości iframe i usunięcie go po zakończeniu
		printFrame.contentWindow.onafterprint = function () {
			document.body.removeChild(printFrame)
		}
		printFrame.contentWindow.print()
	}
})

document.addEventListener('DOMContentLoaded', function () {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]')
	const selectedItemsList = document.getElementById('selectedItemsList')

	const totalPriceElement = document.getElementById('totalPrice')

	checkboxes.forEach(checkbox => {
		checkbox.addEventListener('change', function () {
			updateSelectedItems()
			updateTotalPrice()
		})
	})

	function updateSelectedItems() {
		selectedItemsList.innerHTML = '' // Czyszczenie listy
		const itemsByCategory = {}

		checkboxes.forEach(checkbox => {
			if (checkbox.checked) {
				const category = checkbox.getAttribute('data-category')
				const itemText = checkbox.getAttribute('data-name')
				if (!itemsByCategory[category]) {
					itemsByCategory[category] = []
				}
				itemsByCategory[category].push(itemText)
			}
		})

		// Tworzenie listy pozycji z podziałem na kategorie
		for (const [category, items] of Object.entries(itemsByCategory)) {
			const categoryDiv = document.createElement('div')
			categoryDiv.innerHTML = `<strong>${category}:</strong>`
			items.forEach(item => {
				const itemDiv = document.createElement('div')
				itemDiv.textContent = item
				categoryDiv.appendChild(itemDiv)
			})
			selectedItemsList.appendChild(categoryDiv)
		}
	}

	function updateTotalPrice() {
		let total = 0
		checkboxes.forEach(checkbox => {
			if (checkbox.checked) {
				total += parseFloat(checkbox.value)
			}
		})
		totalPriceElement.textContent = `Suma: ${total}zł`
	}
})
