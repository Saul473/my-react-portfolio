import React, { useState } from 'react';
import About from '../About/about';
import Contact from '../Contact/contact';
import Portfolio from '../Portfolio/portfolio';

function Nav() {
    const [content, setContent] = useState();

    return (
        <>
            <nav>
            <h1 className='header'>
                Saul Navarro
            </h1>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <p onClick={() => setContent(About)}>About Me</p>
                </li>
                <li className='nav-item'>
                    <p onClick={() => setContent(Contact)}>Contact</p>
                </li>
                <li className='nav-item'>
                    <p onClick={() => setContent(Portfolio)}>Portfolio</p>
                </li>
            </ul>
            </nav>
        </>
    )
}

export default Nav;