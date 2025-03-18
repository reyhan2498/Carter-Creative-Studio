import React from "react";

const Intro = () => {
return (
    <div className="i-wrapper">
        <div className="i-left">
            <div className="i-name">
                <span>Hi There, I'm</span>
                <span>Alex</span>
                <span>Frontend Developer</span>
            </div>
            <button className="button i-button">Hire me</button>
        
        </div>
        <div className="i-right">
            <img src="https://images.unsplash.com/photo-1622835021267-0d4f9c6b2d6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Alex" />
        </div>
    </div>
)
}

export default Intro;