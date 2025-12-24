/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const LENGTH_FACTOR = 3.281;
const VOLUME_FACTOR = 0.264;
const MASS_FACTOR = 2.204;

const convertInput = document.getElementById('convert-input');
const convertButton = document.getElementById('convert-button');
const metersToFeetEl = document.getElementById('meters-value');
const feetToMetersEl = document.getElementById('feet-value');
const gallonsToLitersEl = document.getElementById('gallons-value');
const litersToGallonsEl = document.getElementById('liters-value');
const poundsToKilogramsEl = document.getElementById('pounds-value');
const kilogramsToPoundsEl = document.getElementById('kilograms-value');

function convertUnits() {
    const inputValue = convertInput.value;
    
    metersToFeetEl.textContent = `${inputValue} meters = ${(inputValue * LENGTH_FACTOR).toFixed(3)} feet`;
    feetToMetersEl.textContent = `${inputValue} feet = ${(inputValue / LENGTH_FACTOR).toFixed(3)} meters`;
    gallonsToLitersEl.textContent = `${inputValue} gallons = ${(inputValue * VOLUME_FACTOR).toFixed(3)} liters`;
    litersToGallonsEl.textContent = `${inputValue} liters = ${(inputValue / VOLUME_FACTOR).toFixed(3)} gallons`;
    poundsToKilogramsEl.textContent = `${inputValue} pounds = ${(inputValue / MASS_FACTOR).toFixed(3)} kilos`;
    kilogramsToPoundsEl.textContent = `${inputValue} kilos = ${(inputValue * MASS_FACTOR).toFixed(3)} pounds`;
}

convertButton.addEventListener('click', convertUnits);
convertInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        convertUnits();
    }
});