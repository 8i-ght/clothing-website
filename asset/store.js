const removeCartItemButton = document.getElementsByClassName('far fa-times-circle');

console.log(removeCartItemButton);

for (i = 0; i < removeCartItemButton.length; i++) {
    let button = removeCartItemButton[i];
    button.addEventListener('click', (event) => {
          event.target.parentElement.parentElement.parentElement.remove();
          updateCartTotal();
    })
}

let updateCartTotal = () => {
    const cartItemContainer = document.getElementsByClassName('cart-items')[0];
    const cartRows = cartItemContainer.getElementsByClassName('cart-row');
    for (var i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];
        const priceElement = cartRow.getElementsByClassName('cart-price')[0];
        const quantityElement = cartRow.getElementsByClassName('cart-quan-input')[0];
        const price = parseFloat(priceElement.innerText.replace('$', ""));
        const quantity = quantityElement.value;
        console.log(price * quantity);
    } 
}

