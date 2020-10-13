import React, { Component } from 'react'
import "./resume.css"

class Resume extends Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <a className="active" href="">ABOUT</a>
                    <div className="topnav-right">
                        <a href="">Home</a>
                        <a href="" >About</a>
                        <a href="" className="u">Resume</a>
                        <a href="">Contact</a>
                    </div>
                </div>
                <div>
                <div className="card20">
                    <h1>CHECK MY RESUME</h1>
                    <h3>Education</h3>
                    <ul className="card21">
                        <li>Bachelors Of Technology</li>
                    </ul>
                    <ul className="card22">
                    <li><button className="btn1">2018-2022</button></li>
                    <li>Srinivasa Ramanujan Institute Of Technology,<br></br>
                    Ananthapur,Andhra Pradesh.</li></ul>
                    <ul className="card21">
                        <li>Intermediate</li>
                    </ul>
                    <ul className="card22">
                    <li><button className="btn1">2016-2018</button></li>
                    <li>Narayana Group Of Institutions,<br></br>
                    Ananthapur,Andhra Pradesh.</li></ul>
                </div>
                <div className="card23">
                    <h3>Certifications</h3>
                    <ul>
                    <li><img src="/images/c1.png"></img></li>
                    <li><img src="/images/c2.png"></img></li>
                    </ul>

                </div>
                </div>
            </div>
        )
    }
}

export default Resume
