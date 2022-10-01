import './Footer.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

function Footer () {
    return(
        <div className='footer-container' id='footer'>
            <h3>Contact</h3>
            <footer>
                <AnimationOnScroll offset='10' animateIn="animate__bounceIn">
                    <i class="fa-brands icon fa-github"></i>
                </AnimationOnScroll>
                <AnimationOnScroll offset='10' animateIn="animate__bounceIn">
                    <i class="fa-brands icon fa-linkedin-in"></i>
                </AnimationOnScroll>
                <AnimationOnScroll offset='10' animateIn="animate__bounceIn">
                    <i class="fa-solid icon fa-envelope"></i>
                </AnimationOnScroll>
                <AnimationOnScroll offset='10' animateIn="animate__bounceIn">
                    <i class="fa-solid icon fa-file"></i>
                </AnimationOnScroll>
            </footer>
        </div>
    )
}

export default Footer