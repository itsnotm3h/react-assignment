import React, { useEffect,useState,useRef } from "react";
import { useCart } from "./CartStore";
import { useJwt } from './UserStore';
import axios from 'axios';

const ShoppingCart = () => {

const {cart,getCartTotal,modifyQty,deleteCartItem,setCartData}= useCart();
const {getJwt} = useJwt();
const [isUpdate, setUpdate] = useState(false);
const firstUpdate = useRef(true);

const fetchCart = async () => {
  const jwt = getJwt();

  try{
    const response = await axios.get(import.meta.env.VITE_API_URL + '/api/cart',{
      headers:{
        Authorization:`Bearer ${jwt}`
      }
    });

    // console.log(`cart:`, response.data);
    setCartData(response.data);
  }
  catch(error)
  {
    console.error('Error Fetching cart:', error);
  }
}

useEffect(()=>{
  fetchCart();
},[])

const updateCart = async ()=>{
  setUpdate(true);
  const jwt = getJwt();
  try{
    //setting up the data to be sent to the api to update. 
    const updateCart = cart.map((item)=>({
      product_id:item.product_id,
      quantity:item.quantity
    }));

    await axios.put(import.meta.env.VITE_API_URL + '/api/cart',{cartItems: updateCart},{
      headers:{
        Authorization:`Bearer ${jwt}`
      }
    })
  }
  catch(error)
  {
    console.error("Error Updating Cart:", error)
  }
  finally{
    setUpdate(false);
  }
}

useEffect (()=>
{
  if(firstUpdate.current)
  {
    firstUpdate.current = false;
    return;
  }

  updateCart();
  return ()=>{console.log("clean Effect"),[cart]}
},[cart]);


return(
    <>
    <div className="container mt-5">
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
                            <button className="btn btn-sm btn-secondary me-2" onClick={()=>modifyQty(item.product_id, item.quantity-1)} disabled={isUpdate}>-</button>
                            <p>Quantity: {item.quantity}</p>
                            <button className="btn btn-sm btn-secondary me-2" onClick={()=>modifyQty(item.product_id, item.quantity+1)} disabled={isUpdate}>+</button>
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

export default ShoppingCart;
