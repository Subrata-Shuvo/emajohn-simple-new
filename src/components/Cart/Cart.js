import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }

    const shipping = 15;
    const tax = (total + shipping) *5;
    const grandTotal = shipping + tax + total;

    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Ordered : {props.cart.length}</h4>
            <br />
            <p>Total : {total.toFixed(2)}</p>
            <p>Shipping : {shipping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <p>Grand Total : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;