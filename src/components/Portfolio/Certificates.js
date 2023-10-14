import React from "react";
import htmlimage from './HTML 5 Coursera in michigan-page-001.jpg'
import cssimage from './Coursera css3 at michigan.jpg'


export function Certificates(){

    return(
            <>
            <div class="container-fluid  text-center certificatebg pb-5"  >
                
               <div className="row justify-content-evenly">
                 <h1 className="text-primary mt-5 fs-2 fw-bold ">CERTIFICATES</h1>
                  <div className=" col-lg-4 col-sm-4 mt-5 certificatebox">
                          <div  className=" "> 
                                <img src={htmlimage} class=" mt-3 certificateimage" alt="..."/>
                          </div>
                          <div className="mt-3 "> 
                            <h3 className="text-primary" >Introductio to HTML</h3>
                            <h4 className="text-white" >Coursera</h4>
                          </div>
                  </div>
                  <div className=" col-lg-4 col-sm-4 mt-5 certificatebox">
                       <div  className=" "> 
                                <img src={cssimage} class=" mt-3 certificateimage" alt="..."/>
                          </div>
                          <div className="mt-3"> 
                            <h3 className="text-primary" >Introductio to CSS3</h3>
                            <h4 className="text-white" >Coursera</h4>
                          </div> 
                  </div>
               </div>
                
           </div>
            </>
    );
}





