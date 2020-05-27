import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

// This component holds the navigation links

function Header() {

    return (
        <header>
            <NavLink
                exact
                activeClassName='active'
                to={'/'}><h1 id='pageTitle'>Denver Street Art</h1>
            </NavLink>

            <nav className='dropdown'>
                <i className="fa fa-bars fa-4x" aria-hidden="true"></i>
                <div className='dropdown-content'>
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
                </div>

            </nav>

        </header>
    )
}

export default Header;