import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import Catergories from './Catergories';
import axios from 'axios';


export default function ProductPage() {

    const [products, setProducts] = useState([]);


    //use effect to load the data. 
    useEffect(() => {

        const loadData = async () => {
            //load the json file from the public folder. All static asset will be relative to public
            // therefore there is no need to put in full directory to file. 
            const response = await axios.get("products.json");
            setProducts(response.data);
        }

        loadData();

    }, []);


    return (

        <div className="row h-100">
            <Catergories />
            <div className="col-12 col-sm-10">
                <section className="p-5">
                    <div className="sectionTitle bebas-Neue">Popular Dreams</div>
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                        {products.map(product =>
                            <div className="col-12 col-md-4 col-lg-3">
                                {/* naming convention needs to be the same as json otherwise it will not work */}
                                <ProductItem
                                    productName={product.name}
                                    price={product.price}
                                    imgURL={product.image}
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