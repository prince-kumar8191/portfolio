import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
function App() {

    return (
        <div className="conatiner">
            <div className="box1" >
                <div className="experience1" >
                    <FontAwesomeIcon icon={faAnglesRight} style={{ color: 'red', marginRight: '30px' }} />
                    <p>Agiletech Agency</p>
                    <h4>Framer Designer & Developer</h4>
                    <h4>2024 - Present</h4>
                </div>
                <div className="experience2" >
                    <FontAwesomeIcon icon={faAnglesRight} style={{ color: 'red', marginRight: '30px' }} />
                    <p>Softech Agency</p>
                    <h4>Front and End Developer</h4>
                    <h4>2024 - Present</h4>

                </div>


            </div>


            <div className="box1" >

                <div className="experience1" >
                    <FontAwesomeIcon icon={faAnglesRight} style={{ color: 'red', marginRight: '30px' }} />
                    <p>Huwai Technology</p>
                    <h4>Web Application Manager</h4>
                    <h4>2024 - Present</h4>
                    <></>
                </div>
                <div className="experience2" >
                    <FontAwesomeIcon icon={faAnglesRight} style={{ color: 'red', marginRight: '30px' }} />
                    <p>Australia State University</p>
                    <h4>Bachelor Degree Of information Technology</h4>
                    <h4>2024 - Present

                    </h4>
                </div>


            </div>
        </div>

    )
}
export default App;