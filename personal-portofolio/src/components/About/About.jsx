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
                            &emsp;&emsp;&emsp;&emsp;A curious and ambitious individual, always eager to dive into new technological
                            concepts, acquire knowledge of these assets and aggregate them to provide
                            solutions for real world problems. Devoted to earn professional experience
                            alongside an information technology enterprise.
                        </p>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    )
}

export default About