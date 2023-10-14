import React from "react";
import './feedback.css'
import { Link } from "react-router-dom";

export function Feedback(){
    return(
        <>
           <div className="container-fluid" id="feed">
              <div className="d-flex justify-content-center pt-5">
                     <div className="col-7 bg-light mt-5 p-5" id="feedback">
                      <h3 className="text-center">How Satisfied are you with our customer support performance?</h3>
                         <div className="row mt-5 ">
                           <div className="col-4 d-flex justify-content-center">
                         <Link to='/FEED'>   <img src="https://www.muraldecal.com/en/img/aspemoj44-jpg/folder/products-listado-merchanthover/stickers-sad-face-crying.jpg" className="w-50"/> </Link>
                          </div>
                          <div className="col-4 d-flex justify-content-center">
                          <Link to='/FEED'>    <img src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/expressionless-face.png" className="w-50"/> </Link>
                          </div>
                            <div className="col-4 d-flex justify-content-center">
                            <Link to='/FEED'>  <img src="https://i.pinimg.com/474x/ff/a4/e8/ffa4e8161253da3663b143158806a2d7--happy-smile-emojis.jpg" className="w-50"/> </Link>

                            </div>
                            </div>
                        
                   </div>
               </div>
                      
           </div>
        </>
    );
}