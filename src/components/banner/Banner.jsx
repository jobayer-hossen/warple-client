import React from 'react';
import './Banner.css'
import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
        <>
        <Fade top>
            <div className="hero">
                <div className="heroContent overlay">
                    <span className='brand'>warpleについて</span>
                    <span className="heroTitle">ABOUT</span>
                </div>
            </div>
            </Fade>
        </>
    );
};

export default Banner;