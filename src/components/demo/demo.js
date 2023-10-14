import React, { useEffect, useState } from "react";

export function Demo(){
                const [data,setData]=useState([])

                useEffect(()=>{
                    fetch("http://localhost:3000/demo.json")
                    .then(comp=>comp.json())
                    .then(datas=>setData(datas))

                    console.log();
                })
    return(
        <>
           
        </>
    );
}