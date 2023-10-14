import React, { useState } from "react";

export function DateF(){
     const[validity,setValidity]=useState('')
     function dates(){
            let a=document.getElementById('date').value
            let newdate=new Date(a)
             newdate.setDate(newdate.getDate()+90)
            let date=newdate.getDate()
            let month=newdate.getMonth()+1
            let year=newdate.getFullYear()

        let x=`${date} / ${month} / ${year}`
            

            setValidity(x)

            // alert('hi')

     }

    return(
        <>
             <div className="container-fluid p-5" id="logbg" >
                <div className="text-center">
                    <h3>Reacher date : <input type="date"  id='date'/></h3> 
                 <button className="mb-5 mt-5 " onClick={dates} >validity</button>
                 <h3>validity date: <input type="text" value={validity} placeholder="90 Days plan" /></h3> 
                 {/* <h1>{validity}</h1> */}



                </div>
             </div>
        </>
    );
}