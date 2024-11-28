import React from 'react';
import { Product } from "./LoadProduct";
import { useLocation } from 'wouter';


export default function HomePage() {
    const { setTag } = Product();
    const [location, setLocation] = useLocation();


    const goToProduct = (item) => {
        setTag(item);
        setLocation("/products");
    };

    return (
        <>
            {/* <h1> This is for my homepage</h1> */}
            <div className="container mainVisual m-auto p-5">
                <div className="row h-100 w-100">
                    <div className="col-7 h-100 bg-light mainIMG d-flex" onClick={() => {
                        goToProduct("?series=RBC");

                    }}><h1 className='m-auto align-self-center' >Rustic Bloom</h1></div>
                    <div className="col-5 p-0">
                        <div className="d-flex flex-wrap h-100 w-100">
                            <div className="col-12 bg-light py-2 mx-2 sub1 d-flex" onClick={() => {
                                goToProduct("?series=EA");

                            }}><h2 className='m-auto align-self-center'  >Earth & Ash</h2></div>
                            <div className="col-12 bg-light py-2 mx-2 mt-2 sub2 d-flex opacity-50"><h2 className='m-auto align-self-center text-white' disabled>Coming Soon</h2></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
