import React, { useState } from 'react';
import '../percentage/mongodb.css';
function App(){

    const [mongo,setmongo] =  useState(0);
    const mongoMouseEnter = () =>{
        setmongo(85);
    };
    const mongoMouseLeave = () =>{
        setmongo(0);
    };


    return(
        <div>
    <div class="mongodb-bar" 
    onMouseEnter={mongoMouseEnter} onMouseLeave={mongoMouseLeave}
    style={{fontSize:'1em',}}>
        
        
       <div class="mongodb" 
       ><p style={{marginLeft:'50%',marginTop:'0px',paddingTop:'2px'}}>{mongo}%</p></div>
       
      
   </div>
   
   </div>
    )

}
export default App;