import './Nav.css'

function Nav () {

    function navAnimateWhenPressed (e) {
    e.target.classList.add('gelatine')
    setTimeout(function(){
            e.target.classList.remove('gelatine')
        }, 1000);
    }

    return(
    <nav>
        <ul>
            <a onClick={navAnimateWhenPressed} href="#home"><li className='noselect'>Home</li></a>
            <a onClick={navAnimateWhenPressed} href="#about"><li className='noselect'>About</li></a>
            <a onClick={navAnimateWhenPressed} href="#projects"><li className='noselect'>Projects</li></a>
            <a onClick={navAnimateWhenPressed} href="#footer"><li className='noselect'>Contact</li></a>
        </ul>
    </nav>
)}

export default Nav