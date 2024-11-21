import React from "react";
import { useCart } from "./CartStore";

export default function ShoppingCart(){


const {getCart,getCartTotal,modifyQty,deleteCartItem}= useCart();
const cart  = getCart();

return(
    <>
    <div className="container mt-4">
        <h2>Shopping Cart</h2>
        {
            cart.length === 0 ? (<p>Your Cart is Empty</p>):(
                    <>

                    <ul className="list-group">
                      {cart.map((item) => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                          <div className="row">
                            <div>
                            <h5>{item.productName}</h5>
                            <button className="btn btn-sm btn-secondary me-2" onClick={()=>modifyQty(item.product_id, item.quantity-1)}>-</button>
                            <p>Quantity: {item.quantity}</p>
                            <button className="btn btn-sm btn-secondary me-2" onClick={()=>modifyQty(item.product_id, item.quantity+1)}>+</button>
                            <button className="btn btn-sm btn-danger" onClick={()=>deleteCartItem(item.product_id)}>delete</button>
                            </div>
                          </div>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 text-end">
                      <h4>Total: ${getCartTotal()}</h4>
                    </div>
                  </> 
                )
        }

    </div>
    </>
)
}