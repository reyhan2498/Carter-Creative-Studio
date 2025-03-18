import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

const Intro = () => {
return (
    <div className="i-wrapper">
        <div className="i-left">
            <div className="i-name">
                <span>Hey I'm</span>
                <span>Alex</span>
                <span>Frontend Developer</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">

            I am on the right side
        </div>
    </div>
)
}

export default Intro;