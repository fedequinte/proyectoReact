import React from 'react'
import { Link } from 'react-router-dom'
import '../CssComponents/navBar.css'
import CartWidget from '../CarWidget/CartWidget'


const NavBar = () => {
    return (
        <nav>
            <div className='nav app'>
                <Link to="/"><img className='logo' src="../img/NewLogo.webp" alt="Logo" /></Link>
                <div className='links'>
                    <ul>
                        <li>
                            <Link to="/categoria/Camisetas">Camisetas</Link>
                        </li>
                        <li>
                            <Link to="/categoria/Shorts">Shorts</Link>
                        </li>
                        <li>
                            <Link to="/categoria/Basquet">Basquet</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to="/Cart"><CartWidget/></Link>   
                </div>
            </div>
        </nav>
    )
}

export default NavBar