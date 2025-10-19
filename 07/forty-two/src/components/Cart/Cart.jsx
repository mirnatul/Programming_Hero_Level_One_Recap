import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h1>Cart item</h1>
            <div className='cart-container'>
                {
                    cart.map(bottle => <div className='cart' key={bottle.id}>
                        <img src={bottle.img}></img>
                        <button onClick={() => handleRemoveFromCart(bottle.id)}>X</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;