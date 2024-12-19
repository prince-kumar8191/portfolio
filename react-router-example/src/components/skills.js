import React from "react";
import '../components/skills.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight} from '@fortawesome/free-solid-svg-icons'

function App(){

    return(
        <div className="conatiner">
            <div className="box1" >
                <div className="experience1" >
                <FontAwesomeIcon icon={faAnglesRight} style={{color:'red',marginRight:'30px'}} />
                    <p >Trainee - Silverwink E-Development Training Center , Muzaffarnagar , Uttar Pradesh</p>
                    <h4>Engaged in hands-on training in E-Development technologies and programming languages.</h4>
                </div>
                <div className="experience2" >
                <FontAwesomeIcon icon={faAnglesRight} style={{color:'red',marginRight:'30px'}} />
                <p>Collaborated with peers on projects , enchancing skills in specific technologies and practice.</p>
                <h4>Developed practical applications , focusing on specific area of E-Development , like web development and mobile apps etc.</h4>
                </div>
                
                
            </div>

            <div className="box2" >
                <div className="experience1" >
                <FontAwesomeIcon icon={faAnglesRight} style={{color:'red',marginRight:'30px'}} />
                    <p>Gained exposure to industry-standard tools and methodologies,fostering a strong foundation in E-Development</p>
                    <h4>Web Application Developer</h4>
                    <h4>2024 - Present</h4>
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