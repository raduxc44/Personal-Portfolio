import './Nav.css'

function Nav () {

    let debounce = false;
    function navAnimateWhenPressed (e) {
    if (debounce === true) return;
    debounce = true;
    e.target.classList.add('gelatine')
    setTimeout(function(){
            e.target.classList.remove('gelatine')
            debounce = false;
        }, 1000);
    }

    return(
    <nav>
        <ul>
            <a onClick={navAnimateWhenPressed} href="#home"><li>Home</li></a>
            <a onClick={navAnimateWhenPressed} href="#about"><li>About</li></a>
            <a onClick={navAnimateWhenPressed} href="#projects"><li>Projects</li></a>
            <a onClick={navAnimateWhenPressed} href="#footer"><li>Contact</li></a>
        </ul>
    </nav>
)}

export default Nav