import React from 'react';
import './NavBar.css';
import logoNav from '../img/wallet-logo.png';

function NavBar () {
    return (
        <nav className='navbar'>
            <img className='navbar__img' src= {logoNav} alt='wallet' />
            <ul className = 'navbar__ul'>
                <li className='item-navbar'><a href='#'>HOME</a></li>
                <li className='item-navbar'><a href='#'>INVERSIONES</a></li>
                <li className='item-navbar'><a href='#'>MI CARTERA</a></li>
                <li className='item-navbar'><a href='#'>MERCADOS</a></li>
                <li className='item-navbar'><a href='#'>CONTACTO</a></li>
            </ul>
        </nav>
    );
}


export default NavBar;