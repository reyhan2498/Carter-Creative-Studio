import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Alex</div>
                <span>toggle</span>
                <div className="n-right">
                    <div className="n-list">
                        <ul style={{listStyleType:'none'}}>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Experiences</li>
                            <li>Portfolio</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>
                    <div className="n-button">
                        <button className='button'>Contact Us</button>
                    </div>
                </div>         
            </div>
        </div>
    );
};

export default Navbar;