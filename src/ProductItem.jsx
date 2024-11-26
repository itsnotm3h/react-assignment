import React from "react";
import {useCart} from './CartStore';
import {useLocation} from 'wouter';
import {useNotification} from './useNotification';

export default function productItem (props){

    const {addToCart} = useCart();
    const [,setLocation] = useLocation();
    const {showNotification} = useNotification();

    const handleAddToCart = (item)=>{
        console.log(item);
        addToCart(props);
        showNotification("item added to cart!","success",item);
        setLocation('/cart');
    }

    return(
        <>
             <div className="col productItem mb-4 position-relative">

                <div className='productPhoto w-100 bg-dark-subtle' style={{ backgroundImage: `url(${props.imgURL}`,backgroundSize: 'cover',backgroundPosition:'center' }}>
                    </div>
                    {/* <div className="position-absolute top-0 p-3"><small>{props.description}</small></div> */}

                <div className='productInfo d-flex justify-content-between position-relative flex-wrap p-3 position-absolute bottom-0'>
                <div className="w-100 h-25 d-flex">
                <div className='productName text-start col-10'>{props.productName} </div>
                {/* <div className='productCounter'></div> */}
                <div className='productPrice text-end'>${props.price}</div>
                </div>
                <button className="btn btn-primary" onClick={() => handleAddToCart(props.imgURL)}>Add To Cart</button>
                </div>
              </div>

        </>
    )
}