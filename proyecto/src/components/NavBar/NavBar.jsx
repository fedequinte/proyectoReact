import React from 'react'
import CartWidget from '../CarWidget/CartWidget'
import { Link } from 'react-router-dom'

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
                    <Link to="/Carrito"><CartWidget/></Link>   
                </div>
            </div>
        </nav>
    )
}

export default NavBar