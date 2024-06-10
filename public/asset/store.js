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
    }d
    // Get the quantity of items that the product has in the cart
    const quantityInputs = document.getElementsByClassName('cart-quan-input');
    for (let i = 0; i < quantityInputs.length; i++) {
        const input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
}

 // Button for adding items to cart
 const addToCart = document.getElementsByClassName('send-button');
    addToCart.addEvenListener('click', () => {
        const product = {
            name: product,
            price: price,
            image: imageSrc
        };
        cartInv = JSON.parse(localStorage.getItem('cartInv')) || [];
        cartInv.push(product);
        localStorage.setItem('cartInv', JSON.stringify(cartInv));
    })
//  for (let i = 0; i < addToCart.length; i++) {
//      const button = addToCart[i];
//      button.addEventListener('imageSrcclick', addToCartClicked);
//  }

// Function for adding items to cart
const addToCartClicked = (event) => {
    const button = event.target;
    const shopItem = button.parentElement;
    const shopImg = button.parentElement.parentElement;
    const product = shopItem.querySelector('.product-name').innerText;
    const price = shopItem.querySelector('.shop-price').innerText;
    const imageSrc = shopImg.querySelector('.shop-image').src;
    console.log(product, price, imageSrc);
    addItemToCart(product, price, imageSrc);
}



// Check if Dom is loaded so no errors appear
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

addItemToCart = (product, price, imageSrc) => {
    const cartRow = document.createElement('div');
    cartRow.innerText = product;
    const cartItems = document.getElementsByClassName('cart-items')[0];
    cartItems.append(cartRow);                  
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
        const quantity = quantityElement.querySelector('input').value;
        total = total + (price * quantity);
    }
    total = (Math.round(total * 100) / 100).toFixed(2);
    const cartPrice = document.getElementById   
    ('total-price').innerText = '$' + total;
    const cartSubtotal = document.getElementById('cart-subtotal').innerText = '$' + total;
}

// video 30:42