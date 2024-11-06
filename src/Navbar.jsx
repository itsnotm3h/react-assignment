import React from 'react';
import { Link, useLocation } from 'wouter';


export default function Navbar() {


    return (
        <div className="container-fluid postion-relative">
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div class="container">
                    <Link class="navbar-brand" href="#">E-Shop</Link >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="/">Home</Link >
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="/products">Products</Link >
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="/register">Register</Link >
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="/cart">Cart</Link >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )

}