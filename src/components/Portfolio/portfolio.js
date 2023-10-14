import React  from "react";
import { Link } from "react-router-dom";
import './portfolio.css'
import { useTypewriter , Cursor} from "react-simple-typewriter";




export function Portfolio(){
            const [text]=useTypewriter({words:['Developer','Designer'],
            loop:{},
            typeSpeed:300,
            deleteSpeed:100
          })
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light pe-5 ps-5 NABcolor" >
  <div class="container-fluid">
    <a class="navbar-brand port text-primary" href="#">Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto ">
        <li class="nav-item">
          <Link to="/portfolio/home"  class="nav-link text-primary" id="PortTEXT"  href="#">HOME</Link>
        </li>
        <li class="nav-item">
          <Link to="/portfolio/qualification"  class="nav-link text-primary" id="PortTEXT"   href="#">QUALIFICATION</Link>        
        </li>
        <li class="nav-item">
          <Link to="/portfolio/skills"  class="nav-link text-primary" id="PortTEXT"   href="#">SKILLS</Link>        
        </li>
        <li class="nav-item">
          <Link to="/portfolio/contact"  class="nav-link text-primary" id="PortTEXT"   href="#">CONTACT</Link>        
        </li>
        <li class="nav-item">
          <Link to="/portfolio/certificates"  class="nav-link text-primary" id="PortTEXT"   href="#">CERTIFICATES</Link>        
        </li> 
       
       
       
      </ul>
     
    </div>
  </div>
</nav>

<div class="container-fluid " id="portfoliohome">
  <div className="row">
    <div className="col-md-12 col-lg-6 ">
      <h2 className="fw-bold p-5 ms-5">
              
              <h1 className="text-white">HI</h1><spam className="text-white">I'am</spam> <h1 className="text-primary">SURYA</h1><spam className="text-white">Web</spam>{" "}
              <span class="text-primary">{text}</span>{" "}
              <span>
                <Cursor cursorStyle="|" />
              </span>
            </h2>
         </div>
          <div className="col-md-12 col-lg-6 mt-5 text-center">
            <h2 className=" fs-2 fw-bold text-primary">About Us</h2>
                      <p className="fs-5 aboutus text-white">A passionate and self-motivated front-end developer 
          with a strong foundation in HTML, CSS, JavaScript, and 
          Bootstrap. Experienced in creating responsive and user-
          friendly web pages using React. Seeking to join a dynamic 
          and innovative team as a junior front-end developer.</p>
          </div>
               <div className="text-center pb-4">
                <a href='https://drive.google.com/file/d/1JFv_rWP6P54lXjQCVW83T2yufafPBaXE/view?usp=sharing' download="SuryaResume.pdf" className=" btn bg-primary fs-5 text-white  ">DOWNLOAD CV</a>
                </div>

          </div>

          </div>



        </>
    );
}

