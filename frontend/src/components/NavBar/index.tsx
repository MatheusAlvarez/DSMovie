import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './style.css'

function NavBar(){
    return(
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/MatheusAlvarez" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/MatheusAlvarez</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;