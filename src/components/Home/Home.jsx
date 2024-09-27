import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section id="profile">
            <div className="section__pic-container">
                <img src="assets/p1.jpg" alt="Profile" className="profile-pic" />
            </div>

            <div className="section__text">
                <h1 className="title">Empower Your Future with Web Development</h1>
                <p className="section__text__p3">
                  Unlock endless possibilities and connect with the 
                  world. Web development is the key to building a strong online presence, 
                  driving innovation, and reaching your full potential in the digital age.</p>

                <div className="btn-container">
                    <a className="btn btn-color-1" href="#about">Learn More</a>
                </div>
                
            </div>
        </section>
    );
};

export default Home;
