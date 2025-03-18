import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/floatingDiv";

const Intro = () => {
return (
    <div className="Intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hey I'm</span>
                <span>Christopher Carter</span>
                <span>A passionate graphic designer specializing in branding, logo design, digital illustrations, and marketing materials.</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector2} alt="" className="i-vector2" />
            <img src={Vector1} alt="" className="i-vector1" />
            <img src={boy} alt="" />
            <div>
                <FloatingDiv img={Crown} txt1="Graphic" txt2="Designer" />
            </div>
        </div>
    </div>
)
}

export default Intro;