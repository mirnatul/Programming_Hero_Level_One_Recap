/**
 * to get something from local storage
 * get it as string
 * convert this to js object/array
 */

const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartToLocalStorage = cart => {
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

const addItemToCartLocalStorage = id => {
    const cart = getCartFromLocalStorage();
    // cart.push(id);
    const newCart = [...cart, id];

    // save new cart to the local storage
    saveCartToLocalStorage(newCart)
}

const removeFromLocalStorage = id => {
    const storedCart = getCartFromLocalStorage();
    const remainingCart = storedCart.filter(storedId => storedId !== id);
    saveCartToLocalStorage(remainingCart);
}

export {
    getCartFromLocalStorage as getStoreCart,
    addItemToCartLocalStorage as addToStoreCart,
    removeFromLocalStorage as removeFromCart
}