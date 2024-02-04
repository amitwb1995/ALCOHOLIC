const mlSelect = document.getElementById('ml-select');
const priceDisplay = document.getElementById('price');

mlSelect.addEventListener('change', function () {
    const selectedML = this.value;
    // You can set different prices based on the selected ML
    let price;
    switch (selectedML) {
        case '250':
            price = 19.99;
            break;
        case '500':
            price = 29.99;
            break;
        case '750':
            price = 39.99;
            break;
        default:
            price = 19.99;
    }
    priceDisplay.textContent = `Price: $${price.toFixed(2)}`;
});




function callForOrder(phoneNumber) {
    window.location.href = 'tel:' +918759864456;
}
