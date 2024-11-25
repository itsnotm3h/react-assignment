import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import Catergories from './Catergories';
import { Product } from "./Product";

import axios from 'axios';


export default function ProductPage() {

    const [products, setProducts] = useState([]);
    const {getTag} = Product();
    const currentTag = getTag();



    //use effect to load the data. 
    useEffect(() => {

        const loadData = async () => {
            //load the json file from the public folder. All static asset will be relative to public
            // therefore there is no need to put in full directory to file. 
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`+ currentTag);
            setProducts(response.data);
        }

        loadData();

    }, [currentTag]);
    //must detect that there is a change with the values in []


    return (
        <div className="row h-100">
            <Catergories />
            <div className="col-12 col-sm-10">
                <section className="pt-5 container">
                    <div className="sectionTitle bebas-Neue">All Products</div>
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 m-auto">
                        {products.map(product =>
                            <div className="col-12 col-md-4 col-lg-3">
                                {/* naming convention needs to be the same as json otherwise it will not work */}
                                <ProductItem
                                    productName={product.name}
                                    price={product.price}
                                    imgURL={product.imageURL}
                                    id={product.id}
                                    description={product.description}
                                />
                            </div>
                        )}

                    </div>
                </section>
            </div>

        </div>
    )
}