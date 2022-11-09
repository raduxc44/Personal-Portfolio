import './Footer.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

function Footer () {
    return(
        <div className='noselect footer-container' id='footer'>
            <AnimationOnScroll offset={100} animateIn="animate__fadeIn"><p className='contact-main'>Contact</p></AnimationOnScroll>
            <footer>
                <AnimationOnScroll offset='25' animateIn="animate__bounceIn">
                    <div className='contact-individual'>
                        <a href='https://github.com/raduxc44' target="new"><i className="fa-brands icon fa-github"></i></a>
                        <p>GitHub</p>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll offset='25' animateIn="animate__bounceIn">
                    <div className='contact-individual'>
                        <a href="https://www.linkedin.com/in/radu-ciocan-6a057922a/" target='new'><i className="fa-brands icon fa-linkedin-in"></i></a>
                        <p>LinkedIn</p>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll offset='25' animateIn="animate__bounceIn">
                    <div className='contact-individual'>    
                        <a href='mailto:radu.a.ciocan@gmail.com'><i className="fa-solid icon fa-envelope"></i></a>
                        <p>Mail</p>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll offset='25' animateIn="animate__bounceIn">
                    <div className='contact-individual'>
                        <a href='https://drive.google.com/file/d/1dTFAFfducs5ZYlKHscF_4Lwteziyjnel/view' target= "new"><i className="fa-solid icon fa-file"></i></a>
                        <p id='contact-text'>Resume</p>
                    </div>
                </AnimationOnScroll>
            </footer>
        </div>
    )
}

export default Footer