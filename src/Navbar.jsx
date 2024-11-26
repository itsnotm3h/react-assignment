import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'wouter';
import { useJwt } from "./UserStore";
import { useCart } from "./CartStore";
import {useNotification} from './useNotification';
import { Product } from "./LoadProduct";

import axios from 'axios';



export default function Navbar() {

    const {setTag} = Product();
    const { setJwt, getJwt } = useJwt();
    const checkJWT = getJwt();
    const { setCartData } = useCart();


    const [location,setLocation] = useLocation();
    const {showNotification} = useNotification();

    

    // this is conditional rendering;
    const isthereJWT = (item) => {
        if (item == "null" || item == undefined || item == "") {
            return false;
        }
        else {
            return true;
        }
    }

    const logoutBtn = async () => {
        try {

            const thisJwt = getJwt();

            console.log(thisJwt);

            //error with the post command. 
            // const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/logout`, "", {
            //     headers: {
            //         Authorization: `Bearer` + thisJwt
            //     },
            // });


            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/users/logout`,
                {}, 
                {
                  headers: {
                    Authorization: `Bearer ${thisJwt}`, 
                  },
                }
              );


            if (response.data) {
                setJwt(null);
                setCartData(null);

                localStorage.removeItem('jwt');
                showNotification("You have logged out!","success","");
                setLocation("/");

            }

        }
        catch (error) {
            console.log("Error from navbar:" + error);
        }
    }

    // Conditional rendering function
    // const isthereJWT = (item) => {
    //     return item !== "null" ? "Login" : "Logout";
    // };

    // this is conditional rendering;
    const isActiveLink = (url) => {
        if (location == url) {
            return "nav-link active";
        }
        else {
            return "nav-link";
        }
    }

    // its not sync iin mobile form
    //somethiing happen outside of react us call side effect. 
    // need to set up an effect
    const clickButton = () => {
        setNB(!isNBopen);
    }


    const [isNBopen, setNB] = useState(false);

    //Create effect to detact broswer size. 
    // 1. import use effect
    // 2. when the componenet is in the dom it will use Effect. 

    useEffect(() => {

        const synNavbar = () => {
            if (window.innerWidth > 992) {
                setNB(true);
            }
            else {
                setNB(false);
            }
        }

        window.addEventListener("resize", synNavbar);


        return () => {
            window.removeEventListener("resize", synNavbar);
        }

    }, []);

    return (
        
        <div className="container-fluid postion-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div className="container ">
                    <Link className="navbar-brand" href="#">E-Shop</Link >
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={clickButton}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNBopen ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className={`nav-link ${location == "/" ? "active" : ""}`} aria-current="page" href="/">Home</Link >
                            </li>
                            <li className="nav-item">
                                <Link className={isActiveLink("/products")} href="/products" onClick={()=>{setTag("/")}}>Products</Link >
                            </li>
                            <li className="nav-item">
                                <Link className={isActiveLink("/cart")} href="/cart">Cart</Link >
                            </li>

                            {isthereJWT(checkJWT) ? (
                                <>
                                    <li className="nav-item">
                                        <Link className={isActiveLink("/logout")} onClick={() => { logoutBtn() }}>Logout</Link >
                                    </li>
                                </>
                            ) : (<>
                                <li className="nav-item">
                                    <Link className={isActiveLink("/register")} href="/register">Register</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className={isActiveLink("/login")} href="/login">Login</Link >
                                </li>
                            </>
                            )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )

}