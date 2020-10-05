import React from 'react';
import './index.scss';

import Animation from '../../components/svg-animation/index';

function Work(){
    return(
        <div className="page-container">
            <section className="intro-section">
                <div className="intro-section-text">
                    <h1 className="intro-header">
                        Hello, I'm Azrie.<br></br>
                        Fullstack developer.
                    </h1>
                    <div className="intro-subheader">
                    Specialized in front-end development and at the same time
                    aspiring to create engaging UI and bringing product to life.
                    </div>
                </div>
                <div className="intro-section-animation">
                    <div className="animation-container">
                        <Animation/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Work;