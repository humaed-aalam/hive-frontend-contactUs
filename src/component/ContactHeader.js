import React from 'react';
import './style.css';
const HeaderPanel=()=>{
    return(
        <header className="header">
            <nav className="navbar container">
            <a href="#">
                <img src="../images/hive_logo.svg" alt="Hive Logo" class="logo"/>
            </a>
            <ul class="navbar__link-list">
                <li><a href="#" className="navbar__link">Home</a></li>
                <li><a href="#" className="navbar__link">About Us</a></li>
                <li><a href="#" className="navbar__link">Events</a></li>
                <li><a href="#" className="navbar__link">Projects</a></li>
                <li><a href="#" className="navbar__link navbar__link--active">Contact</a></li>
            </ul>
            </nav>
        </header>
    );
}
export default HeaderPanel;
