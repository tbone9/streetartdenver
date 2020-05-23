import React from 'react';
import ArtModal from '../ArtModal/ArtModal';
import hooks from '../../Hooks/hooks';
import './styles.css'

const ArtThumb = (props) => {
    const { isShowing, toggle } = hooks.useModal();
    return (
        <div className='artThumb' key={props.piece.id} onClick={toggle}>
            <img className='thumb' src={props.piece.imageURL} alt={props.piece.description}></img>
            <ArtModal art={props.piece} isShowing={isShowing} hide={toggle} />
        </div>
    )
}

export default ArtThumb;