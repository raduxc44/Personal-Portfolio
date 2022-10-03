import './Footer.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

function Footer () {
    return(
        <div className='footer-container' id='footer'>
            <h3>Contact</h3>
            <footer>
                <AnimationOnScroll offset='10' animateIn="animate__bounceIn">
                    <div className='contact-individual'>
                        <a href='https://github.com/raduxc44' target="new"><i className="fa-brands icon fa-github"></i></a>
                        <p>GitHub</p>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll offset='10' animateIn="animate__bounceIn">
                    <div className='contact-individual'>
                        <i className="fa-brands icon fa-linkedin-in"></i>
                        <p>LinkedIn</p>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll offset='10' animateIn="animate__bounceIn">
                    <div className='contact-individual'>    
                        <a href='mailto:raduxc44@gmail.com'><i className="fa-solid icon fa-envelope"></i></a>
                        <p>Mail</p>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll offset='10' animateIn="animate__bounceIn">
                    <div className='contact-individual'>
                        <i className="fa-solid icon fa-file"></i>
                        <p>Resume</p>
                    </div>
                </AnimationOnScroll>
            </footer>
        </div>
    )
}

export default Footer