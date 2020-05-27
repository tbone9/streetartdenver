import React from 'react';
import './styles.css';
import ArtThumb from '../../components/ArtThumb/ArtThumb';
import hooks from '../../Hooks/hooks';

const SantaFe = () => {

    const art = hooks.GetArt('SantaFe')

    return (

        <div id='hoodPageContainer'>
            <h2>SantaFe and South Broadway</h2>

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

export default SantaFe;