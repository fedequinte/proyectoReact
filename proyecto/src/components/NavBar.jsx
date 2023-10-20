import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav>
            <div className='nav app'>
                <a href="home"><img className='logo' src="../img/NewLogo.webp" alt="Logo" /></a>
                <div className='links'>
                    <ul>
                        <li>
                            <a href="/Camisetas">Camisetas</a>
                        </li>
                        <li>
                            <a href="/Shorts">Short</a>
                        </li>
                        <li>
                            <a href="Basquet">Basquet</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="carrito"><CartWidget/></a>   
                </div>
            </div>
        </nav>
    )
}

export default NavBar