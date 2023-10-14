import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import github from "./github.png"
import linkedin from "./linkedin.png"

export function Contact(){

    return(
        <>
        <div class="container-fluid text-center  contactportpolio "  >
  <div class="row align-items-center">
    <div class="col mt-2">
      <h4 className="fs-4 fw-bold textpc text-primary"> <FontAwesomeIcon icon={faMapLocationDot} /> ADDRESS</h4>
      <h4 className="text-white">Anavayal</h4>
      <h4 className="text-white">Pudukkottai</h4>
      <h4 className="text-white">622304</h4>

    </div>
    <div class="col mt-5">
    <h4 className="fs-4 fw-bold textpc text-primary"> <FontAwesomeIcon icon={faMapLocationDot} /> Social Media LINKS</h4>
      <h4 className=""> <a href="https://github.com/Surya-G-1999"> <img src={github} className="imgpcon  linkbox"/> </a> </h4>
      <h4 className=""> <a href="https://www.linkedin.com/in/surya-ganesh-a3a1751bb/"> <img src={linkedin} className="imgpcon linkbox"/> </a></h4>
    
      
    </div>
    <div class="col mb-4 ">
    <h4 className="fs-4 fw-bold textpc text-primary"> <FontAwesomeIcon icon={faMapLocationDot} /> Contact</h4>
      <h4 className="text-white"> <FontAwesomeIcon icon={faEnvelope} className="linkbox"/> <a href="mailto:suryaganesh449@gmail.com" className="text-white"> suryaganesh449@gmail.com </a> </h4>
      <h4 className="text-white"> <FontAwesomeIcon icon={faPhone} className="linkbox"/> <a href="tel:8760733449" className="text-white"> 8760733449 </a> </h4> 
    </div>
  </div>
</div>
        </>
    );
}