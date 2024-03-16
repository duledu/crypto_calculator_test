function calculateCryptoPrice() {
    const cryptoName = document.getElementById('cryptoName').value;
    const currentPrice = parseFloat(document.getElementById('currentPrice').value);
    const priceChange24h = parseFloat(document.getElementById('priceChange24h').value);

    // Assuming a steady rate of change over the next 24 hours
    const hourlyPriceChangeRate = (1 + priceChange24h / 100) ** (1/24);

    // Output the current price
    document.getElementById('result').innerText = `${cryptoName} - Current Price: $${currentPrice.toFixed(4)}`;

    // Calculate and display future prices at 2, 4, 6, 8, 12, and 24 hours
    const futurePricesContainer = document.getElementById('futurePrices');
    futurePricesContainer.innerHTML = `<h3>${cryptoName} - Future Prices:</h3>`;

    // Hours to predict future prices for
    const hours = [2, 4, 6, 8, 12, 24];
    hours.forEach(hour => {
        const futurePrice = currentPrice * hourlyPriceChangeRate ** hour;
        futurePricesContainer.innerHTML += `<div>In ${hour} hours: $${futurePrice.toFixed(4)}</div>`;
    });
}

// Call this function when you want to perform the calculation, such as on a button click.
