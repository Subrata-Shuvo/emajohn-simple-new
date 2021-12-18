import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    console.log(props);
    const {name, img, price, stock, seller} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='product'>
            <div>
            <img src={img} alt="" />
            </div>
            
            <div className='cart'>
            <h4 className='product-name'>{name}</h4>
            <h5>Price : {price}</h5>
            <h6>By : {seller}</h6>
            <p><small>Only {stock} remaining, Order Soon!!</small></p>

            <button 
            onClick={()=>props.handleAddToCart(props.product)}
            className='cart-btn' >{element}  add to cart</button>
            </div>

        </div>
    );
};

export default Product;