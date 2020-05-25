import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

// This component holds the navigation links

function Header() {

    return (
        <header>
            <nav>
                <NavLink className='navLink'
                    exact
                    activeClassName='active'
                    to={'/'}>Home
                </NavLink>
                <NavLink className='navLink'
                    exact
                    activeClassName='active'
                    to={'/about'}>About
                </NavLink>

            </nav>

        </header>
    )
}

export default Header;