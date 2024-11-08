import React from "react";

export default function productItem (props){
    return(
        <>
             {/* <div className="col-12 col-sm-12 col-md-6 col-lg-4  mt-2 productItem"> */}
             <div className="col productItem mb-4">

                <div className='productPhoto w-100 bg-dark-subtle'><img src={props.imgURL} className="img-fluid" alt={props.productName}/></div>
                <div className='productInfo d-flex justify-content-between position-relative flex-wrap py-2'>
                <div className='productName text-start'>{props.productName} </div>
                <div className='productCounter'></div>
                <div className='productPrice'>{props.productPrice} </div>
                </div>
              </div>

        </>
    )
}