import './About.css'
import Profiledummy from '../../images/Profile-pic.jpeg'
import TypeWriter from 'typewriter-effect'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

function About () {
    return (
        <div className="about noselect" id='about'>
            <AnimationOnScroll offset={800} animateIn="animate__fadeIn"><p className='about-main'>About me</p></AnimationOnScroll>
            <div className='about-content'>
                <div className="pic-typewriter-container">
                    <div className="pic-container">
                    <AnimationOnScroll offset={400} animateOnce='true' animateIn="animate__bounceIn">
                    <img src={Profiledummy} alt="ProfilePic" />
                    </AnimationOnScroll>
                    </div>
                </div>
                <AnimationOnScroll animateOnce='true' offset={400} animateIn="animate__bounceIn">
                    <div className='about-text-container'>
                        <AnimationOnScroll className='typewriter-container' animateOnce='true' offset={700} animateIn="animate__bounceIn"><div className='typewriter-container'>
                            <p id='enjoy'>I ENJOY</p>
                            <>
                            <TypeWriter
                                options={{
                                    strings: ['Swimming', 'Learning', 'Hiking', 'Videogames', 'Movies'],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 100
                                }}
                            />
                            </>
                        </div>
                        </AnimationOnScroll>
                        <p> 
                            &emsp;&emsp;&emsp;&emsp;Hi! I'm <span className='first-name'>Radu</span>, a self-taught web developer 
                            driven by a desire to create meaningful and engaging online experiences
                            through effective design and development.<br></br>
                            &emsp;&emsp;&emsp;&emsp;Despite lacking a formal computer science degree 
                            or prior relevant work experience, I have persistently invested time and 
                            effort into improving my skills and knowledge through both personal projects
                            and self-directed learning.<br></br>
                            &emsp;&emsp;&emsp;&emsp;I am eager to continue learning and growing as a professional web developer, 
                            as well as using my current skillset and knowledge to make a positive impact on a team.
                        </p>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    )
}

export default About