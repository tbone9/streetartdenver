import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function MainPage(props) {

    return (
        <div id='mainPageContainer'>
            <h1 id='pageTitle'>Denver Street Art</h1>
            <h3>Select a Region</h3>
            <div className='hoodContainer'>
                <Link className='hoodLink' to={{ pathname: '/CherryCreekTrail' }}><div className='hood'>Cherry Creek Trail</div></Link>
                <Link className='hoodLink' to={{ pathname: '/SantaFe' }}><div className='hood'>Santa Fe and South Broadway</div></Link>
                <Link className='hoodLink' to={{ pathname: '/Downtown' }}><div className='hood'>Downtown</div></Link>
                <Link className='hoodLink' to={{ pathname: '/RiNo' }}><div className='hood'>RiNo and Five Points</div></Link>
            </div>
        </div>
    )
};

export default MainPage;