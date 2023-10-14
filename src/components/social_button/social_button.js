import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './social_button.css'
export function Socialbutton(){
    return(
        <>
        <div className="cont ">
          <div className=" text-center p-5  " id="div1">
            <h1 className="text-light">Social Buttons</h1>
             <div className="mt-5 ">
              <button type="button" class="btn btn-warning me-4">Like</button>
              <button type="button" class="btn btn-light  me-4">Comment</button>
             <button type="button" class="btn btn-primary  me-4">Share</button>
             </div>      
          </div>
        </div>
        </>
    )
}