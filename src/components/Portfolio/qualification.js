import React from "react";

export function Qualification(){

    return(
        <>
        <div className="container-fluid  p-5  portfoliqualification"   >
            <h1 className=" fs-2 fw-bold text-primary text-center">QUALIFICATION</h1>
            
            <div className="row mt-5 justify-content-evenly">
                <div className="col-md-12 col-lg-3 qualificationhover   ">
                <h4 className="text-white text-center mt-3">NATIONAL COLLEGE,<br/>TRICHY</h4> mt-3
                <h5 className="text-white text-center "> Bachelor of science in Mathematics  </h5>
                <h5 className="text-white text-center mt-3"> 2016-2019  </h5>
                <h5 class="text-center text-primary mt-3"> CGPA : 7  </h5> 
                </div>
                <div className="col-md-12 col-lg-3 qualificationhover ">
                <h4 className="text-white text-center mt-3">SET Vidhyadevi.school,<br/>Pattukkottai</h4>
                <h5 className="text-white text-center mt-5"> HSC  </h5>
                <h5 className="text-white text-center mt-3"> 2014-2016  </h5>
                <h5 class="text-center text-primary mt-3"> Percentage : 69 %  </h5>
                </div>
                <div className="col-md-12 col-lg-3 qualificationhover ">
                <h4 className="text-white text-center mt-3">MUVENDHAR.hr.sec.school,<br/> Peravurani</h4>
                <h5 className="text-white text-center mt-5"> SSLC  </h5>
                <h5 className="text-white text-center mt-3"> 2011-2016  </h5>
                <h5 class="text-center text-primary mt-3"> Percentage : 82 %  </h5>
                </div>
            </div>
        </div>
        </>
    );
}