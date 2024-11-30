// Function to calculate the wind chill in °C
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Selecting the wind chill cell in the table
const windChillCell = document.querySelector('.weather table tr:nth-child(4) td:nth-child(2)');

// Variables for temperature and wind speed (example values)
const temperature = 30; // °C
const windSpeed = 8; // km/h

// Calculate wind chill
const windChill = calculateWindChill(temperature, windSpeed);

// Display the wind chill value in the table, rounded to 1 decimal place
if (windChillCell) {
    windChillCell.textContent = `${windChill.toFixed(1)} °C`;
}



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