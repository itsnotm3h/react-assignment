import React from 'react';
import ProductItem from './ProductItem';
import Catergories from './Catergories';

export default function ProductPage() {
    return (

        <div className="row h-100">
            <Catergories />
            <div className="col-12 col-sm-10">
                <section className="p-5">
                    <div className="sectionTitle bebas-Neue">Popular Dreams</div>
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">

                        <ProductItem productName="product1" productPrice="$10.00" />
                        <ProductItem productName="product2" productPrice="$10.00" />
                        <ProductItem productName="product3" productPrice="$10.00" />

                        <ProductItem productName="product1" productPrice="$10.00" />
                        <ProductItem productName="product2" productPrice="$10.00" />
                        <ProductItem productName="product3" productPrice="$10.00" />

                    </div>
                </section>
            </div>

        </div>
    )
}