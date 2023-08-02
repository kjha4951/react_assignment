import React, { useState } from "react";
  const App1=()=>{
    const [color , setColor]=useState("")
    return(
        <div>
            <div style={{backgroundColor:color ,height:"100vh"}} className="flex w-12">
                <input type="text" value={color} onChange={(e)=>setColor(e.target.value)}></input>
            </div>
        </div>
    )
 }
 export default App1