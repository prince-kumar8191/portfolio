import React, { useState } from 'react';
import '../percentage/github.css';
function App(){

    const [percentage,setpercentage] =  useState(0);
    const handleMouseEnter = () =>{
        setpercentage(85);
    };
    const handleMouseLeave = () =>{
        setpercentage(0);
    };


    return(
        <div>
    <div class="github-bar" 
    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    style={{fontSize:'1em',}}
    >
        
        
       <div class="github" 
       ><p style={{marginLeft:'50%',paddingTop:'2px',marginTop:'0px',}}>{percentage}%</p></div>
       
      
   </div>
   
   </div>
    )

}
export default App;