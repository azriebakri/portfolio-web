import React from 'react';
import "./index.scss"

import MeJPG from "../../assets/images/me.jpg"

function About(){
    return(
        <div className="page-container">
            <section className="about-section">
                <div className="about-section-image animated animatedFadeInUp fadeInUp">
                    <img src={MeJPG}/>
                </div>
                <div className="about-section-text animated animatedFadeInUp fadeInUp">
                    <h1 className="about-header">
                        I’m Azrie, a fullstack developer who is 
                        currently working for Service Rocket
                        as a software engineer in Kuala Lumpur, Malaysia.
                    </h1>
                    <div className="about-subheader">
                        I’ve spent the past 3 years+ working accross different areas of system development; 
                        front-end development for most part, mainly using Reactjs, back-end development with 
                        Nodejs/Express, databases as well with CI/CD. 
                    </div>
                    <div className="about-subheader">
                        Out of work hours, you’ll find me dreaming of bouldering and rock climbing, 
                        coding for fun, take photos here and there and picking up skills that would 
                        make me a better developer.
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;