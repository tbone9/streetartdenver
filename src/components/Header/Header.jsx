import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

function Header() {
    return (
        <header>
            <nav>
                <NavLink className='navLink'
                    exact
                    activeClassName='active'
                    className='navLink'
                    to={'/'}>Home
                </NavLink>
                <NavLink className='navLink'
                    exact
                    activeClassName='active'
                    className='navLink'
                    to={'/about'}>About
                </NavLink>
                <NavLink className='navLink'
                    exact
                    activeClassName='active'
                    className='navLink'
                    to={'/login'}>Add Art
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;