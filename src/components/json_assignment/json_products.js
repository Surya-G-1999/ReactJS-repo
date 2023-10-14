import { Button } from "bootstrap";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Jsonproduct(){
          const[product,setProduct]=useState([])
          var {id}=useParams()
          useEffect(()=>{
            fetch('https://fakestoreapi.com/products/' +id)
            .then(response=>response.json())
            .then(file=>setProduct(file))
          })
    return(
            <>
               <div class="  row text-center mt-5 " >
                   <div class=" text-center col-lg-6">
                      <img src={product.image} class="container-fluid jsonimg " /> 
                    
                    </div>
                       <div class=" col-lg-6 text-center p-5 mt-5 ">
                         <h3 >{product.title}</h3>
                         <h2>{product.category}</h2>
                         <p class=" ">{product.description}</p>

                         <button className="bg-success pe-3 ps-3 fw-5">BUY</button>
                         <h2 className="mt-4 text-danger"> Rate:{product.price}</h2>

                      
                        </div>
                </div>
            </>
    );
}