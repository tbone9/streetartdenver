import React from 'react';
import './styles.css';

function About() {
    return (
        <div id='aboutContainer'>

            <h2>About Denver Street Art</h2>

            <div className='contentContainer'>
                <p>Take a virtual tour of Denver's amazing street art. Thanks to the Urban Arts Fund and the creativity of artists around the city, bold and mesmerizing works can be found in every neighborhood.</p><br></br>

                <p>This project is an attempt to portray every work around the city, but the city is big and this project is the work of one person. There will be inaccuracies, mistakes, and missing pieces.</p><br></br>

                <p>This project was made with ReactJS and Firebase.</p>
            </div>

        </div>
    )
}

export default About;