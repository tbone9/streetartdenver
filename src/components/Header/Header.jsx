import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

function Header() {
    return (
        <header className='header'>
            <NavLink
                exact
                activeClassName='active'
                className='navLink'
                to={'/'}>Home
            </NavLink>
            <NavLink
                exact
                activeClassName='active'
                className='navLink'
                to={'/about'}>About
            </NavLink>
            <NavLink
                exact
                activeClassName='active'
                className='navLink'
                to={'/login'}>Add Art
            </NavLink>
        </header>
    )
}

export default Header;