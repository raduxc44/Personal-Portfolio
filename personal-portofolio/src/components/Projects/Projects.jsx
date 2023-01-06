import Liquid from '../../images/Liquid-screenshot.png'
import Todo from '../../images/Todolist-screenshot.png'
import Tictactoe from '../../images/Tictactoe-screenshot.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import './Projects.css'

function Projects () {
    return(
        <div className="projects-container" id='projects'>
            <AnimationOnScroll offset={800} animateIn='animate__fadeIn'><p className='noselect'>Projects</p></AnimationOnScroll>
            <div className='first-project'>
                <AnimationOnScroll animateOnce='true' offset={100} animateIn="animate__backInUp">
                    <div className="project-container">
                    <a href='https://liquid-rc.netlify.app/' target="new"><img src={Liquid} alt="Liquid" /></a>
                    <h6 className='noselect'>[Work In Progress]</h6>
                    <h3 className='noselect'>Liquid</h3>
                    </div>
                </AnimationOnScroll>
                
            </div>
            <div className='last-projects'>
                <AnimationOnScroll animateOnce='true' offset={100} animateIn="animate__backInUp">
                    <div className='project-container'>
                        <a href='https://todolist-r-ciocan.netlify.app/' target="new"><img src={Todo} alt="To-Do List" /></a>
                        <h3 className='noselect'>To-Do List</h3>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce='true' offset={100} animateIn="animate__backInUp">
                    <div className='project-container'>
                        <a href='https://tictactoe-r-ciocan.netlify.app/' target="new"><img src={Tictactoe} alt="Tic-tac-toe" /></a>
                        <h3 className='noselect'>Tic Tac Toe</h3>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    )
}

export default Projects