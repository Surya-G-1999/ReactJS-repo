
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css'
import './login_design.css'
export function Login() {
    return (
        <>
            <div className="container-fluid p-5" id="logbg" >
                <div className="container p-5 bg-white conta">
                    <div className="d-grid">
                        <div className="row">
                            <div className="col-md-12 col-lg-5 mt-5 text-center">
                                <img src="https://cdn2.iconfinder.com/data/icons/illustricon-tech-viii/512/desktop_security-128.png" className=" w-50 mt-4" />
                            </div>
                            <div className="col-md-12 col-lg-4 mt-5 text-center">
                                <h1>Login page</h1>
                                <div className="row mt-5" >
                                    <p className="col-1 mt-2"><FontAwesomeIcon icon={faUser} /></p>
                                    <input type="text" placeholder="Enter a Name" className="col-6 in" />
                                </div>
                                <div className="row mt-5" >
                                    <p className="col-1 mt-2"><FontAwesomeIcon icon={faLock}  /></p>
                                    <input type="password" placeholder="Enter a password" className="col-6 in" />
                                </div>
                                <button className="btn btn-success col-12 p-2 mt-5">Login</button>
                                <p className="mt-4">Forget <a href="#" className="text-success">Username</a> / <a href="#" className="text-success">password</a></p>
                                <p className="mt-4"><a href="#"  className="text-success">Create your Account</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}