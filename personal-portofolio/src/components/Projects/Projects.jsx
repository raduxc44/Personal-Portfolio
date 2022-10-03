import Todo from '../../images/Todolist-screenshot.png'
import Tictactoe from '../../images/Tictactoe-screenshot.png'
import EtchaSketch from '../../images/Etch-a-sketch-screenshot.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import './Projects.css'

function Projects () {
    return(
        <div className="projects-container" id='projects'>
            <p>Projects</p>
            <div className='first-project'>
                <AnimationOnScroll animateOnce='true' offset={100} animateIn="animate__backInUp">
                    <div className="project-container">
                    <a href='https://todolist-r-ciocan.netlify.app//' target="new"><img src={Todo} alt="ToDo-List" /></a>
                    <h3>ToDo List</h3>
                    </div>
                </AnimationOnScroll>
                
            </div>
            <div className='last-projects'>
                <AnimationOnScroll animateOnce='true' offset={100} animateIn="animate__backInUp">
                    <div className='project-container'>
                        <a href='https://tictactoe-r-ciocan.netlify.app/' target="new"><img src={Tictactoe} alt="Tic-tac-toe" /></a>
                        <h3>Tic Tac Toe</h3>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce='true' offset={100} animateIn="animate__backInUp">
                    <div className='project-container'>
                        <a href='https://etchasketch-r-ciocan.netlify.app/' target="new"><img src={EtchaSketch} alt="Etch-a-Sketch" /></a>
                        <h3>Etch-A-Sketch</h3>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    )
}

export default Projects