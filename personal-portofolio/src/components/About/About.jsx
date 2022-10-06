import './About.css'
import Profiledummy from '../../images/Profile-pic.jpeg'
import TypeWriter from 'typewriter-effect'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

function About () {
    return (
        <div className="about noselect" id='about'>
            <p className='about-main'>About me</p>
            <div className='about-content'>
                <div className="pic-typewriter-container">
                    <div className="pic-container">
                    <AnimationOnScroll offset={400} animateOnce='true' animateIn="animate__bounceIn">
                    <img src={Profiledummy} alt="ProfilePic" />
                    </AnimationOnScroll>
                    </div>
                    <div className='typewriter-container'>
                        <p id='enjoy'>I ENJOY</p>
                        <>
                            <TypeWriter
                                options={{
                                    strings: ['Pizza', 'Swimming', 'Reading', 'Videogames'],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 100
                                }}
                            />
                        </>
                    </div>
                </div>
                <AnimationOnScroll animateOnce='true' offset={400} animateIn="animate__bounceIn">
                    <div className='about-text-container'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> 
                        Phasellus ex neque, suscipit a felis ut, lacinia accumsan odio.<br></br> 
                        Cras non urna id sem viverra gravida. Aliquam vel est vel libero euismod imperdiet.<br></br> 
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> 
                        Phasellus ex neque, suscipit a felis ut, lacinia accumsan odio.<br></br> 
                        Cras non urna id sem viverra gravida. Aliquam vel est vel libero euismod imperdiet.<br></br> 
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> 
                        Phasellus ex neque, suscipit a felis ut, lacinia accumsan odio.<br></br> 
                        Cras non urna id sem viverra gravida. Aliquam vel est vel libero euismod imperdiet.<br></br> 
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    )
}

export default About