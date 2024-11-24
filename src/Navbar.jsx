import React , { useState, useEffect }from "react";
import {Link, useLocation } from 'wouter';


export default function Navbar() {

    const [location] = useLocation();
    // console.log(location);


    // this is conditional rendering;
    const isActiveLink = (url) =>{
        if (location == url)
        {
            return "nav-link active";
        }
        else{
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
            <nav className="navbar navbar-expand-lg navbar-light border-bottom">
                <div className="d-flex w-100 px-3 ">
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
                                <Link className={`nav-link ${location == "/" ? "active" : "" }`} aria-current="page" href="/">Home</Link >
                            </li>
                            <li className="nav-item">
                                <Link className={isActiveLink("/products")} href="/products">Products</Link >
                            </li>
                            <li className="nav-item">
                                <Link className={isActiveLink("/register")}href="/register">Register</Link >
                            </li>

                            <li className="nav-item">
                                <Link className={isActiveLink("/login")}href="/login">Login</Link >
                            </li>
                            <li className="nav-item">
                                <Link className={isActiveLink("/cart")} href="/cart">Cart</Link >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )

}