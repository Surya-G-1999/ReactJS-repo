import React from "react";
import './portfolio.css'

export function Skills(){

    return (
            <>
            <div className="container-fluid portfolioskills "  >
                <h2 className="text-center text-primary pt-3 skilltitle">SKILLS & PROJECTS</h2>
                     <div className="row  justify-content-evenly pt-5 ">
                        <div className=" col-lg-3 col-sm-12 text-center ">
                            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" className="skillimage col-6"/>
                            <h3 className="text-primary">HTML</h3>
                            <button type="button" class="btn btn-primary viewproject p-2 mt-3 fw-bold ">View Projects</button>
                        </div>

                        <div className=" col-lg-3 col-sm-12 text-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" className="skillimage col-6"/>
                            <h3 className="text-primary ">CSS</h3>
                            <button type="button" class="btn btn-primary viewproject p-2 mt-3 fw-bold ">View Projects</button>
                                
                        </div>

                        <div className=" col-lg-3 col-sm-12 pt-3 text-center">
                        <img src=" https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png" className="skillimage col-6"/>
                        <h3 className="text-primary">Bootstrap</h3>
                        <button type="button" class="btn btn-primary viewproject p-2 mt-4 fw-bold ">View Projects</button>
                      
                        </div>
                     </div>

                     <div className="row justify-content-evenly text-center pt-4">
                        <div className=" col-lg-3 col-sm-12">
                            <img src="https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png" className="skillimage col-6"/>
                            <h3 className="text-primary">JavaScript</h3>
                            <button type="button" class="btn btn-primary viewproject p-2 mt-3 fw-bold ">View Projects</button>

                        </div>

                        <div className=" col-lg-3 col-sm-12 text-center">
                            <img src="https://ww2.freelogovectors.net/wp-content/uploads/2023/02/react_logo-freelogovectors.net_.png" className="skillimage mt-5 col-6"/>
                            <h3 className="text-primary mt-3">ReactJS</h3>
                            <button type="button" class="btn btn-primary viewproject p-2 mt-4 fw-bold ">View Projects</button>
                                
                        </div>

                        <div className=" col-lg-3 col-sm-12 text-center">
                        <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" className="skillimage col-6"/>
                        <h3 className="text-primary">Github</h3>
                        <a href="https://github.com/Surya-G-1999" type="button" class="btn btn-primary viewproject p-2 mt-3 fw-bold ">Git LINK</a>
                        
                        </div>
                     </div>

            </div>
            </>
    );
}