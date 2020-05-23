import React from 'react';
import './styles.css';
import ArtThumb from '../../components/ArtThumb/ArtThumb';
import hooks from '../../Hooks/hooks';

const RiNo = () => {

    const art = hooks.GetArt('RiNo')

    return (

        <div id='hoodPageContainer'>
            <h2>RiNo</h2>

            <div id='hoodInnerContainer'>
                {art.length ?
                    art.map(piece => (
                        <ArtThumb key={piece.id} piece={piece} />
                    ))
                    : <h2>No artwork yet. Check back soon!</h2>}

            </div>

        </div>
    )
};

export default RiNo;