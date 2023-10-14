import React, { useState } from "react";

export function Hook(){
    const[count,setCount]=useState(0)
    return(
        <>
          <div className="container mt-5 bg-light  text-center">
            <h1>{count}</h1>
            <button className="bg-success me-5" onClick={()=>{setCount(count+1)}}>Increment</button>
            <button className="bg-danger" onClick={()=>{setCount(count*0)}}>Reset</button>
            <button className="bg-primary ms-5" onClick={()=>{setCount(count-1)}}>Decrement</button>

          </div>
        </>
    );
}