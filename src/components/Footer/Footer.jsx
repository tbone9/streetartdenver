import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <span>2020 by <a href='https://tylerwalker.org/' target='_blank' rel='noopener noreferrer'>Tyler Walker</a></span>
            <NavLink id='admin'
                exact
                activeClassName='active'
                to={'/login'}>Admin
                </NavLink>
        </footer>
    )
}

export default Footer;