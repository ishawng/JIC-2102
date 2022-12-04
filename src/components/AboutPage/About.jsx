import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about-container'>
            <h1>The Team</h1>
            <p>Hello! Welcome to the Korean Language Game web app! We are the Squid Team, aka. a group of 6 CS students who attend Georgia Tech. For our GT Junior Design capstone, we chose to make this website for Professor Yongtaek Kim's KOR 1001 class. Thanks for visiting our web app, and we hope this aids in your Korean language-learning journey. Here's our links: </p>
            <br></br>

            <div className="student-box-container">
                <div className="student-box">
                    <div className="student">
                        <h3>Ishawn Gullapalli</h3>
                        <p> <a href="https://www.linkedin.com/in/ishawng/">Developer</a> </p>
                    </div>
                    <div className="student">
                        <h3>Andrew Osmond</h3>
                        <p> <a href="https://www.linkedin.com/in/aosmond3/">Developer</a> </p>
                    </div>
                    <div className="student">
                        <h3>James Kelley</h3>
                        <p>Developer</p>
                    </div>
                </div>

                <div className="student-box">
                    <div className="student">
                        <h3>Rina Yoo</h3>
                        <p> <a href="https://www.instagram.com/rinayooart/">Artist</a>, <a href="https://www.linkedin.com/in/rina-yoo/">Developer</a> </p>
                    </div>

                    <div className="student">
                        <h3>Karishma Rana</h3>
                        <p> <a href="https://www.linkedin.com/in/karishma-rana">Developer</a> </p>
                    </div>
                    <div className="student">
                        <h3>Arya Joshi</h3>
                        <p> <a href="https://www.linkedin.com/in/arya-joshi-3202641b3/">Developer</a> </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About;