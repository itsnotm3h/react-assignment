import { useState } from 'react'
import Navbar from './Navbar';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import RegisterPage from './RegisterPage';


import {Route, Switch} from 'wouter';



function App() {
  return (
    <>
    <Navbar />
    <Switch>
    <Route path="/" component={HomePage}/>
    <Route path="/products" component={ProductsPage}/>
    <Route path="/register" component={RegisterPage}/>

    </Switch>

    </>
  )
}

export default App
