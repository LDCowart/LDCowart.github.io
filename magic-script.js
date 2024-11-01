let currencies = [
    { name: 'FluffyCoin', value: 100 },
    { name: 'SparkleDollars', value: 150 },
    { name: 'DreamBucks', value: 200 }
];

function displayCurrencies() {
    const currencyList = document.getElementById('currency-list');
    currencyList.innerHTML = ''; // Clear existing list
    currencies.forEach(currency => {
        const div = document.createElement('div');
        div.className = 'currency';
        div.innerHTML = `
            ${currency.name}: $${currency.value} 
            <button onclick="buyCurrency('${currency.name}')">Buy</button> 
            <button onclick="sellCurrency('${currency.name}')">Sell</button>
        `;
        currencyList.appendChild(div);
    });
}

function updateCurrencyValues() {
    currencies.forEach(currency => {
        currency.value = Math.floor(Math.random() * 300) + 50; // Random value between 50 and 350
    });
    displayCurrencies();
}

setInterval(updateCurrencyValues, 5000); // Update every 5 seconds

function buyCurrency(currencyName) {
    const user = getCurrentUser();
    if (user) {
        user.balance += currencies.find(c => c.name === currencyName).value;
        updateLeaderboard();
        alert(`Bought ${currencyName}! Your new balance is $${user.balance}`);
    }
}

function sellCurrency(currencyName) {
    const user = getCurrentUser();
    if (user) {
        user.balance -= currencies.find(c => c.name === currencyName)?.value || 0;
        updateLeaderboard();
        alert(`Sold ${currencyName}! Your new balance is $${user.balance}`);
    }
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

// Call the function to display currencies on load
displayCurrencies();
