import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'; 
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]); 

    const handleAddProduct =(product) =>{
        console.log('Product added', product);  
        const newCart = [...cart, product];
        setCart(newCart);

    }


    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        products.map(product => <Product 
                        handleAddProduct = {handleAddProduct} 
                        product={product}>

                        </Product>) 
                    }
               
            </div>
            <div className="cart-container">
                <h2>this is cart</h2>
                <h5>order summery: {cart.length}</h5>  
            </div>
        </div>
    );
};

export default Shop;  