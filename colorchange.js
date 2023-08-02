import React, { useEffect, useState } from 'react'

function Color(){
    const [color,setColor]=useState('blue')

    const changecolor=color=>{
           setColor(color)
    }
    useEffect(()=>{
     document.body.style.backgroundColor=color
    },[color])

  
    

     return(
        <div className='div1'>
            <button onClick={
                ()=>{changecolor('yellow')}
            }>Change color</button>
        </div>
     )
}

export default Color