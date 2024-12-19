import React, { useState } from 'react';
import '../percentage/csss.css';
function App(){

    const [percentage,setpercentage] =  useState(0);
    const handleMouseEnter = () =>{
        setpercentage(90);
    };
    const handleMouseLeave = () =>{
        setpercentage(0);
    };


    return(
        <div>
    <div class="csss-bar" 
    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    style={{fontSize:'1em',}}>
        
        
       <div class="csss" 
       ><p style={{marginLeft:'50%',marginTop:'0px',paddingTop:'2px',}}>{percentage}%</p></div>
       
      
   </div>
   
   </div>
    )

}
export default App;