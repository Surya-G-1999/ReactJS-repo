import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './super_over.css'

export function Superover(){
    return(
        <>
        <div className="over">
            <div className="head text-center p-5 ">
              <h1 className="text-light ">Super Over League</h1>
           
                <div >
                    <img src="https://assets.ccbp.in/frontend/react-js/rcb-img.png" className="col-lg-4 col-12 "/>
                    <img src="https://assets.ccbp.in/frontend/react-js/csk-img.png" className="col-lg-4 col-12 "/>
                </div>
            </div>
        </div>
        </>
    )
}