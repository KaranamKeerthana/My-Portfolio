import React, { Component } from 'react'
import "./about.css"
import {Link} from "react-router-dom";

class About extends Component {

    render() {
        return (
            <div>
                <div className="topnav">
                    <a className="active" href="">ABOUT</a>
                    <div className="topnav-right">
                    <Link to={{pathname:"/"}}>Home</Link>
                    <Link to={{pathname:"/about"}} className="u">About</Link>
                    <Link to={{pathname:"/contact"}}>Contact</Link>
                    </div>
                </div>
                
                <div>
                    
                    <div className="card3">
                        <div className="card4">
                        <h1>LEARN MORE ABOUT ME..!</h1>
                            <img src="/images/miine.jpeg"></img>

                        </div>
                        <div className="card5">
                            <h3>Software Developer</h3>
                            <p>A highly driven individual looking for a challenging position in an organization
                                 specializing in tech which will be the impetus to my professional 
                                and personal prosperity and will play to my strengths.
                            </p>
                            
                                <div className="card6">
                                <ul>
                                <li><span>Birthday</span>:28 June 2001</li>
                                <li><span>Phone</span>:91 9398695969</li>
                                <li><span>City</span>:Ananthapur</li>
                                </ul>
                                </div>
                                <div className="card7">
                                    <ul>
                                    <li><span>Age</span>:19</li>
                                    <li><span>Degree</span>:Bachelors of Technology</li>
                                    <li><span>Email</span>:Keerthanakaranam2@gmail.com</li>
                                    </ul>
                                </div>
                                <div className="card20">
                    <h1>EDUCATION</h1>
                    <ul className="card21">
                        <li>Bachelors Of Technology<span>2018-2022</span></li>
                    
                    <p >Srinivasa Ramanujan Institute Of Technology,
                    Ananthapur,Andhra Pradesh.</p>
                    </ul>
            </div>
                                
                                
                        </div>
                    </div>
                </div>
                <div className="card13">
                    <h1>SKILLS</h1>
                </div>
                <div className="card9">
                <p>HTML5</p>
                <progress max="100" value="100"></progress>
                <p>CSS3</p>
                <progress value="80" max="100"></progress> 
                <p>JAVA SCRIPT</p>
                <progress value="70" max="100"></progress> 
                <p>BOOTSTRAP</p>
                <progress value="70" max="100"></progress> 
                </div>
                                
                <div className="card10">
                                <p>REACT</p>
                <progress value="60" max="100"></progress> 
                <p>PYTHON</p>
                <progress value="80" max="100"></progress> 
                <p>DJANGO</p>
                <progress value="80" max="100"></progress>
                <p>GIT/GITHUB</p>
                <progress value="70" max="100"></progress>  
            </div> 
            <div>
            <div className="card14">
                <h1>INTERESTS</h1>
                <ul>
                    <li><button className="btn"><img src="/images/a.png" className="btn_img"></img>AWS</button></li>
                    <li><button className="btn"><img src="/images/p.png" className="btn_img"></img>PYTHON</button></li>
                    <li><button className="btn"><img src="/images/r.png" className="btn_img"></img>REACT JS</button></li>
                </ul>
            </div> 
            <div className="card23">
                    <h3>CERTIFICATIONS</h3>
                    <ul>
                    <li><a href="https://www.hackerrank.com/certificates/74ca7ccecbd6"><img src="/images/pv.png"></img></a></li>
                    <li><a href="https://www.hackerrank.com/certificates/04c3cbdca772"><img src="/images/ps.png"></img></a></li>
                    <li><a href="https://www.freecodecamp.org/certification/karanam_keerthana/responsive-web-design"><img src="/images/free.jpg"></img></a></li>
                    <li><a><img src="/images/p.png"></img></a></li>
                    </ul>

                </div>
            </div> 
            <div  className="card34">
                <div className="card32">
                <h3>WORKSHOPS</h3>
                <ul>
                    <li><button className="kill"><img src="/images/4.jpeg" className="img1"></img>Web Development using Django</button></li>
                    <li><button className="kill"><img src="/images/5.png" className="img1"></img>Web Designing using REACTJS</button></li>
                    <li><button className="kill"><img src="/images/6.png" className="img1"></img>Source code management using Git.GitHub</button></li>
                </ul>
                </div>  
                </div>
                
            </div>
        )
    }
}

export default About
