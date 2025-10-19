import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoreCart, getStoreCart, removeFromCart } from '../../utility/localStorage';
import Cart from '../Cart/Cart';

const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);



    // useEffect
    useEffect(() => {
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles);

        const storedCart = [];

        for (const id of storedCartIds) {
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }
        setCart(storedCart);
        // console.log(storedCart);
    }, [bottles])




    const handleAddToCart = (bottle) => {
        console.log('Botthe will be added to the cart', bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);


        // save the bottle id in the storage
        addToStoreCart(bottle.id);
    }

    const handleRemoveFromCart = id => {
        console.log('remove', id);

        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromCart(id)
    }


    // console.log(bottles);
    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Added to cart: {cart.length}</p>

            <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
            ></Cart>
            <div className='bottle-container'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        handleAddToCart={handleAddToCart}
                        bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;