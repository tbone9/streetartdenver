import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const ArtModal = ({ isShowing, hide, art }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className='modal-overlay'>
            <div className='modal-wrapper'>
                <div className='modal'>
                    <h2>{art.title}</h2>
                    <img src={art.imageURL} alt={art.description}></img>
                    <div id='artDetails'>
                        {art.artist ? <p>by: {art.artist}</p> : ''}
                        {art.date ? <p>created: {art.date}</p> : ''}
                        <p id='description'>{art.description}</p>

                    </div>
                    <button type='button' className="modal-close-button" onClick={hide}>Close</button>
                </div>
            </div>
        </div>
    </React.Fragment >, document.body

) : null;

export default ArtModal;