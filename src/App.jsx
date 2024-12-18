import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import RegisterPage from './RegisterPage';
import ShoppingCart from './ShoppingCart';
import Login from './Login';


import { useNotification } from './useNotification';
// import { useCart } from './CartStore';

import {Route, Switch} from 'wouter';



function App() {

  const {getNotification, clearNotification} = useNotification();
  const notification = getNotification();


  // setting timer for the notification. 
  useEffect(()=>{

    //when timeout, it will execute the clearNotification function.
    const timer = setTimeout(()=>{
      clearNotification();
    },3000);

    return()=>{
      clearTimeout(timer);
    }

  },[notification])
  
  return (
    <>
    <Navbar />
    {notification.message && (
      <div className={`alert alert-${notification.type} text-center flash-alert container`} role="alert"><div className='d-flex w-100 justify-content-center'>{notification.imageUrl && <div style={{ backgroundImage: `url(${notification.imageUrl}`,backgroundSize: 'cover',backgroundPosition:'center' , width:'80px',height:'80px'}}></div>}
      <div className='ps-2 align-self-center'>{notification.message}</div></div></div>
    )}
    <Switch>
    <Route path="/" component={HomePage}/>
    <Route path="/products" component={ProductsPage}/>
    <Route path="/register" component={RegisterPage}/>
    <Route path="/login" component={Login}/>
    <Route path="/cart" component={ShoppingCart}/>


    </Switch>

    </>
  )
}

export default App
