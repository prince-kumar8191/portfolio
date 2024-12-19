
import Mypic from './images/mypic.png'
import Logo from './images/logo.png'

import Animation from './images/animation.png'
import Star from './images/star.png'
import Aboutimg from './images/aboutimg.png'
import Ambition from './images/ambition.png'
import Purpose from './images/purpose.png'
import './App.css'
import Skill from './components/skills'
import Education from './components/education'
import Biography from './components/biograpgy'
import ButtonChnage from './components/buttonColor'
import ButtonChnage2 from './components/buttonColor2'
import Html from './percentage/html'
import MongoDB from './percentage/mongodb'
import Percentage3 from './percentage/csss'
import Percentage4 from './percentage/firebase'
import Percentage5 from './percentage/jsc'
import Github from './percentage/github'
import SkillsImg from './images/skills.png'
import Project1 from './images/project1.png'
import Project2 from './images/project2.png'
import Project3 from './images/project3.png'
import Project4 from './images/project4.png'
import Project5 from './images/project5.png'
import Project6 from './images/project6.png'
import Blog1 from './images/blog1.png'
import Blog2 from './images/blog2.png'
import Blog3 from './images/blog3.png'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faEnvelope,faLocationDot, faAddressCard, faBuildingColumns, faImages, faPenNib, faPhoneVolume,faMoneyCheckDollar, faQuoteRight, faUserTie, faAnglesRight,faArrowRight } from '@fortawesome/free-solid-svg-icons'




import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  json,
} from "react-router-dom";
import { useState } from 'react'

