import React from "react";
import './congrats_card.css'
import 'bootstrap/dist/css/bootstrap.css'

export function Congratscard(){
    return(
        <>
           <div className="card " id="card" > 
                <h1 className="text-center">Congratulation</h1>
                <div className="bg-info  text-center mt-3 col-lg-4 mx-auto">
                     <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" className="mt-4"/>
                     <h2>KIRAN</h2>
                     <p>Vishnu Institute of Computer Education and Technology. Bhimavaram</p>
                     <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" className="mt-4 mb-4"/>
                </div>
           </div>
        </>
    )
}