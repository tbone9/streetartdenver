import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

// This component holds the navigation links

function Header() {

    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };
    const closeNav = () => {
        setIsNavVisible(false);
    }

    return (
        <header >
            <NavLink
                exact
                activeClassName='active'
                to={'/'}><h1 onClick={closeNav} id='pageTitle'>Denver Street Art</h1>
            </NavLink>

            <nav className='dropdown'>
                <i onClick={toggleNav} className="fa fa-bars fa-3x" aria-hidden="true"></i>
                {isNavVisible ?
                    <div onClick={toggleNav} className='dropdown-content'>

                        <NavLink className='navLink'
                            exact
                            activeClassName='active'
                            to={'/Rino'}>RiNo
                        </NavLink>
                        <NavLink className='navLink'
                            exact
                            activeClassName='active'
                            to={'/Downtown'}>Downtown
                        </NavLink>
                        <NavLink className='navLink'
                            exact
                            activeClassName='active'
                            to={'/CherryCreekTrail'}>Cherry Creek Trail
                        </NavLink>
                        <NavLink className='navLink'
                            exact
                            activeClassName='active'
                            to={'/SantaFe'}>SantaFe
                        </NavLink>
                        <NavLink className='navLink'
                            exact
                            activeClassName='active'
                            to={'/about'}>About
                        </NavLink>


                    </div>
                    : ''}
            </nav>

        </header>
    )
}

export default Header;