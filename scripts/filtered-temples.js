// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/

const yearElement = document.querySelector("#currentYear");
const currentYear = new Date().getFullYear();

// This creates a copyright symbol element
const copyrightSymbol = document.createTextNode("© ");

// This adds the copyright symbol and year to the span element
yearElement.appendChild(copyrightSymbol);
yearElement.appendChild(document.createTextNode(currentYear));


const today = new Date();
const dayElement = document.querySelector("#lastModified");

dayElement.innerHTML = `Last modification: <span class="highlight">${new Intl.DateTimeFormat("en-US", {
	dateStyle: "full"
}).format(today)}</span>`;


const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
	{
		templeName: "Asuncion, Paraguay",
		location: "Asuncion, Paraguay",
		dedicated: "2002, May, 19",
		area: 11906,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-6969-main.jpg"
	},

	{
		templeName: "Port-au-prince, Haiti",
		location: "Port-au-prince, Haiti",
		dedicated: "2019, September, 1",
		area: 10396,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/port-au-prince-haiti-temple/port-au-prince-haiti-temple-6222-main.jpg"
	},

	{
		templeName: "San Salvador, El Salvador",
		location: "San Salvador, El Salvador",
		dedicated: "2011, August, 21",
		area: 27986,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/_temp/135-San-Salvador-El-Salvador-Temple.jpg"
	},

];

createTempleCard(temples);
const pageHeading = document.querySelector('#pageHeading'); 
document.querySelector('#home').addEventListener('click', () => {
	pageHeading.textContent = 'Temples';
	createTempleCard(temples); 
  });


const oldLink = document.querySelector('#old');
oldLink.addEventListener('click', () => {
	pageHeading.textContent = 'Old temples';
	createTempleCard(temples.filter(temple => {
		const yearString = temple.dedicated.slice(0, 4); // Extract "YYYY"
		return yearString < "1900"; // String comparison works because "1899" < "1900"
	})
	);
});

const newLink = document.querySelector('#new');
newLink.addEventListener('click', () => {
	pageHeading.textContent = 'New temples';
	createTempleCard(temples.filter(temple => {
		const year = parseInt(temple.dedicated.split(",")[0], 10);
		return year > 2000;
	})
	);
});


const largeLink = document.querySelector('#large');
largeLink.addEventListener('click', () => {
	pageHeading.textContent = 'Larger temples';
	createTempleCard(temples.filter(temple => temple.area > 90000));
});

const smallLink = document.querySelector('#small');
smallLink.addEventListener('click', () => {
	pageHeading.textContent = 'Smaller temples';
	createTempleCard(temples.filter(temple => temple.area < 10000));
});

//const homeButton = document.querySelector('#home');
//homeButton.addEventListener('click', () => {
//	createTempleCard(temples);
//});

function createTempleCard(filteredTemples) {
	document.querySelector('.container').innerHTML = '';
	filteredTemples.forEach(temple => {
		let card = document.createElement('section');
		let name = document.createElement('h3');
		let location = document.createElement("p");
		let dedication = document.createElement('p');
		let area = document.createElement('p');
		let img = document.createElement('img');

		name.textContent = temple.templeName;
		location.innerHTML = `<span class='label'>Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class='label'>Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class='label'>Size:</span> ${temple.area} sq ft`;
		img.setAttribute('src', temple.imageUrl);
		img.setAttribute('alt', `${temple.templeName} Temple`);
		img.setAttribute('loadig', 'lazy');

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector('.container').appendChild(card);
	});
}

