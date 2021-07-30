import React from 'react';
import './About.css';


function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that tow plus two make four. If that is granted, all else follows."
            </span>
            <span>- George orwell, 1984</span>
        </div>
    );
}

export default About;