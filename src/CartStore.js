import {atom, useAtom} from 'jotai';
import Immutable from "seamless-immutable";

const initialCart = Immutable([]);

export const cartAtom = atom(initialCart);

//custom hook for the cart operation
export const useCart = ()=>{

//this is somewhat like useState;
const [cart,setCart] = useAtom(cartAtom);


//function to calculate the cart price.
const getCartTotal =()=>{
    return cart.reduce((total,item)=> total +(item.price * item.quantity),0).toFixed(2);
};


const addToCart = (product)=>{
    //setCart refers to the stat from the atom. 
    //currentCart is just a parameter to represent and array in the current state. 
    setCart((currentCart)=>
    {
        //check if the existing item added to cart existing in the cart. 
        const inCartID = currentCart.findIndex(item => item.product_id === product.id);

        // if != -1 means is does exist. 
        if(inCartID !== -1)
        {
            const currentQuantity = currentCart[inCartID].quantity;
            return currentCart.setIn([inCartID,'quantity'],currentQuantity+1)
        }
        else{
            //if does not exist it will add into the currentCart Array. 
            //concat is another method for push. 
            return currentCart.concat({...product, product_id: product.id,quantity:1})
        }
    })
}

const modifyQty = (product_id,quantity)=>{

    setCart((currentCart)=>{
        const inCartID = currentCart.findIndex(item => item.product_id === product_id);
        
        if(inCartID !== -1)
        {
            if(quantity < 0)
            {
                //this is to remove the item and that is zero and the currentCart is updated to only have the item that is left. 
                return currentCart.filter(item=>item.product_id !== product_id);
            }
            else{
                //setin the currentCart Array via index and its key and update the qty.
                return currentCart.setIn([inCartID,"quantity"],quantity);
            }
        }
    })
}


const deleteCartItem = (product_id)=>{
    setCart((currentCart)=>{
    return currentCart.filter(item => item.product_id !== product_id);
    }); 
}


const setCartData = (cartItems)=>{
    setCart(Immutable(cartItems));
}

//to use in other componenet when imported

return{
    cart,
    getCartTotal,
    addToCart,
    modifyQty,
    deleteCartItem,
    setCartData
};

};