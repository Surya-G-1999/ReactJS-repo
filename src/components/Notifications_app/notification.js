import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './notification.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck,faBell,faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
export function Notification(){
    return(
        <>
        <div className="container-fluid col-lg-6 ">
            
            <div className="h text-center " id="div">
                <h1>Notification</h1></div>
            <div className="bg-primary  mt-4 " id="div">
                <p className=" p-3">  <FontAwesomeIcon icon={faCircleCheck} /> {'\n'}Information Message</p></div>
            <div className="bg-success  mt-4" id="div"> 
            <p className=" p-3">     <FontAwesomeIcon icon={faCircleCheck} /> {'\n'}Success Message</p></div>
            <div className="bg-warning mt-4" id="div"> 
         
            <p className=" p-3">    <FontAwesomeIcon icon={faBell} /> {'\n'}Warning Message</p></div>
            <div className="bg-danger mt-4" id="div">
           
             <p className=" p-3">  <FontAwesomeIcon icon={faCircleExclamation} /> {'\n'}Error Message</p></div>
        </div>

        </>
    )
}