const Home = () => {

  const [heading, setheading] = useState("page1")

  const [user,setUser] = useState(
    {
      Name:'',Subject:'',Email:'',Message:''
    }
  )

  let values,names
  const data = (e) =>{
    values = e.target.value
    names = e.target.name
    setUser({...user, [names]: values})
  }

  const send = async(e) =>{

    const {Name,Subject,Email,Message} = user

    e.preventDefault()
    const option = {
      method:'POST',
      Headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        Name,Subject,Email,Message
      })
    }
    const send = await fetch('https://portfolio-b4631-default-rtdb.firebaseio.com/Message.json',option)
    if(send){
      alert("Message send")
    }
    else{
      alert("Error Occured Message send")
    }
  } 


  const [bgColor, setBgColor] = useState();
  const handleMouseLeave = (buttonIndex) => {
    setBgColor(buttonIndex);
  };


  return (
    <div>
      <div className='big'>


        <div className='navbar'>
          <div className='logo'>
            <div className='image'>
              <img src={Logo} />
            </div>

          </div>
          <div className='icons'>
            <div className='iconlist'>
              <ul>
                <li><FontAwesomeIcon icon={faHouse} /></li>
                <li><FontAwesomeIcon icon={faAddressCard} /></li>
                <li><FontAwesomeIcon icon={faBuildingColumns} /></li>
                <li><FontAwesomeIcon icon={faImages} /></li>
                <li><FontAwesomeIcon icon={faPenNib} /></li>
                <li><FontAwesomeIcon icon={faMoneyCheckDollar} /></li>
                <li><FontAwesomeIcon icon={faQuoteRight} /></li>
                <li><FontAwesomeIcon icon={faUserTie} /></li>


              </ul>


            </div>


          </div>
        </div>
        <div className='intro'>
          <div className='name'>
            <h1>Hi ! I'm Prince</h1>

            <h2>Web Developer</h2>
            <p>A Web Developer is a stilled professional responsible for designing and building websites or web applications</p>
          </div>

          <div className='img'>
            <img src={Mypic} ></img>
          </div>
          <div className='containers'>
            <div className='myresume'>
              <ButtonChnage />
            </div>
            <div className='watch'>
              <ButtonChnage2 />

            </div>

          </div>



          <div className='animation'>
            <img src={Animation} ></img>

          </div>
          <div className='award'>
            <div className='logo'>
              <img src={Star} ></img>
            </div>
            <div className='winner'>
              <h1>20+</h1>
              <h4>Winning award</h4>
            </div>
          </div>



        </div>
      </div>


      {/* second page */}
      <div className='about'>
        <div className='aboutimg'>
          <img src={Aboutimg} ></img>
        </div>
        <div className='result'>
          <div className='user'>
            <h3>About Me</h3>
            <h1>Best Result user Experience</h1>

            <p>I am PHILIP, having professional experience of design 100+ clients over the World. I am dedicated to provide best service for you.</p>
          </div>
          <div className='experience'>
            <div className='ambition'>
              <div className='ambiimg'>
                <img src={Ambition} ></img>
              </div>
              <h2>My Ambition</h2>
              <p>I would like to work as a Graphics Designer in a world famous company. I want to expand my skill on Graphics Design industry.</p>
            </div>
            <div className='purpose'>
              <div className='purpimg'>
                <img src={Purpose} ></img>

              </div>
              <h2>My Purpose</h2>
              <p>I want to be an online trainer who train junior designers for how can they easily build up their career in design industry.</p>


            </div>
          </div>
        </div>
      </div>


      {/* Third */}


      <div className='innovation'>

        <div className='better'>
          <div className='tommarow'>
            <h1>Innovating For A Better Tomorrow</h1>
          </div>
          <div className='btns'>
            <div className='btn'>

              <button style={{ backgroundColor: bgColor === 1 ? '#ff00ea' : '#246bfd', color: bgColor === 1 ? 'white' : 'black', transition: '0.8s', border: 'none', fontSize:'0.8em' }} onClick={() => { setheading("Heading1"); handleMouseLeave(1) }}>Experience</button>
            </div>
            <div className='btn'>

              <button style={{ backgroundColor: bgColor === 2 ? '#ff00ea' : '#246bfd', color: bgColor === 2 ? 'white' : 'black', transition: '0.8s', border: 'none',fontSize:'0.8em' }} onClick={() => { setheading("Heading2"); handleMouseLeave(2) }}>Education</button>
            </div>
            <div className='btn'>

              <button style={{ backgroundColor: bgColor === 3 ? '#ff00ea' : '#246bfd', color: bgColor === 3 ? 'white' : 'black', transition: '0.8s', border: 'none',fontSize:'0.8em' }} onClick={() => { setheading("Heading3"); handleMouseLeave(3) }}>Biography</button>
            </div>
          </div>
        </div>

        <div className='bigskills'>
          {heading === "Heading1" && <Page1 />}
          {heading === "Heading2" && <Page2 />}
          {heading === "Heading3" && <Page3 />}
        </div>




      </div>


      {/* Forth */}

      <div>
        <div className='skills'>
          <div className='photoskill'>
            <img src={SkillsImg} ></img>
          </div>
          <div className='pathskill'>
            <div className='mystry'>
              <div className='smallskill'><h4>My Skill</h4></div>

              <div className='myskills'><h1>My Path to Skill Mastery</h1></div>
            </div>
            <div className='percent'>
              <div className='percent1'>

                <div className='html'>
                  <div className='eighty'>
                    <div className='htmleighty'><p>HTML</p></div>
                    <div className='htmldiv'>
                     <div className="html1">
                      <p>90%</p>
                     </div>

                    </div>
                  </div>
                </div>
                <div className='html1'>
                  <div className='eighty'>
                    <div className='htmleighty'><p>MongoDB</p></div>
                    <div className='htmldiv'>
                    <div className="html2">
                      <p>80%</p>
                     </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className='percent1'>
                <div className='html'>
                  <div className='eighty'>
                    <div className='htmleighty'><p>Css</p></div>
                    <div className='htmldiv'>
                    <div className="html3">
                      <p>90%</p>
                     </div>

                    </div>
                  </div>
                </div>
                <div className='html1'>
                  <div className='eighty'>
                    <div className='htmleighty'><p>Firebase</p></div>
                    <div className='htmldiv'>
                    <div className="html4">
                      <p>85%</p>
                     </div>

                    </div>
                  </div>
                </div>

              </div>
              <div className='percent1'>
                <div className='html'>
                  <div className='eighty'>
                    <div className='htmleighty'><p>JavaScript</p></div>
                    <div className='htmldiv'>
                    <div className="html5">
                      <p>85%</p>
                     </div>

                    </div>
                  </div>
                </div>
                <div className='html1'>
                  <div className='eighty'>
                    <div className='htmleighty'><p>GitHub</p></div>
                    <div className='htmldiv'>
                    <div className="html6">
                      <p>95%</p>
                     </div>

                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fifth */}

      <div className='projects'>

        <div className='portfolio'>
          <div className='smallprojects'>
            <h4>PORTFOLIO</h4>
          </div>
          <div className='myprojects'>
            <h1>Meet My Projects</h1>
          </div>
        </div>

        <div className='project'>
          <div className='smalldiv1'>
            <div className='project1'>
              <div className='technology1'>
                <div className='lays'>
                  <h4>Technology Farms</h4>
                  <p>Las Vegas</p>
                  <li><FontAwesomeIcon icon={faAnglesRight} beat /></li>
                </div>
              </div>
              <img src={Project1} ></img>
            </div>
            <div className='project1'>
              <div className='technology1'>
                <div className='lays'>
                  <h4>Technology Farms</h4>
                  <p>Las Vegas</p>
                  <li><FontAwesomeIcon icon={faAnglesRight} beat /></li>
                </div>
              </div>
              <img src={Project2} ></img>
            </div>
            <div className='project1'>
              <div className='technology1'>
                <div className='lays'>
                  <h4>Technology Farms</h4>
                  <p>Las Vegas</p>
                  <li><FontAwesomeIcon icon={faAnglesRight} beat /></li>
                </div>
              </div>
              <img src={Project3} ></img>
            </div>

          </div>
          <div className='smalldiv2'>
            <div className='project2'>
              <div className='technology1'>
                <div className='lays'>
                  <h4>Technology Farms</h4>
                  <p>Las Vegas</p>
                  <li><FontAwesomeIcon icon={faAnglesRight} beat /></li>
                </div>
              </div>
              <img src={Project4} ></img>
            </div>
            <div className='project2'>
              <div className='technology1'>
                <div className='lays'>
                  <h4>Technology Farms</h4>
                  <p>Las Vegas</p>
                  <li><FontAwesomeIcon icon={faAnglesRight} beat /></li>
                </div>
              </div>
              <img src={Project5} ></img>
            </div>
            <div className='project2'>
              <div className='technology1'>
                <div className='lays'>
                  <h4>Technology Farms</h4>
                  <p>Las Vegas</p>
                  <li><FontAwesomeIcon icon={faAnglesRight} beat /></li>
                </div>
              </div>
              <img src={Project6} ></img>
            </div>
          </div>

        </div>


      </div>


      {/* sixth */}

      <div className='blogs'>
        <div className='myblog'><p>My Blog</p></div>
        <div className='myblog1'><h1>My Latest Written Blog</h1></div>
        <div className='big_box'>
          <div className='admin_box'>
            <div className='imgs'>
              <img src={Blog1}></img>
            </div>
            <div className='abouts'>
              <div className='by_admin'>
                <FontAwesomeIcon icon={faUserTie} style={{ fontSize: '10px', color: '#e72b44' }} />
                <p>By Admin</p>
              </div>
              <div className='design'>
                <p>Desining Better Links for your upcomming Business </p>

              </div>
              <div className='readmore'>
                <FontAwesomeIcon icon={faArrowRight} style={{fontSize:'13px',color: '#e72b44'}} />
              <p>Read More</p>
              </div>

            </div>
          </div>
          <div className='admin_box'>
          <div className='imgs'>
              <img src={Blog2}></img>
            </div>
            <div className='abouts'>
              <div className='by_admin'>
                <FontAwesomeIcon icon={faUserTie} style={{ fontSize: '10px', color: '#e72b44' }} />
                <p>By Admin</p>
              </div>
              <div className='design'>
                <p>Desining Better Links for your upcomming Business </p>

              </div>
              <div className='readmore'>
                <FontAwesomeIcon icon={faArrowRight} style={{fontSize:'13px',color: '#e72b44'}} />
              <p>Read More</p>
              </div>

            </div>
            
          </div>
          <div className='admin_box'>
          <div className='imgs'>
              <img src={Blog3}></img>
            </div>
            <div className='abouts'>
              <div className='by_admin'>
                <FontAwesomeIcon icon={faUserTie} style={{ fontSize: '10px', color: '#e72b44' }} />
                <p>By Admin</p>
              </div>
              <div className='design'>
                <p>Desining Better Links for your upcomming Business </p>

              </div>
              <div className='readmore'>
                <FontAwesomeIcon icon={faArrowRight} style={{fontSize:'13px',color: '#e72b44'}} />
              <p>Read More</p>
              </div>

            </div>
          </div>


        </div>
      </div>


    {/* seventh page */}

    <div className='last_page'>
      <div className='contact_page'>
        <div className='contact_me'>
          <p>Contact me Today</p>
        </div>
        <div className='heading'>
          <h1>Reach Out to Me with Your <span>Inquiry Now</span> </h1>
         
        
        </div>

        <div className='info'>
          <div className='left_box'>
            <div className='email'>
              
                <div className='icon'>
                <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'20px',marginLeft:'13px',marginTop:'11px',color:'white'}}/>
                
                </div>
                <div className='writen'>
                <p>Email <span>Company@mail.com</span></p>
               

                </div>
              
            </div>
            <div className='email'>
      
                <div className='icon'>
                <FontAwesomeIcon icon={faPhoneVolume} style={{fontSize:'20px',marginLeft:'10px',marginTop:'11px',color:'white'}}/>
                </div>
                <div className='writen'>
                <p>Contacts <span>0123456789101</span></p>
                </div>
            
            </div>
            <div className='email'>
        
                <div className='icon'><FontAwesomeIcon icon={faLocationDot} style={{fontSize:'20px',marginLeft:'13px',marginTop:'11px',color:'white'}}/></div>
                <div className='writen'>
                <p>Location     <span>99,califo,America</span></p>
                </div>
              
            </div>
          </div>
          <div className='right_box'>
          <form method='POST'>
            <div className='intro'>
              
              <div className='names'>
                <input type='text' name='Name' placeholder=' Your Name' value={user.Name} onChange={data}></input>
              </div>
              <div className='subject'>
              <input type='text' name='Subject' placeholder='Subject' value={user.Subject}  onChange={data}></input>
              </div>

            </div>
            <div className='your_email'>
              <input type='text' placeholder='Your Email' name='Email' value={user.Email}  onChange={data}></input>
            </div>
            <div className='message'>
              <textarea placeholder='Message' name='Message' type='text' value={user.Message}  onChange={data}></textarea>
            </div>
            <button type='submit' onClick={send}>Submit</button>
            </form>

           
          </div>
        </div>
       
      </div>
      
     
    </div>

    <div className='line'>
      <div className='reserved'>
        <p>© agiletech 2024 | All Rights Reserved</p>
       
      </div>
      <div className='term'>
        <ul>
          <li>Terms & Condition</li>
          <li>Privacy Policy </li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>






    </div>

  );
};



const Page1 = () => <div><Skill /></div>
const Page2 = () => <div><Education /></div>
const Page3 = () => <div><Biography /></div>
function Apps() {


  return (


    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>


  )

}
export default Apps;