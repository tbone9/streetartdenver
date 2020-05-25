import React, { Component } from 'react';
import '../formStyles.css';
import app from '../../firebase';
import firebase from '../../firebase';
import { storage } from '../../firebase';
import { Link } from 'react-router-dom';

class AddArt extends Component {

    state = {
        title: '',
        artist: '',
        date: '',
        description: '',
        neighborhood: 'Cherry Creek Trail',
        imageURL: '',
        image: null,
        progress: 0,
        errMsg: '',
        uploaded: false
    }

    // handleChange updates state as inputs in the form change

    handleChange = (e) => {
        this.setState({
            uploaded: false,
            [e.target.name]: e.target.value
        });
    }

    // handleImageChange updates state for when images are uploaded

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

    // handleUpload actually uploads the image directly to firebase storage, as well as calculates the progress of the upload, and sets the imageURL state after upload

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

    // handleSubmit handles the overall submission of each piece of art

    handleSubmit = e => {
        try {
            e.preventDefault();
            firebase
                .firestore()
                .collection('art')
                .add({
                    date: this.state.date,
                    title: this.state.title,
                    description: this.state.description,
                    imageURL: this.state.imageURL,
                    artist: this.state.artist,
                    neighborhood: this.state.neighborhood
                })
                .then(() =>
                    this.setState({
                        date: '',
                        title: '',
                        description: '',
                        imageURL: '',
                        neighborhood: 'Cherry Creek Trail',
                        progress: 0,
                        uploaded: true
                    }))
                .then(console.log('art added!'))

        } catch (error) {
            console.log(error);
        }
    }

    // Logs the user out

    handleLogOut = () => {
        app.auth().signOut();
        this.props.history.push('/');
    }

    // Validates the form

    isFormInvalid = () => {
        return !(this.state.imageURL);
    }

    render() {
        return (
            <div className='formPageContainer'>
                <h2>Add a Piece of Art</h2>
                <div className='contentContainer'>
                    <p>Instructions</p>
                    <ol>
                        <li>Every submission must have at least an image and neighborhood.</li>
                        <li>Prior to submitting photos, make sure the photo is centered and cropped appropriately, ADJUST COLOR TO MAKE IT POP, and compress it with <a href='https://tinyjpg.com/' target='_blank' rel='noopener noreferrer'>Tinyjpg.</a></li>
                        <li>The description will become the image 'alt' field, so write it appropriately.</li>
                        <li>If you need to edit details of existing art, go <Link to={'/updateArt'}>here.</Link></li>
                    </ol>
                </div>
                <div className='formContainer'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' placeholder='Title' name='title' onChange={this.handleChange} value={this.state.title} />
                        <input type='text' placeholder='Artist' name='artist' onChange={this.handleChange} value={this.state.artist} />
                        <input type='date' name='date' onChange={this.handleChange} value={this.state.date} />
                        <input type='text' placeholder='Description' name='description' onChange={this.handleChange} value={this.state.description} />
                        <select name='neighborhood' onChange={this.handleChange} value={this.state.neighborhood}>
                            <option value='Cherry Creek Trail'>Cherry Creek Trail</option>
                            <option value='SantaFe'>SantaFe/S.Broadway</option>
                            <option value='Downtown'>Downtown</option>
                            <option value='RiNo'>Rino/Five Points</option>
                        </select>
                        <input type='file' accept="image/*" onChange={this.handleImageChange} /> <br></br>
                        {this.state.errMsg ? <p>{this.state.errMsg}</p> :
                            <progress value={this.state.progress} max='100' />
                        }

                        <button className='formButton' type='submit' disabled={this.isFormInvalid()}>Add</button>
                    </form>
                    <button className='formButton' onClick={this.handleLogOut}>Sign Out</button>
                </div>
                <div className='formContainer'>
                    {this.state.uploaded ?
                        <h3>Artwork successfully uploaded!</h3> : ''}
                </div>
            </div>
        )
    }
}

export default AddArt;