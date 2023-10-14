import React, { useState } from "react";

export function Counter(){
    const[add,setAdd]=useState(0)
    const[count,setCount]=useState(0)
    return(
        <>
         <div className="container-fluid p-5" id="logbg" >
                <div className="container p-5 bg-white conta">
                <h1 className="text-center">Bob ate <spam className="text-success">{count}</spam> Mangoes <spam  className="text-danger">{add}</spam> Bananas </h1>
                <div className="row">
                     <div className="col-lg-6 col-sm-12">
                             <img  src="https://t4.ftcdn.net/jpg/01/31/16/77/360_F_131167771_sb2GvrBq1EKP7nOZ1TUbQZDI7EXNNSb6.jpg" className="w-50"/>
                        <div className="mt-5 text-center">   
                          <button className="bg-success mt-5 me-5" onClick={()=>{setCount(count+1)}}>Select Item</button> 
                          </div>
                     </div>
                     <div className="col-lg-6 col-sm-12 mt-2 text-center">
                           <img  src="https://t3.ftcdn.net/jpg/00/74/69/04/360_F_74690493_9D0K4JHb7DoRbvlpO87bbHhM2CPGux9t.jpg" className="w-50"/>
                           <div className="mt-5 text-center">   
                               <button className="bg-danger" onClick={()=>{setAdd(add+1)}}>Select Item</button>
                                </div>

                     </div>
                </div>
                        
                    
                </div>
            </div>
        </>
    );
}