import React, { useState } from 'react';
import '../percentage/html.css';
function App(){

    const [html,sethtml] =  useState(0);
    const htmlMouseEnter = () =>{
        sethtml(90);
    };
    const htmlMouseLeave = () =>{
        sethtml(0);
    };


    return(
        <div>
    <div class="htmls-bar" 
    onMouseEnter={htmlMouseEnter} onMouseLeave={htmlMouseLeave}
    style={{fontSize:'1em',}}
    >
        
        
       <div class="htmls" 
       ><p style={{marginLeft:'50%',paddingTop:'2px',marginTop:'0px'}}>{html}%</p></div>
       
      
   </div>
   
   </div>
    )

}
export default App;