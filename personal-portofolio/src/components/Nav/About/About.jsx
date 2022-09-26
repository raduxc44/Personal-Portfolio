import './About.css'
import Profiledummy from '../../../images/abstract-user-flat-1.svg'
import TypeWriter from 'typewriter-effect'

function About () {
    return (
        <div className="about">
            <div className="pic-typewriter-container">
                <div className="pic-container">
                    <img src={Profiledummy} alt="ProfilePic" />
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
        </div>
    )
}

export default About