import React, { useEffect, useState } from 'react'

function Color(){
    const [color,setColor]=useState('blue')
    const [click,setColorclick]=useState('green')
    

    const changecolor=()=>{
        setColor(color ==='blue'?'yellow':'blue')
       }

    useEffect(()=>{
     document.body.style.backgroundColor=color
    },[color])

    function change(){
        // setColorclick(!click)
       setColorclick(click === 'green'?'red':'green')
    }
    

     return(
        <div className='div1'>
            <button onClick={
                ()=>{changecolor()}
            }   > Change color</button>

            <button onClick={change} style={{backgroundColor: click }}>click on me to see the color</button>


            
        </div>
     )
}

export default Color