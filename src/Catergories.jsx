import React ,{useEffect} from "react";
import { Product } from "./Product";


export default function Catergories (){

    const {setTag} = Product();

    const clickTag = (item) => {
        setTag(item);
    }


    return(         
         <>
        <div className="col-12 col-sm-2 border-end">
        <div className="d-flex flex-wrap w-100 sticky-lg-top pt-5">
        <div className="col-10 m-auto categoryBtn pb-2" onClick={() => clickTag("/")}>All</div>
            <div className="col-10 m-auto categoryBtn pb-2" onClick={() => clickTag("?series=RBC")}>Rustic Bloom</div>

            <div className="col-10 m-auto categoryBtn pb-2" onClick={() => clickTag("?series=EA")}>Earth & Ash</div>
        </div>
    </div>
    </>
    )
}