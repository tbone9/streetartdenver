import React from 'react';
import './styles.css';

function About() {
    return (
        <div id='aboutContainer'>

            <h2>About Denver Street Art</h2>

            <div className='contentContainer'>
                <p>Take a virtual tour of Denver's amazing street art! Thanks to the <a href='https://denverpublicart.org/urban-arts-fund/' target='_blank' rel='noopener noreferrer'>Urban Arts Fund</a>(UAF) and the creativity of artists around the city, bold and mesmerizing works can be found in every neighborhood.</p><br></br>

                <p>This project is an attempt to portray every work around the city, including but not limited to works funded by the UAF. Keep in mind that the city is big and this project is the work of one person, so there will be inaccuracies, mistakes, and missing pieces. It is often difficult to track down exact information for every work of art in the city. If you see any glaring mistakes or are interested in working with the creator of this site, please send inquiries <a href='mailto:tylerjwalker@gmail.com'>here.</a></p><br></br>

                <p>This project was made with ReactJS and Firebase. The map on the home page is from <a href='https://www.mapbox.com/' target='_blank' rel='noopener noreferrer'>mapbox</a>, using the react-map-gl package. The code can be found here: <a href='https://github.com/tbone9/streetartdenver' target='_blank' rel='noopener noreferrer'>GitHub</a></p><br></br>

                <p>The background image is the work of <a href='https://www.flickr.com/photos/drljohnson/' target='_blank' rel='noopener noreferrer'>Larry Johnson.</a></p>
            </div>

        </div>
    )
}

export default About;