import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import RegisterPage from './RegisterPage';
import { useNotification } from './showNotification';


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



  },[useNotification])
  
  return (
    <>
    <Navbar />
    {flashMessage.message && (
      <div className={`alert alert-`}></div>
    )
    }
    <Switch>
    <Route path="/" component={HomePage}/>
    <Route path="/products" component={ProductsPage}/>
    <Route path="/register" component={RegisterPage}/>

    </Switch>

    </>
  )
}

export default App
