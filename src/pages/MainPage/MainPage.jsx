import React from 'react';
import Hood from '../../components/Hood/Hood';
import { Link } from 'react-router-dom';
import './styles.css';

function MainPage() {

    const hoods = ['Cherry Creek Trail', 'Lincoln Park', 'Baker', 'Speer', 'LoDo', 'Five Points']

    return (
        <div id='mainPageContainer'>
            <h1 id='pageTitle'>Denver Street Art</h1>
            <div className='hoodContainer'>
                {hoods.map((hood, i) => (
                    <Link key={i} to={{ pathname: '/hoodPage', name: { hood } }}><Hood name={hood} key={i} /> </Link>
                ))}
            </div>
        </div>
    )
};

export default MainPage;