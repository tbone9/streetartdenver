import React, { Component } from 'react';
// import app from '../../firebase';
import firebase from '../../firebase';
import { storage } from '../../firebase';
import firebaseService from '../../utils/firebaseService';

class UpdateForm extends Component {
    constructor(props) {
        super(props);
        const art = props.location.state.art;
        this.state = {
            id: art.id,
            artist: art.artist,
            date: art.date,
            description: art.description,
            neighborhood: art.neighborhood,
            title: art.title,
            imageURL: art.imageURL,
            image: null,
            progress: 0,
            errMsg: '',
            uploaded: false
        }
    }

    handleImageChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            if (image.type === 'image/jpeg') {
                this.setState(() => ({
                    image: image,
                    errMsg: ''
                }));

                this.handleUpload(image);
            } else {
                this.setState({
                    errMsg: 'Upload is not an image!'
                })
            }
        }
    }

    handleUpload = async (image) => {

        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                // progress function ...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({ progress });
            },
            error => {
                // Error function ...
                console.log(error);
            },
            () => {
                // complete function ...
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({ imageURL: url });
                    });
            }
        );

    };

    handleChange = (e) => {
        this.setState({
            uploaded: false,
            [e.target.name]: e.target.value
        });
    }

    isFormInvalid = () => {
        return !(this.state.imageURL);
    }

    handleSubmit = (e) => {
        try {
            e.preventDefault();
            const artToUpdate = {
                artist: this.state.artist,
                title: this.state.title,
                date: this.state.date,
                description: this.state.description,
                neighborhood: this.state.neighborhood,
                imageURL: this.state.imageURL
            }
            console.log(artToUpdate, 'Art to update')
            const updatedArt = firebaseService.updateArt(this.state.id, artToUpdate);
            console.log(updatedArt, 'updated art')

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h2>Update</h2>
                <div className='formContainer'>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='title'>Title
                            <input type='text' placeholder='Title' name='title' onChange={this.handleChange} value={this.state.title} />
                        </label>
                        <label htmlFor='artist'>Artist
                            <input type='text' placeholder='Artist' name='artist' onChange={this.handleChange} value={this.state.artist} /></label>
                        <label htmlFor='date'>Year
                            <select name='date' onChange={this.handleChange} value={this.state.date}>
                                <option value={2020}>2020</option>
                                <option value={2019}>2019</option>
                                <option value={2018}>2018</option>
                                <option value={2017}>2017</option>
                                <option value={2016}>2016</option>
                                <option value={2015}>2015</option>
                                <option value={2014}>2014</option>
                                <option value={2013}>2013</option>
                                <option value={2012}>2012</option>
                                <option value={2011}>2011</option>
                                <option value={2010}>2010</option>
                                <option value={2009}>2009</option>
                                <option value={2008}>2008</option>
                            </select>
                        </label>
                        <label htmlFor='description'>Description
                            <input type='text' placeholder='Description' name='description' onChange={this.handleChange} value={this.state.description} />
                        </label>
                        <label htmlFor='neighborhood'>Region
                            <select name='neighborhood' onChange={this.handleChange} value={this.state.neighborhood}>
                                <option value='Cherry Creek Trail'>Cherry Creek Trail</option>
                                <option value='SantaFe'>SantaFe/S.Broadway</option>
                                <option value='Downtown'>Downtown</option>
                                <option value='RiNo'>Rino/Five Points</option>
                            </select>
                        </label>
                        <label htmlFor='image'>Image
                            <input type='file' accept="image/*" onChange={this.handleImageChange} /> <br></br>
                            {this.state.errMsg ? <p>{this.state.errMsg}</p> :
                                <progress value={this.state.progress} max='100' />
                            }
                        </label>
                        <button className='formButton' type='submit' disabled={this.isFormInvalid()}>Update</button>
                    </form>
                    {/* <button className='formButton' onClick={this.handleLogOut}>Sign Out</button> */}
                </div>
            </div>
        )
    }
}

export default UpdateForm;