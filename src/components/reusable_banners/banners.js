import React from "react";
import './banners.css'
import { Link } from "react-router-dom";

export function Banners(){
    return(
        <>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav fs-5 fw-bold NAV ">
       
        <li class="nav-link"><Link to='/'>Home</Link></li>
        <li class="nav-link"><Link to='/noti'>Notification</Link></li>
        <li class="nav-link"><Link to='/card'>card</Link></li>
        <li class="nav-link"><Link to='/tech'>Technology</Link></li>
        <li class="nav-link"><Link to='/social'>Socialbutton</Link></li>
        <li class="nav-link"><Link to='/super'>Superover</Link></li>
        <li class="nav-link"><Link to='/login'>Login</Link></li>
        <li class="nav-link"><Link to='/FEED'>Feedback</Link></li>
        <li class="nav-link"><Link to='/counter'>Counter</Link></li>
        <li class="nav-link"><Link to='/fruitcounter'>Fruit_Counter</Link></li>
        <li class="nav-link"><Link to='/datefunction'>Date</Link></li>
        <li class="nav-link"><Link to='/jsonfile'>Json File</Link></li>
        <li class="nav-link"><Link to='/portfolio'>Portfolio</Link></li>



       
        <li class="nav-link"><Link to='/demo'>Demo</Link></li>

      </div>
    </div>
  </div>
</nav>

         

 
        </>
    );
}