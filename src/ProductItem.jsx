import React from "react";
import {useCart} from './CartStore';
import {useLocation} from 'wouter';
import {useNotification} from './useNotification';

export default function productItem (props){

    const {addToCart} = useCart();
    const [,setLocation] = useLocation();
    const {showNotification} = useNotification();

    const handleAddToCart = ()=>{
        addToCart(props);
        showNotification("item added to cart!","success");
        setLocation('/cart');
    }

    return(
        <>
             <div className="col productItem mb-4">

                <div className='productPhoto w-100 bg-dark-subtle'><img src={props.imgURL} className="img-fluid m-auto" alt={props.productName}/></div>
                <div className='productInfo d-flex justify-content-between position-relative flex-wrap py-2'>
                <div className='productName text-start'>{props.productName} </div>
                <div className='productCounter'></div>
                <div className='productPrice'>{props.productPrice} </div>
                <button className="btn btn-primary" onClick={handleAddToCart}>Add To Cart</button>
                </div>
              </div>

        </>
    )
}