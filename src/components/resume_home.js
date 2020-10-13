import React, { Component } from 'react'
import "./resume_home.css"
import {Link} from "react-router-dom";


class Resume_home extends Component {
    render() {
        return (
            <div className="card">
                <div className="card1">
                    <h1>Karanam Keerthana</h1>
                    <h3>I &nbsp; am  &nbsp;spirited&nbsp; <span> Web&nbsp;  Developer&nbsp;</span> using &nbsp;React &nbsp;and &nbsp;Django</h3>
                    <nav>
                    <ul>
                        <li><Link to={{pathname:"/"}} className="u1">Home</Link></li>
                        <li><Link to={{pathname:"/about"}}>About </Link></li>
                        <li><Link to={{pathname:"/contact"}}>Contact</Link></li>
                    </ul>
                    </nav>
                    <ul>
                        <li><img src="/images/fff.png" alt="keerthi"></img></li>
                        <li><img src="/images/ii.png" alt="keerthi"></img></li>
                        <li><img src="/images/m.png" alt="keerthi"></img></li>
                        <li><img src="/images/l.png" alt="keerthi"></img></li>
                        <li><img src="/images/s.png" alt="keerthi"></img></li>
                        <li><img src="/images/t.png" alt="keerthi"></img></li>
                    </ul>
                </div>
                <div className="card2">
                    <img src="/images/miine.jpeg"></img>
                </div>
            </div>
        )
    }
}

export default Resume_home
