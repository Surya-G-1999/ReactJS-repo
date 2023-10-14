import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './technology_card.css'

export function Technology(){
    return(
        <>
           <div className="container-fluid"> 
              <h1 className="text-center mt-5">Learn 4.0 Technologies</h1>
              <p className="mt-4">Get trained by alumni of Ts and top companies like Amazon, Microsoft Intel Nvidia, Qualcomm, etc. Leam directly from professionals involved in Product Development</p>
              <div className=" row d-flex justify-content-evenly">
                <div className="col-lg-5 mt-3" id="data">
                           <h1>Data Scientist</h1>
                           <p>A data scientist uses data to understand and explain the phenomena around them, and help organizations make better decisions. Working as a data scientist can be intellectually challenging, analytically satisfying, and put you at the forefront of new advances in technology.</p>
                            <img src="https://www.dasca.org/Content/Images/main/industrial-data-scientist-the-new-limb-of-industrial-workforce.jpg" className="techimage"/>
                </div>
                <div className="col-lg-5 mt-3" id="iot">
                      <h1>IOT Developer</h1>
                      <p>IoT development is the process of developing IoT applications and products that can be controlled remotely and can be used to monitor the connected product's condition or environment via sensors and external data sources. Custom IoT Development is done to meet the specific requirements of a business.</p>
                      <img src="https://www.flexsin.com/images/iot_banner_img.png"  className="techimage" />
                </div>
              </div>
              <div className=" row mt-5 d-flex justify-content-evenly">
                <div className="col-lg-5 mt-3" id="vr">
                           <h1>VR Developer</h1>
                           <p>Virtual reality and augmented reality developers are the creative minds behind extended reality programs. The duties within the first few years in a position in either field typically include the designing, testing and developing of virtual or augmented reality software</p>
                            <img src="https://assets.website-files.com/6344c9cef89d6f2270a38908/64296efa2bc237ee0d089703_00%20VR%20Developers.webp"  className="techimage"/>
                </div>
                <div className="col-lg-5 mt-3" id="ml">
                      <h1>ML Engineer</h1>
                      <p>Machine Learning Engineers are highly skilled programmers who develop artificial intelligence (AI) systems that use large data sets to research, develop,</p>
                      <img src="https://www.springboard.com/blog/wp-content/uploads/2021/06/how-do-you-become-a-machine-learning-engineer.jpg"  className="techimage"/>
                </div>
              </div>

           </div>
        </>
    )
}