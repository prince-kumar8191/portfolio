import React from "react";
import '../components/education.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight} from '@fortawesome/free-solid-svg-icons'

function App(){

    return(
        <div className="conatiner">
            <div className="box1" >
                <div className="experience1" >
                <FontAwesomeIcon icon={faAnglesRight} style={{color:'red',marginRight:'30px'}} />
                    <p>Bachelor Of Computer Application</p>
                    <h4>S.D College of Management Studies</h4>
                    <h4>Muzaffarnagar</h4>
                </div>
                <div className="experience2" >
                <FontAwesomeIcon icon={faAnglesRight} style={{color:'red',marginRight:'30px'}} />
                <p>Intermediate (10/07/2022)</p>
                <h4>Spring Dales Public School</h4>
                <h4>Mansurpur , Muzaffarnagar</h4>
                </div>
                
                
            </div>

            
            <div className="box2" >
                <div className="experience1" >
                <FontAwesomeIcon icon={faAnglesRight} style={{color:'red',marginRight:'30px'}} />
                    <p>Advance Training Program in Mern Stack</p>
                    <h4>Silverwink E-Development and Training Center</h4>
                    <h4>Pachenda Road,Adarsh Colony, Muzaffarnagar</h4>
                </div>
                <div className="experience2" >
                <FontAwesomeIcon icon={faAnglesRight} style={{color:'red',marginRight:'30px'}} />
                <p>Australia State University</p>
                <h4>Bachelor Degree Of information Technology</h4>
                <h4>2019 - Present</h4>
                </div>
                
                
            </div>
        </div>

    )
}
export default App;