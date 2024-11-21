import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import RegisterPage from './RegisterPage';
import ShoppingCart from './ShoppingCart';

import { useNotification } from './useNotification';
import { useCart } from './CartStore';

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
      <div className={`alert alert-${notification.type} text-center flash-alert`} role="alert">${notification.message}</div>
    )}
    <Switch>
    <Route path="/" component={HomePage}/>
    <Route path="/products" component={ProductsPage}/>
    <Route path="/register" component={RegisterPage}/>
    <Route path="/cart" component={ShoppingCart}/>


    </Switch>

    </>
  )
}

export default App
