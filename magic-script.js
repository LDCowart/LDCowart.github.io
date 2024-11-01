// Example "magic" currency data
let currencies = [
    { name: 'FluffyCoin', value: 100 },
    { name: 'SparkleDollars', value: 150 },
    { name: 'DreamBucks', value: 200 }
];

// Function to display currencies
function displayCurrencies() {
    const currencyList = document.getElementById('currency-list');
    currencyList.innerHTML = ''; // Clear existing list
    currencies.forEach(currency => {
        const div = document.createElement('div');
        div.className = 'currency';
        div.innerHTML = `${currency.name}: $${currency.value}`;
        currencyList.appendChild(div);
    });
}

// Call the function to display currencies
displayCurrencies();

// Function to update currency values
function updateCurrencyValues() {
    currencies.forEach(currency => {
        currency.value = Math.floor(Math.random() * 300) + 50; // Random value between 50 and 350
    });
    displayCurrencies();
}

setInterval(updateCurrencyValues, 5000); // Update every 5 seconds
