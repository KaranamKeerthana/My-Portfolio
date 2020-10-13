import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./contact.css"

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <a className="active1" href="">CONTACT</a>
                    <div className="topnav-right">
                    <Link to={{pathname:"/"}}>Home</Link>
                    <Link to={{pathname:"/about"}} >About</Link>
                        <a href="" className="u">Contact</a>
                    </div>
                </div>
                <div className="card40">
                    <h1>CONTACT ME</h1>
                </div>
                <div>
                    <div className="card41">
                    <ul>
                    <li><button className="btn2"><img src="/images/l4.png" className="btn_img2"></img><h3>My Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3><p>Vivekananda Nagar,Ananathapur,515001</p></button></li>
                    <li><button className="btn2"><img src="/images/li4.png" className="btn_img2"></img><h3>Linked In &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3><p>Karanam Keerthana</p></button></li>
                    </ul>
                    </div>
                </div>
                <div>
                    <div className="card42">
                    <ul>
                    <li><button className="btn2"><img src="/images/e4.png" className="btn_img2"></img><h3>Email Me</h3><p>keerthanakaranam2@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></button></li>
                    <li><button className="btn2"><img src="/images/c4.png" className="btn_img2"></img><h3>Call Me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3><p>9398695969&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></button></li>
                    </ul>
                    </div>
                </div>
                <div className="card44">
                    <div className="card45">
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="card46">
                        <input type="text"placeholder="Your Email" />
                    </div>
                    <input className="card47" placeholder="Subject"/>
                    <textarea rows="4" cols="40" 
          placeholder="Message" className="card48"> 
         
        </textarea> 
        <div>
        <button className="card49">Send Message</button>
        </div>
                </div>
                
                
            </div>
        )
    }
}

export default Contact
