import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom"; 
export function Jsonassign(){
    const[productcard,setProductcard]= useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then(dataspro=>setProductcard(dataspro))
    } )
    return(
        <>
            <div className="container-fluid  row">
                  {
                    productcard.map((value,index)=>(
           <>
            <div class="card col-lg-4  mt-5 text-center jsonborder " >
            <div class=" text-center">
               <Link to={`/products/${value.id}`}><img src={value.image} class="card-img-top jsonimg "/> </Link> 
                     </div>
                     <div class="card-body text-center bg-danger">
                       <h5 class="card-title">{value.title}</h5>
                       {/* <p class="card-text ">{value.description}</p> */}
                     <div>
                       <StarRatings rating={value.rating.rate} starRatedColor="yellow" />
                      </div>
                       <Link to={`/products/${value.id}`} class="btn btn-primary">view</Link>
                     </div>
                   </div>
           </>
                     ) )
                    
                  }[]
            </div>
        </>
    );
}
