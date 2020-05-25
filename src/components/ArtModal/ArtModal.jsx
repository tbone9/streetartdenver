import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

// This component displays each piece of art by itself, including all the details for that piece.



const ArtModal = ({ isShowing, hide, art }) => isShowing ? ReactDOM.createPortal(

    < React.Fragment >
        <div className='modal-overlay'>
            <div className='modal-wrapper'>
                <div className='modal'>
                    <h2>{art.title}</h2>
                    <img src={art.imageURL} alt={art.description}></img>
                    <div id='artDetails'>
                        {console.log(art.date.length, 'modal art')}
                        {art.artist ? <p>by: {art.artist}</p> : ''}
                        {art.date ? <p>created: {art.date}</p> : ''}
                        <p id='description'>{art.description}</p>

                    </div>
                    <button type='button' className="modal-close-button" onClick={hide}>Close</button>
                </div>
            </div>
        </div>
    </React.Fragment >, document.body

    // The modal is mounted, more or less, outside the virtual dom, on document.body

) : null;

export default ArtModal;