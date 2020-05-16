import React from 'react';
import Hood from '../../components/Hood/Hood';
import './styles.css';

function MainPage() {

    const hoods = ['Cherry Creek Trail', 'Lincoln Park', 'Baker', 'Speer', 'LoDo', 'Five Points']

    return (
        <div id='mainPageContainer'>
            <h1 id='pageTitle'>Denver Street Art</h1>
            <div className='hoodContainer'>
                {hoods.map((hood, i) => (
                    <Hood name={hood} key={i} />
                ))}
            </div>
        </div>
    )
};

export default MainPage;