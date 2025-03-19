import React from "react";
import "./services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/card";

const Services = () => {
    return (
        <div className="services">

            {/* left side */}
            <div className="awesome">
            <span>My Awsome Services</span>
            <span>services</span>
            <spane>left side</spane>
            <button className="button s-button">Download CV</button>
            <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
            </div>

            {/* right side */}
            <div className="cards">
                <div style={{left: '14rem'}}>
                    <Card
                    emoji = {HeartEmoji}
                    heading = {"Design"}
                    detail = {"Photophop, Illustrator, Corel Draw, Adobe XD, Figma, Sketch"}
                    />
                </div>

                <div style={{top: '12rem', left: '-4rem'}}>
                    <Card
                    emoji = {Glasses}
                    heading = {"Development"}
                    detail = {"HTML, CSS, JavaScript, React, Node, Express, MongoDB"}
                    />
                </div>
                <div style={{top: '19rem', left: '12rem'}}>
                    <Card
                    emoji = {Humble}
                    heading = {"Marketing"}
                    detail = {"SEO, SEM, SMM, Email Marketing, Content Marketing"}
                    />
                </div>
            </div>
                
        </div>
)
}

export default Services;