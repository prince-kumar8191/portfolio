import React, { useState } from 'react';
import '../percentage/firebase.css';
function App(){

    const [percentage,setpercentage] =  useState(0);
    const handleMouseEnter = () =>{
        setpercentage(80);
    };
    const handleMouseLeave = () =>{
        setpercentage(0);
    };


    return(
        <div>
    <div class="progress-bar" 
    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    style={{fontSize:'1em',}}
    >
        
        
       <div class="progress" 
       ><p style={{marginLeft:'50%',paddingTop:'2px',marginTop:'0px'}}>{percentage}%</p></div>
       
      
   </div>
   
   </div>
    )

}
export default App;