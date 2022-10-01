import './Head.css'

function Head () {
    return (
        <div className='head'>
            <header id='home'>
                <h1>Radu Ciocan</h1>
                <h2>Web dev<span className='dev-neon-blink'>eloper</span></h2>
            </header>
            <a href='#about'><div className='arrow'><i class="fa-sharp fa-solid fa-arrow-down"></i></div></a>
        </div>
    )
}

export default Head