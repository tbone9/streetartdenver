import React, { Component } from 'react';
import ArtThumb from '../../components/ArtThumb/ArtThumb';
import firebaseService from '../../utils/firebaseService';
import './styles.css';

class UpdateArtPage extends Component {
    _isMounted = false;

    constructor() {
        super();
        this.state = {
            art: []
        }
    }

    async componentDidMount() {
        this._isMounted = true;

        const art = await firebaseService.getAllArt();
        if (this._isMounted) {
            this.setState({
                art: art
            })
        }
    }

    removeArt = (e, id) => {
        e.preventDefault();
        console.log(id)
    }

    updateArt = (e, id) => {
        e.preventDefault();
        console.log(id)
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return (
            <div className='updateContainer'>
                <h2>Update Art</h2>
                <div className='updateInnerContainer'>
                    {this.state.art.map(piece => (
                        <div key={piece.id}>
                            <img height='200' src={piece.imageURL} alt='' />
                            <button type='submit' onClick={(e) => this.removeArt(e, piece.id)}>X</button>
                            <button type='submit' onClick={(e) => this.updateArt(e, piece.id)}>Update</button>
                        </div>
                    ))}
                </div>
            </div >
        )
    }
}

export default UpdateArtPage;