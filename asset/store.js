// Update the price of cart based on the Quantity of items
const quantityChanged = (event) => {
    const input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    } 
    updateCartTotal();
}

const ready = () => {
    // For loop for removing item from cart
    const removeCartItemButton = document.getElementsByClassName('far fa-times-circle');

    for (i = 0; i < removeCartItemButton.length; i++) {
        let button = removeCartItemButton[i];
        button.addEventListener('click', (event) => {
            event.target.parentElement.parentElement.parentElement.remove();
            updateCartTotal();
        })
    }
    // Get the number of items that the product has in the cart
    const quantityInputs = document.getElementsByClassName('cart-quan-input');
    for (let i = 0; i < quantityInputs.length; i++) {
        const input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
}

// Check if Dom is loaded so no errors appear
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

// Function for updating the cart total
let updateCartTotal = () => {
    const cartItemContainer = document.getElementsByClassName('cart-items')[0];
    const cartRows = cartItemContainer.getElementsByClassName('cart-row');
    let total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];
        const priceElement = cartRow.getElementsByClassName('cart-price')[0];
        const quantityElement = cartRow.getElementsByClassName('cart-quan-input')[0];
        const price = parseFloat(priceElement.innerText.replace('$', ""));
        const quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    document.getElementById('total-price').innerText = '$' + total;
    document.getElementById('cart-subtotal').innerText = '$' + total;
}

const sendProduct = () => {

}

// 22:30 on video