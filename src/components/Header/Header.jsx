import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import { AuthContext } from '../../Auth/Auth';

function Header() {
    const { currentUser } = useContext(AuthContext);
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