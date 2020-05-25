import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import ReactMapGL, { Marker } from 'react-map-gl';

function MainPage(props) {

    // hoods are all the details of each region (neighborhood)

    const hoods = [
        { name: 'Cherry Creek Trail', lat: 39.741018, lng: -104.999183, link: 'CherryCreekTrail' },
        { name: 'Downtown', lat: 39.750999, lng: -104.995061, link: 'Downtown' },
        { name: 'RiNo and Five Points', lat: 39.758492, lng: -104.987439, link: 'RiNo' },
        { name: 'SantaFe and South Broadway', lat: 39.728895, lng: -104.998437, link: 'SantaFe' },
    ]

    // this sets the viewport of the map

    const [viewport, setViewport] = useState({
        latitude: 39.741409,
        longitude: -104.984841,
        zoom: 13,
        width: '100%',
        height: '100%'
    });

    return (
        <div className='mainPageContainer'>
            <h1 id='pageTitle'>Denver Street Art</h1>
            <h3>Select a Region</h3>
            <div className='hoodContainer'>

                <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle='mapbox://styles/tbone99/ckalk9m123x2m1il7lkllf7jr'
                    onViewportChange={viewport => {
                        setViewport(viewport);
                    }}>
                    {hoods.map(hood => (
                        <Marker key={hood.name} latitude={hood.lat} longitude={hood.lng}>
                            <Link className='hoodLink' to={{ pathname: `/${hood.link}` }}><h3>{hood.name}</h3></Link>
                        </Marker>
                    ))}
                </ReactMapGL>

                {/* I'm keeping the links below, in case the map doesn't work or I change my mind about it */}

                {/* <Link className='hoodLink' to={{ pathname: '/CherryCreekTrail' }}><div className='hood'>Cherry Creek Trail</div></Link>
                <Link className='hoodLink' to={{ pathname: '/SantaFe' }}><div className='hood'>Santa Fe and South Broadway</div></Link>
                <Link className='hoodLink' to={{ pathname: '/Downtown' }}><div className='hood'>Downtown</div></Link>
                <Link className='hoodLink' to={{ pathname: '/RiNo' }}><div className='hood'>RiNo and Five Points</div></Link> */}
            </div>
        </div>
    )
};

export default MainPage;