import React from 'react';
import './styles.css';
import ArtThumb from '../../components/ArtThumb/ArtThumb';
import hooks from '../../Hooks/hooks';

const RiNo = () => {

    const art = hooks.GetArt('RiNo')

    return (

        <div id='hoodPageContainer'>
            <h2>RiNo and Five Points</h2>

            <div id='hoodInnerContainer'>
                {art.length ?
                    art.map(piece => (
                        <ArtThumb key={piece.id} piece={piece} />
                    ))
                    : <span>No artwork yet. Check back soon!</span>}

            </div>

        </div>
    )
};

export default RiNo;