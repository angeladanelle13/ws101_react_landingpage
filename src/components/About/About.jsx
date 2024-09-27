import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about">
            <p className="section__text__p1">Get To Learn More</p>
            <h1 className="title">Why Web Development is Essential in Today’s World</h1>
            <div className="section-container">
                <div className="about-details-container">
                    <div className="text-container">
                        <p class="texta1">
                            In today's connected world, a strong online presence is 
                            essential for businesses, professionals, and communities 
                            alike. Web development enables you to create dynamic, 
                            responsive, and user-friendly websites that serve as the 
                            cornerstone of your digital strategy. Whether you're 
                            looking to reach new customers, showcase your skills, or 
                            build an online community, web development provides the 
                            tools to bring your vision to life. 
                        </p>
                        &nbsp;
                        <p class="texta1">
                            Beyond aesthetics, web development drives engagement, 
                            supports seamless communication, and opens up a world of 
                            opportunities through innovative technologies. By 
                            investing in web development, you're not just creating a 
                            website—you're building a platform for growth, connection, 
                            and success.
                        </p>
                        &nbsp;
                        <p class="texta1">
                            Join the countless businesses and individuals who have 
                            harnessed the power of the web to achieve their goals. 
                            Explore the endless possibilities of web development and 
                            start making your mark in the digital landscape today.
                        </p>
                    </div>
                </div>
            </div>
            <img src="./assets/arrow.png" alt="Arrow" className="arrow" />
        </section>
    );
};

export default About;
