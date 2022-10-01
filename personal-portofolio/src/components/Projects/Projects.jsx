import Todo from '../../images/Todolist-screenshot.png'
import Tictactoe from '../../images/Tictactoe-screenshot.png'
import EtchaSketch from '../../images/Etch-a-sketch-screenshot.png'
import './Projects.css'

function Projects () {
    return(
        <div className="projects-container" id='projects'>
            <p>Projects</p>
            <div className='first-project'>
                <div className="project-container">
                    <a href='https://todolist-r-ciocan.netlify.app//' target="new"><img src={Todo} alt="ToDo-List" /></a>
                    <h3>ToDo List</h3>
                </div>
            </div>
            <div className='last-projects'>
                <div className='project-container'>
                    <a href='https://phenomenal-klepon-22e2f5.netlify.app/' target="new"><img src={Tictactoe} alt="Tic-tac-toe" /></a>
                    <h3>Tic Tac Toe</h3>
                </div>
                <div className='project-container'>
                    <a href='https://shiny-tartufo-e0690a.netlify.app/' target="new"><img src={EtchaSketch} alt="Etch-a-Sketch" /></a>
                    <h3>Etch-A-Sketch</h3>
                </div>
            </div>
        </div>
    )
}

export default Projects